import { action, makeAutoObservable, makeObservable, observable, runInAction } from "mobx";
import agent from "../api/agent";
import { Travel } from "../models/travel";
import {v4 as uuid} from 'uuid';

export default class TravelStore{
    travelRegistry = new Map<string, Travel>();
    selectedTravel: Travel | undefined = undefined;
    editMode= false;
    loading=false;
    loadingInitial= true;


    constructor(){
        makeAutoObservable(this)
    }

    get travelsByDate() {
        return Array.from(this.travelRegistry.values()).sort((a, b) => 
        Date.parse(a.date) - Date.parse(b.date));
    }

    loadTravels = async () => {
        try{
            const travels= await agent.Travels.list();
                travels.forEach(travel => {
                    travel.date= travel.date.split('T')[0];
                    this.travelRegistry.set(travel.id, travel);
                  })
                  this.setLoadingInitial(false);
        }catch(error){
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    setLoadingInitial = (state: boolean) =>{
        this.loadingInitial=state;
    }


    selectTravel = (id: string) => {
        this.selectedTravel=this.travelRegistry.get(id);
    }

    cancelSelectedTravel =() => {
        this.selectedTravel =undefined;
    }

    openForm = (id? : string) => { 
        id ? this.selectTravel(id) : this.cancelSelectedTravel();
        this.editMode=true;
    }
    closeForm = () =>{
        this.editMode=false;
    }

    createTravel = async (travel: Travel) =>{
            this.loading=true;
            travel.id = uuid();
            try{
                await agent.Travels.create(travel);
                runInAction(() =>{
                    this.travelRegistry.set(travel.id, travel);
                    this.selectedTravel = travel;
                    this.editMode=false;
                    this.loading=false;
                })
            }catch(error){
                console.log(error);
                runInAction(() =>{
                    this.loading=false;
                })
            }
    }

    updateTravel= async (travel: Travel) =>{
        this.loading=true;
        try{
            await agent.Travels.update(travel);
            runInAction(() =>{
               this.travelRegistry.set(travel.id, travel);
                this.selectedTravel =travel;
                this.editMode=false;
                this.loading=false;
            })
        }catch(error){
            console.log(error);
            runInAction(() => {
                this.loading=false;
            })
        }
    }

    deleteTravel = async (id: string) => {
        this.loading=true;
        try{
            await agent.Travels.delete(id);
            runInAction(() => {
                this.travelRegistry.delete(id);
                if(this.selectedTravel?.id === id) this.cancelSelectedTravel();   
                this.loading=false;
            })
        }catch(error){
            console.log(error);
            runInAction(() =>{
                this.loading=false;
            })
        }
    }
}
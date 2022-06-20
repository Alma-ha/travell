import { action, makeAutoObservable, makeObservable, observable, runInAction } from "mobx";
import agent from "../api/agent";
import { Travel } from "../models/travel";

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
        this.loadingInitial=true;
        try{
            const travels= await agent.Travels.list();
                travels.forEach(travel => {
                   this.setTravel(travel);
                  })
                  this.setLoadingInitial(false);
        }catch(error){
            console.log(error);
            this.setLoadingInitial(false);
        }
    }


    loadTravel =async (id: string) => {
        let travel = this.getTravel(id);
        if(travel) {
            this.selectedTravel=travel;
            return travel;
        } else{
            this.loadingInitial=true;
            try{
                travel = await agent.Travels.details(id);
                this.setTravel(travel);
                runInAction(() => {
                    this.selectedTravel= travel;
                })
                this.setLoadingInitial(false);
                return travel;
            }catch(error){
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    } 

    private setTravel= (travel : Travel) => {
        travel.date= travel.date.split('T')[0];
        this.travelRegistry.set(travel.id, travel);
    }

    private getTravel = (id: string) =>{
        return this.travelRegistry.get(id);
    }
    setLoadingInitial = (state: boolean) =>{
        this.loadingInitial=state;
    }


    createTravel = async (travel: Travel) =>{
            this.loading=true;
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
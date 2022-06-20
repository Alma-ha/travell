import { action, makeAutoObservable, makeObservable, observable, runInAction } from "mobx";
import agents from "../api/agentstory";
import { Story } from "../models/story";

export default class StoryStore{
    storyRegistry = new Map<string, Story>();
    selectedStory: Story | undefined = undefined;
    editMode= false;
    loading=false;
    loadingInitial= true;


    constructor(){
        makeAutoObservable(this)
    }

    get storiesByDate() {
        return Array.from(this.storyRegistry.values()).sort((a, b) => 
        Date.parse(a.date) - Date.parse(b.date));
    }

    loadStories = async () => {
        this.loadingInitial=true;
        try{
            const stories= await agents.Stories.list();
                stories.forEach(story => {
                   this.setStory(story);
                  })
                  this.setLoadingInitial(false);
        }catch(error){
            console.log(error);
            this.setLoadingInitial(false);
        }
    }


    loadStory =async (id: string) => {
        let story = this.getStory(id);
        if(story) {
            this.selectedStory=story;
            return story;
        } else{
            this.loadingInitial=true;
            try{
                story = await agents.Stories.details(id);
                this.setStory(story);
                runInAction(() => {
                    this.selectedStory= story;
                })
                this.setLoadingInitial(false);
                return story;
            }catch(error){
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    } 

    private setStory= (story : Story) => {
        story.date= story.date.split('T')[0];
        this.storyRegistry.set(story.id, story);
    }

    private getStory = (id: string) =>{
        return this.storyRegistry.get(id);
    }
    setLoadingInitial = (state: boolean) =>{
        this.loadingInitial=state;
    }


    createStory = async (story: Story) =>{
            this.loading=true;
            try{
                await agents.Stories.create(story);
                runInAction(() =>{
                    this.storyRegistry.set(story.id, story);
                    this.selectedStory = story;
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

    updateStory= async (story: Story) =>{
        this.loading=true;
        try{
            await agents.Stories.update(story);
            runInAction(() =>{
               this.storyRegistry.set(story.id, story);
                this.selectedStory =story;
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

    deleteStory = async (id: string) => {
        this.loading=true;
        try{
            await agents.Stories.delete(id);
            runInAction(() => {
                this.storyRegistry.delete(id);  
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
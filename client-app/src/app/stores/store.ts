import { createContext, useContext } from "react"
import StoryStore from "./storyStore"
import TravelStore from "./travelStore"

interface Store{
    travelStore: TravelStore
    storyStore: StoryStore
}

export const store: Store={
    travelStore: new TravelStore(),
    storyStore: new StoryStore()
}

export const StoreContext= createContext(store);

export function useStore(){
    return useContext(StoreContext);
}
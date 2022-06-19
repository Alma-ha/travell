import { createContext, useContext } from "react"
import TravelStore from "./travelStore"

interface Store{
    travelStore: TravelStore
}

export const store: Store={
    travelStore: new TravelStore()
}

export const StoreContext= createContext(store);

export function useStore(){
    return useContext(StoreContext);
}
import axios, {AxiosResponse} from 'axios';
import { Travel } from '../models/travel';

const sleep=(delay:number) => {
    return new Promise((resolve) =>{
        setTimeout(resolve,delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(async response =>{
   try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

const responseBody= <T> ( response: AxiosResponse<T>) => response.data;

const requests={ 
    get:<T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del:<T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const Travels={ 
    list: () => requests.get<Travel[]>('/travels'),
    details: (id: string) => requests.get<Travel>(`/travels/${id}`),
    create: (travel: Travel) => axios.post<void>('/travels', travel),
    update: (travel: Travel) => axios.put<void>(`/travels/${travel.id}`,travel),
    delete: (id: string) =>axios.delete<void>(`/travels/${id}`)
}

const agent={ 
    Travels
}

export default agent;
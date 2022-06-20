import axios, {AxiosResponse} from 'axios';
import { Story } from '../models/story';

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




const Stories={ 
    list: () => requests.get<Story[]>('/stories'),
    details: (id: string) => requests.get<Story>(`/stories/${id}`),
    create: (story: Story) => axios.post<void>('/stories', story),
    update: (story: Story) => axios.put<void>(`/stories/${story.id}`,story),
    delete: (id: string) =>axios.delete<void>(`/stories/${id}`)
} 

const agents={
    Stories
}

export default agents;
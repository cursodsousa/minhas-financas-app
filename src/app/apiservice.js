import axios from 'axios'

export const httpClient = axios.create({
    baseURL: 'http://localhost:8080'
})

class ApiService {

    constructor(apiurl){
        this.apiurl = apiurl;
    }

    post(url, objeto){
        const requestUrl = `${this.apiurl}${url}`
        this.prepareToken()
        return httpClient.post(requestUrl, objeto);
    }

    put(url, objeto){
        const requestUrl = `${this.apiurl}${url}`
        this.prepareToken()
        return httpClient.put(requestUrl, objeto);
    }

    delete(url){
        const requestUrl = `${this.apiurl}${url}`
        this.prepareToken()
        return httpClient.delete(requestUrl)
    }

    get(url){
        const requestUrl = `${this.apiurl}${url}`
        this.prepareToken()
        const token = localStorage.getItem('token');
        return httpClient.get(requestUrl)
    }

    prepareToken(){
        const token = localStorage.getItem('token');
        if(httpClient && token){
            httpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }
    }

}


export default ApiService;
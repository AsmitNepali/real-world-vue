import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    withCredentials: false,
    headers: {
        Accept: 'appliction/json',
        'Content-Type': 'application/json'
    }
})

export default{
    getEvents() {
        return apiClient.get('/events')
    },
    getEvent(id) {
        return apiClient.get('/events/' + id)
    }           
}
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-plant.herokuapp.com/',

})

export default api;

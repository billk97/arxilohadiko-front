import axios from 'axios'

const service  = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export default service
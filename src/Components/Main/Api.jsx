import axios from "axios"

export default axios.create({
    baseURL: 'http://172.42.10.32:8000',
    // baseURL: 'http://localhost:8000'
})

import axios from "axios"

const API=axios.create({
    baseURL:"localhost:5000"
})
export default API
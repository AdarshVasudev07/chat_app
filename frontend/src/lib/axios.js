import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"http://http://localhost:5001/api",
    withCredentials:true,
})
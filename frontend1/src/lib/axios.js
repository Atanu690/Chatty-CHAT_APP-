import axios from "axios";


const URL=import.meta.env.VITE_APP_BACKEND_URL;
console.log(URL);
export const axiosInstance=axios.create({
  baseURL: `${URL}/api`,
  withCredentials: true,// send the cookies in every single request
  
})
import axios from "axios";



console.log(URL);
export const axiosInstance=axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
  withCredentials: true,// send the cookies in every single request
  
})
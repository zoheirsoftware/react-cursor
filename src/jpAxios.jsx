import axios from "axios";

export const jpAxios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    Authorization: "Bearer 1233d",
    "Content-type": "application/json",
  },
  timeout: 5000,
  timeoutErrorMessage:"لطفا صبور باشید"
});

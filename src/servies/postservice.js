import { jpAxios } from "../jpAxios";

export const postsgetService=()=>{
   return jpAxios.get("/posts")
}
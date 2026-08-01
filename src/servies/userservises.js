import { jpAxios } from "../jpAxios";
import swal from "sweetalert";
export const adduser=async (data)=>{
    await  jpAxios .post("/users",data).then((res) => {     
        swal("ثبت رکورد با موفقیت انجام شد", {
        icon: "success",
      });
   })  
 
}

export const updateuser=async (data,userid)=>
{
    
await jpAxios.put(`/users/${userid}`,data).then((res) => {  
        swal("ویرایش رکورد با موفقیت انجام شد", {
            icon: "success",
          });
       })
}
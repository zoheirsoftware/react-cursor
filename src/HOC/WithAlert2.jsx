import React from "react";
import swal from "sweetalert";
const WithAlert2 =(props)=>{
   
        const Confirm = (message) => {
          return swal({
            title: "حذف رکورد",
            text:message,
            icon: "warning",
            buttons: ["خیر", "بله"],
            dangerMode: true,
          });
        };
    
        const ConfirmAlret=(message,icon)=>{
            return (
                swal(message, {
                    icon: icon,
                    buttons:"متوجه شدم"
                  })
            )
        }
    return(
        <>
        {/* {props.render(Confirm,ConfirmAlret)} */}

        {props.children(Confirm,ConfirmAlret)}
        </>
    )
}

export default WithAlert2;
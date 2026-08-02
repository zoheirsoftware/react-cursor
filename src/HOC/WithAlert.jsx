import React, { useState } from "react";
import swal from "sweetalert";
const WithAlert = (Maincomponent) => {
  const NewComponet = (props) => {
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
    return <Maincomponent {...props} Confirm={Confirm}  ConfirmAlret={ConfirmAlret} />;
  };

  return NewComponet;
};
export default WithAlert;

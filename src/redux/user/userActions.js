import axios from "axios";
import {
  SEND_USER_REQUEST,
  RECIVE_USER_RESPONSE,
  RECIVE_USER_ERROR,
} from "./userTypes";

export const sendUserRequest = () => {
  return {
    type: SEND_USER_REQUEST,
  };
};

export const reciveUserResponse=(date)=>{
    return{
        type:RECIVE_USER_RESPONSE,
        payload:date

    }
}
export const reciveUserError=(error)=>{
    return{
        type:RECIVE_USER_ERROR,
        payload:error
    }
}

export const getUser=()=>{
 return(dispatch)=>{
  dispatch(sendUserRequest());

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      dispatch(reciveUserResponse(res.data));
    })
    .catch((error) => {
      dispatch(reciveUserError(error.message))
    });
 }
}
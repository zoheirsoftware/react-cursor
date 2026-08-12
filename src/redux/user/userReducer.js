import { RECIVE_USER_ERROR, RECIVE_USER_RESPONSE, SEND_USER_REQUEST } from "./userTypes";

const userinit = {
  loading: false,
  data: [],
  error: "",
};
const userReducer  = (state = userinit, action) => {
  switch (action.type) {
    case SEND_USER_REQUEST:
      return { ...state, loading: true };

    case RECIVE_USER_RESPONSE:
      return { loading: false, data: action.payload, error: "" };
    case RECIVE_USER_ERROR:
      return { loading: false, data: [], error: action.payload };
      default:
        return state
  }
};

export default userReducer ;
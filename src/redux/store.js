import{applyMiddleware, createStore} from "redux"
 
import userReducer from "./user/userReducer"
import logger from "redux-logger";
import { thunk } from "redux-thunk";

const store=createStore(userReducer,applyMiddleware(logger,thunk))

export default store
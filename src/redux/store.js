import { applyMiddleware, createStore } from "redux";
 
import logger from "redux-logger";
 
import weatherReducer from "./weather/weatherReducer";
import { thunk } from "redux-thunk";

const store = createStore(weatherReducer ,  applyMiddleware(thunk))

export default store;
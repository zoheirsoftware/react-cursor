import { applyMiddleware, createStore } from "redux";
 
import logger from "redux-logger";
 
import weatherReducer from "./weather/weatherReducer";
import { thunk } from "redux-thunk";
import createSagaMiddleware  from "redux-saga";
import { watchesaga } from "./weather/watchesaga";

const sagaMiddleware=createSagaMiddleware()
const store = createStore(weatherReducer ,  applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watchesaga)
export default store;
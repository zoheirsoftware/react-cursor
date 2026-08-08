import {applyMiddleware, createStore} from"redux"
import { composeWithDevTools } from '@redux-devtools/extension';
import rootreducer from "./rootreducer"
import logger from "redux-logger"

const store =createStore(rootreducer,composeWithDevTools (applyMiddleware(logger)))

export default store
import { SEND_WEATHER_REQUEST } from "./weatherTypes";
import { call, fork, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios, { all } from "axios"
import { receiveWeatherError, receiveWeatherResponse } from "./weatherAction";

export const getWeatherRequest= (query ) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=7ebcd0b29f8e07a508956a38313b3ce0`
    )
    
    .catch((error) => {});
};

function* handelGetWEATHER(action) {
  try {
    const res=yield call(getWeatherRequest,action.payload)
    yield put(receiveWeatherResponse(res.data))
  } catch(error) 
  {
    yield put(receiveWeatherError(error.message))
  }
}
export function* watchesaga() {
    //هر بار زدن باتن درخواست ارسال میشه
 // yield takeEvery(SEND_WEATHER_REQUEST,handelGetWEATHER);
  // فقط اخرین درخواست را اجرا میکند
  yield takeLatest(SEND_WEATHER_REQUEST,handelGetWEATHER);
}

function* handelGetWEATHER1(action) {
    try {
      const res=yield call(getWeatherRequest,action.payload)
      yield put(receiveWeatherResponse(res.data))
    } catch(error) 
    {
      yield put(receiveWeatherError(error.message))
    }
  }
  export function* watchesaga1() {
      //هر بار زدن باتن درخواست ارسال میشه
   // yield takeEvery(SEND_WEATHER_REQUEST,handelGetWEATHER);
    // فقط اخرین درخواست را اجرا میکند
    yield takeLatest(SEND_WEATHER_REQUEST,handelGetWEATHER);
  }
  
  export function* rootsaga(){
    yield all([
        fork(watchesaga),
        fork(watchesaga1)
    ])
  }
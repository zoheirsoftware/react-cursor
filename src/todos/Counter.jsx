import React, { useReducer, useState } from "react";

const init = 0;
const reduser = (state, action) => {
  //   return state + action;
//   if (action === "increser") {
//     return state + 1;
//   }

//   if (action === "decreser") {
//     return state - 1;
//   }
//   if (action === "resat") {
//     return init;
//   }

  switch (action) {
    case "increser":
      return state + 1; 
    case "decreser":
      return state - 1;
     
    case "resat":
      return init;
      
  }
};

export const Counter = () => {
  // const [count,setCount]=useState(0)
  const [count, dispatch] = useReducer(reduser, 0);

  const handelcounter = () => {
    // setCount(count + 1)
    // dispatch(1)
  };
  return (
    <div className="text-center mt-3">
      <h3 className="text-info  text-center">{count}</h3>
      {/* <button  className="btn btn-success"   onClick={ handelcounter}  > */}
      {/* <button  className="btn btn-success"   onClick={ handelcounter}  > */}
      <button className="btn btn-success" onClick={() => dispatch("increser")}>
        افزایش
      </button>
      <button
        className="btn btn-danger mr-3"
        onClick={() => dispatch("decreser")}
      >
        کاهش
      </button>
      <button className="btn btn-info mr-3" onClick={() => dispatch("resat")}>
        ریسیت
      </button>
    </div>
  );
};

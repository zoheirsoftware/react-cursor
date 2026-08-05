import React, { useReducer, useState } from "react";

const init = {
  value1: 0,
  value2: 1,
};
const reduser = (state, action) => {
  switch (action.type) {
    case "increser":
      return { ...state, value1: state.value1 + action.val };
    case "decreser":
      return { ...state, value1: state.value1 - action.val };
      case "increser2":
        return { ...state, value2: state.value2 + action.val };
      case "decreser2":
        return { ...state, value2: state.value2 - action.val };
    case "resat":
      return init;
    default:
      return state;
  }
};

export const Counter = () => {
  const [count, dispatch] = useReducer(reduser, init);

  return (
    <div className="text-center mt-3">
      <h3 className="text-info  text-center">{count.value1}</h3>
      <h3 className="text-info  text-center">{count.value2}</h3>

      <div className="text-center">
        <button className="btn btn-success"  onClick={() => dispatch({type:"increser",val:1})}>   افزایش  </button>
        <button className="btn btn-danger mr-3"  onClick={() => dispatch({type:"decreser",val:2})}  >  کاهش  </button>
      </div>
      <div className="text-center mt-2">
        <button  className="btn btn-success"  onClick={() => dispatch({type:"increser2",val:5})}  > افزایش 2 </button>
        <button className="btn btn-danger mr-3"   onClick={() => dispatch({type:"decreser2",val:3})}   >   کاهش 2  </button>
      </div>
      <button className="btn btn-info mr-3" onClick={() => dispatch({type:"resat"})}>
        ریسیت
      </button>
    </div>
  );
};

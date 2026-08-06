import React, { useMemo, useReducer, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const incream = () => {
    setCount(count + 1);
  };
  const increamTwo = () => {
    setCountTwo(countTwo + 1);
  };

  //با هر بار تغییر state این تابع اجرا میشود
  // const isEvn=()=>{
  //   return count % 2===0
  // }
  
  //اما با استفاده useMemo هنگام تغییر stste => count اجرا میشود
  const isEvn=useMemo(()=>{
    return count % 2===0
  },[count])

  return (
    <div className="text-center mt-3">
    {/* <h3 className="text-center">{isEvn()?"زوج":"فرد"}</h3> */}
    <h3 className="text-center">{isEvn?"زوج":"فرد"}</h3>
      <div className="text-center">
        <button
          className="btn btn-success"
          onClick={incream}
        >
        {`count - one :${count}`}
        </button>
        <br/>  <br/>
        <button
          className="btn btn-danger mr-3"
          onClick={increamTwo}
        >
          {`count - Two  :${countTwo }`}
        </button>
      </div>
     
    </div>
  );
};

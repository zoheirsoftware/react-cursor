import React, { useState } from "react";
 

const ClickCounts = () => { 
 
const [count,setcount]=useState(0)

const handelincreasecount=(number)=>{
  for(let index=0;index<number;index++){
    setcount((prevcount)=>{
      return prevcount+1;
    })
  }
 
}
  return (
    <div className="text-center w-100">
      <button className="btn btn-success " onClick={()=>handelincreasecount(5)}>cont : {count}</button>
    </div>
  );
};

export default ClickCounts;

import React, { useState } from "react";
import Counter from "./Counter";

const ClickCounts = (props) => {
//     const [count,setcount]=useState(0)

//     const handelincreasecount=()=>{
//         setcount(count+1)
//     }
//   return (
//     <div className="text-center w-100">
//       <button className="btn btn-success " onClick={handelincreasecount}>cont : {count}</button>
//     </div>
//   );

const {count,handelincreasecount}=props;
  return (
    <div className="text-center w-100">
      <button className="btn btn-success " onClick={handelincreasecount}>cont : {count}</button>
    </div>
  );
};

export default Counter(ClickCounts);

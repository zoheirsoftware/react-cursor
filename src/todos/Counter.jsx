import React from "react";
import useCounter from "../hooks/useCounter";

export const Counter = () => {
  const [count, incream,decream,reset] = useCounter(1,3);
   
  const [count1, incream1,decream1,reset1] = useCounter(2,4);
 
  return (
    <div className="text-center mt-3">
    
    <h3 className="text-center"> {count}</h3>
      <div className="text-center">
        <button   className="btn btn-success"  onClick={incream }  >   افزایش  </button>
        
        <button  className="btn btn-danger mr-3"   onClick={ decream}   >  کاهش   </button>
        
        <button   className="btn btn-danger mr-3"   onClick={ reset}   >  ریست  </button>
        <br/>  <br/>
        <h3 className="text-center"> {count1}</h3>
        <button   className="btn btn-success"  onClick={incream1 }  >   افزایش  </button>
      
        <button  className="btn btn-danger mr-3"   onClick={ decream1}   >  کاهش   </button>
       
        <button   className="btn btn-danger mr-3"   onClick={ reset1}   >  ریست  </button>
      </div>
     
    </div>
  );
};

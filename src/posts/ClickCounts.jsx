import React, { useState } from "react";
import Counter from "./Counter";

const ClickCounts = (props) => {
 

const {count,handelincreasecount,name}=props;
 
  return (
    <div className="text-center w-100">
      <button className="btn btn-success " onClick={handelincreasecount}>cont-{name} : {count}</button>
    </div>
  );
};

export default Counter(ClickCounts,1);

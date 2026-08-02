 
import React, { useState } from "react";
const Counter=Maincomponent=>{

    const NewComponet=()=>{
        const [count,setcount]=useState(0)

        const handelincreasecount=()=>{
            setcount(count+1)
        }
      return (
        <Maincomponent count={count} handelincreasecount={handelincreasecount} />
      ) ;
    }

    return NewComponet ;
}
export default Counter;
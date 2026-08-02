 
import React, { useState } from "react";
const Counter=(Maincomponent,number)=>{

    const NewComponet=(props)=>{
        const [count,setcount]=useState(0)

        const handelincreasecount=()=>{
            setcount(count+number)
        }
      return (
        <Maincomponent {... props} count={count} handelincreasecount={handelincreasecount} />
      ) ;
    }

    return NewComponet ;
}
export default Counter;
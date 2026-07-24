import React, { forwardRef, useEffect, useRef, useState } from "react";

let counter=0
const Fcomponet =(props,ref)=>{
    const [name,setName]=useState("")
//     const myinput=useRef()

//     const  handelChangeName=()=>{
//         setName(myinput.current.value )

//     }
//  useEffect(()=>{
//      myinput.current.focus()
//  },[]);

const  handelChangeName=()=>{
            setName(ref.current.value )
    
        }

// return(
//     <div className="form-fa-group text-center mt-4 p4">
//     <h4 className="text-center text-dark">حدس کلمه</h4>
//     <input ref={ myinput} className="form-control" type="text" id="myinput" autoComplete="off" />
//     <button className="btn btn-warning my-3" onClick={ handelChangeName}>ثبت</button>
//     <button className="btn btn-secondary my-3 mx-2" onClick={()=>
//     myinput.current.value=""}>حذف</button>
//     <br/>
//     <span>{ counter++}</span>

// </div>
// )

return(
    <div className="form-fa-group text-center mt-4 p4">
    <h4 className="text-center text-dark">حدس کلمه</h4>
    <input ref={ ref} className="form-control" type="text" id="myinput" autoComplete="off" />
    <button className="btn btn-warning my-3" onClick={ handelChangeName}>ثبت</button>
    <button className="btn btn-secondary my-3 mx-2" onClick={()=>
    ref.current.value=""}>حذف</button>
    <br/>
    <span>{ counter++}</span>

</div>
)
}

export default forwardRef(Fcomponet)
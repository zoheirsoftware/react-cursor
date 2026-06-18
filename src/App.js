import React,{useEffect, useState} from "react";
import { createRoot } from "react-dom/client";
import Name from "./Name";
import Timer from "./Timer";
 

const App =()=>{
  
const [title,setTitle]=useState("زهیر هستم")
const [age,setAge]=useState(11)
const [isLight,setIslight]=useState(false)
const handisLight=()=>{
   
   setIslight(!isLight)
}

useEffect (()=>{
  //برای اولین بار رندر در کامپونت اجرا بشن
  console.log("useEffct")
//بعد از بستن کامپونت اجرا شود
return  ()=>{

}

},[])//بعد از هر اتفاق تغییر کند
return (
  <>
  <div style={{background:isLight?"rgb(231, 61, 61)":"#000"}}>
  <Timer/>
  <Name  handisLight={handisLight} isLight={isLight}  title={title} age={age} />
  </div>
 
</>
)

}
export default App;
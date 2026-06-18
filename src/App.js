import React,{useState} from "react";
import { createRoot } from "react-dom/client";
import Name from "./Name";
import Timer from "./Timer";
 

const App =()=>{
  
const [title,setTitle]=useState("زهیر هستم")
const [age,setAge]=useState(11)

const handchangetext=()=>{
  setTitle("کلاس اول هستم")
}

return (
  <>
  <Timer/>
  <Name  hanf={handchangetext}  title={title} age={age} />
</>
)

}
export default App;
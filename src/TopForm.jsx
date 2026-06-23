import React, { useContext, useState } from "react"
import {taskContext} from "./TestContext"

const TopForm =()=>{
    const{itemtask, setItemTask}=useContext(taskContext  )
    const[task,setTask]=useState("")
    const handelSetTask=(event)=>{
        setTask(event.target.value)
    }
    const handelAddTask=(event)=>{
        event.preventDefault()
        setItemTask([... itemtask,{id:Math.round(),titel:task,done:false}])
     }
    return(
    <>
      <h4 className="text-center text-info text_shdow">به کدیاد خوش اومدید</h4>
            <form onSubmit={handelAddTask}>
                <div className="form-group d-flex">
                    <input type="text" className="form-control" value={task} onChange={handelSetTask} />
                    <button type="submit" className="btn btn-success me-1">ثبت</button>
                </div>
            </form>
    </>
    )
}
export default TopForm
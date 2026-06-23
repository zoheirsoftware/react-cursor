import React, { useContext, useState } from "react"
import {taskContext} from "./TestContext"

const TaskItem =()=>{
    // const item=useContext(taskContext)
    // console.log(item.itemtask)
    const {itemtask, setItemTask}=useContext(taskContext)
if(itemtask.length){
    return (
        <>
         <ul className="list-group m-0 p-0 mt-2">
            {
                itemtask.map(t=>(
                    <li className={`list-group-item d-flex justify-content-between 
                    ${t.done?"list-group-item-success":""}`}>
                   {t.titel}
                    <span>
                        {
                            t.done?(  <i className="me-3 pointer fas fa-times text-warning transition_200 text_hover_shadow"></i>):
                            (
                                <i className="me-3 pointer fas fa-check text-success transition_200 text_hover_shadow"></i>
                               
                            )
                        }
                      
                       
                        <i className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow"></i>
                    </span>
                </li>
                ))
            }
         
 

        </ul>
        </>
    )
}
else{
    return (
        <><h4 className="text-center text-danger ">هیچ کاری ثبت نشده استا</h4></>
    )
}
   
}

export default TaskItem
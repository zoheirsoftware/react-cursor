import React, { useContext, useState } from "react"
import {taskContext} from "./TestContext"

const TaskItem =()=>{
    // const item=useContext(taskContext)
    // console.log(item.itemtask)
    const {itemtask, setItemTask}=useContext(taskContext)

    const handelesetDoneTask=(id)=>{
        const index=itemtask.findIndex(t=>t.id===id);
       // alert(index)
       let nweTaskItem=[... itemtask]
       nweTaskItem[index].done=!nweTaskItem[index].done
       setItemTask(nweTaskItem)

    }
    const handeldeletetask=(id)=>{
        let newTaskItem=itemtask.filter(t=>t.id !=id);
        setItemTask(newTaskItem)
    }



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
                            t.done?(  <i onClick={()=>handelesetDoneTask(t.id)} className="me-3 pointer fas fa-times text-warning transition_200 text_hover_shadow"></i>):
                            (
                                <i id="id" onClick={()=>handelesetDoneTask(t.id)} className="me-3 pointer fas fa-check text-success transition_200 text_hover_shadow"></i>
                               
                            )
                        }
                      
                       
                        <i onClick={()=>handeldeletetask(t.id)} className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow"></i>
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
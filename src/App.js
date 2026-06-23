import React, { useEffect, useState } from "react";
import TopForm from "./TopForm";
import TaskItem from "./TaskItem";
import {taskContext} from "./TestContext"

const App = () => {
 const [itemtask, setItemTask] = useState([
    { id: 1, titel: "تمرین شماره 1",done:false },
    { id: 1, titel: "تمرین شماره 2",done:true },
    { id: 1, titel: "تمرین شماره 3" ,done:false}]);

  return (
    <>
      <div className="container w-100 h-100 p-3">
        <div className="row h-100 justify-content-center align-align-items-start">
          <div className="col-12 col-md-8 col-lg-6 bg-light shadow rounded-3 p-3 h_fit">
            <taskContext.Provider value={{itemtask, setItemTask}} >
            <TopForm />
            <TaskItem />
            </taskContext.Provider>
           
          </div>
        </div>
      </div>
    </>
  );
};
export default App;

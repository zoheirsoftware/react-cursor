import React, { useEffect, useState } from "react";
import Name from "./Name";
import Timer from "./Timer";
import { TestContext } from "./TestContext";
import TimerList from "./TimerList";

const App = () => {
  const [title, setTitle] = useState("زهیر هستم");
  const [age, setAge] = useState(11);
  const [isLight, setIslight] = useState(false);
  const [itemArry, setItemarray] = useState(["10 :10 :11", "10 :10 :12"]);
  const handisLight = () => {
    setIslight(!isLight);
  };

  useEffect(() => {
    //برای اولین بار رندر در کامپونت اجرا بشن
    console.log("useEffct");
    //بعد از بستن کامپونت اجرا شود
    return () => {};
  }, []); //بعد از هر اتفاق تغییر کند
  return (
    <>
      {/* value="#ddd" */}
      <TestContext.Provider
        value={{ itemArry: itemArry, setItemarray: setItemarray }}
      >
        <div style={{ background: isLight ? "rgb(231, 61, 61)" : "#fff" }}>
          <Timer  />
          <TimerList />

          <Name
            handisLight={handisLight}
            isLight={isLight}
            title={title}
            age={age}
          />
        </div>
      </TestContext.Provider>
    </>
  );
};
export default App;

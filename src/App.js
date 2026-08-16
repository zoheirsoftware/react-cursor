import { useState } from "react";
import Layout from "./layout/Layout";
import { useSelector } from "react-redux";

function App() { 
 
const  darkmode  = useSelector(state=>  state.darkmode)
 
  return (
    <div className={darkmode}>
      <Layout />
    </div>
  );
}

export default App;
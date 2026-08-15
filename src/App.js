import { useState } from "react";
import Layout from "./layout/Layout";

function App() {
    const[darkmod=String,setDarkmod]=useState("light")
  return (
    <div className={darkmod}>
      <Layout setDarkmod={setDarkmod} darkmod={darkmod}/>
    </div>
  );
}

export default App;
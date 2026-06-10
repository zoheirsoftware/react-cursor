import React from "react";
import { createRoot } from "react-dom/client";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>hell firend</h1>
        <h1>it is data {new Date().toLocaleTimeString()}</h1>
        <Name/>
      </div>
    );
  }
}
class Name extends React.Component{
  render(){
    return (
      <h1>علی</h1>
    )
  }
}
let elem = new App();
let elem1=new Name()
const tick = () => {
  createRoot(document.getElementById("root")).render(<App/>);
};

setInterval(() => {
  tick();
}, 1000);

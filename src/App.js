
import React from "react";
import { createRoot } from "react-dom/client";
import Name from "./Name";
class App extends React.Component {
    constructor(){
      super();
      this.state={
        timer:new Date().toLocaleTimeString()
      }
    }
    render() {
      setInterval(()=>{
        this.setState({
          timer:new Date().toLocaleTimeString()
        })
      },1000)
      return (
        <div>
          <h1>hell firend b</h1>
          <h1>it is data {this.state.timer}</h1>
          <Name/>
        </div>
      );
    }
  }

  export default App;
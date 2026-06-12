import React from "react";
import { createRoot } from "react-dom/client";
import Name from "./Name";
import Timer from "./Timer";
class App extends React.Component {
  constructor (){
    super();
    this.state={
      title:"زهیر هستم",
      age:35
    }
   // this.handchangetext=this.handchangetext.bind(this)
  }
  // handchangetext (){
  //   this.setState({
  //     title:"کلاس اول هستم"
  //   })
  // }

  handchangetext=()=>{
    this.setState({
      title:"کلاس اول هستم"
    })
  }
  render() {
    console.log("render");
    return (
      <>
        <Timer/>
        <Name  hanf={this.handchangetext}  title={this.state.title} age={this.state.age} />
      </>
    );
  }
}

export default App;

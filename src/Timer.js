import React from "react";
import { createRoot } from "react-dom/client";
var interVal;

class Timer extends React.Component {
    constructor(){
      super();
      this.state={
        timer:new Date().toLocaleTimeString()
      }
    }
    

componentDidMount(){
  console.log("componentDidMount")

  interVal=setInterval(()=>{
    this.setState({
      timer:new Date().toLocaleTimeString()
    })
  },1000)
}

//--------بعد از رندر صدا زده میشه
componentDidUpdate(){
  console.log("componentDidUpdate")
  console.log(this.state.timer)
 if(this.state.timer==="7:26:40 AM"){
  clearInterval(interVal)
 }
}

//---بسته شدن خودکار یک چرخه حیات
componentWillUnmount(){

}
    render() {
      console.log("render")
      return (

        <div>
          <h1>hell firend b</h1>
          <h1>it is data {this.state.timer}</h1>
        </div>
      );
    }
  }

  export default Timer;

import React from "react";
import { createRoot } from "react-dom/client";
import Name from "./Name";
var interVal;
class App extends React.Component {
    constructor(){
      super();
      this.state={
        timer:10
      }
    }

componentDidMount(){

  interVal=setInterval(()=>{
    this.setState({
      timer:this.state.timer-1
    })
  },1000)
}

//--------بعد از رندر صدا زده میشه
componentDidUpdate(){
  if(this.state.timer===0){
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
          <Name/>
        </div>
      );
    }
  }

  export default App;
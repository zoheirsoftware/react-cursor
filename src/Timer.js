import React from "react";
import { TestContext } from "./TestContext";

var interVal;

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      second: 0,
      min: 0,
      hour: 0,
      isStop: false,
    };
  }
  static contextType = TestContext;

  startTimer = () => {
    if (this.state.isStop == false) {
      this.setState({
        isStop:true
      })
      interVal = setInterval(() => {
        this.setState({
          second: this.state.second + 1,
        });
        if (this.state.second == 60) {
          this.setState({
            second: 0,
            min: this.state.min + 1,
          });
        }

        if (this.state.min == 60) {
          this.setState({
            min: 0,
            hour: this.state.hour + 1,
          });
        }
      }, 1000);
    }
  };

  //--------بعد از رندر صدا زده میشه
  stopTimer = () => {
   
    this.setState({
      isStop:false
    })

    clearInterval(interVal);

  };

  //---بسته شدن خودکار یک چرخه حیات
  restTimer =()=> {
    this.stopTimer()
    this.setState({
      second: 0,
      min: 0,
      hour: 0,
      isStop: false,
    })
  }
  handelsetime =()=>{
     
     let nweitem=document.querySelector(".main-time").innerHTML
     this.context.setItemarray([...this.context.itemArry,nweitem])

  }
  
  render() {
 let s=this.state.second,
     m=this.state.min,
     h=this.state.hour
    return (

      <>
        <div>
        <h1 className="main-time" onClick={this.handelsetime}> {`${h>9?h:'0'+h}: ${m>9?m:'0'+m}: ${s>9?s:'0'+s}`}  </h1>
        <button onClick={this.startTimer}>startTimer</button>
        <button onClick={this.stopTimer}>stopTimer</button>
        <button onClick={this.restTimer}>restTimer</button>
        </div>
           
      </>
    
    );
  }
}

export default Timer;

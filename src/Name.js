import React from "react";
import { createRoot } from "react-dom/client";


class Name extends React.Component{
    render(){
      return (
        <>
        <h1 style={{color:this.props.isLight?"#ddd":"#fff"}}>{this.props.title }{this.props.age}</h1>

<button onClick={this.props.handisLight}>change</button>

        </>
      )
    }
  }

  export default Name;
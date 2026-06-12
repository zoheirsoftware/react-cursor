import React from "react";
import { createRoot } from "react-dom/client";


class Name extends React.Component{
    render(){
      return (
        <>
        <h1>{this.props.title }{this.props.age}</h1>

<button onClick={this.props.hanf}>change</button>

        </>
      )
    }
  }

  export default Name;
import React from "react";
import { TestContext } from "./TestContext";
 


class Name extends React.Component{
  static contextType = TestContext;
     render(){
      return (
       
        <>
        
        <h1 style={{color:this.props.isLight?"#ddd":this.context}}>{this.props.title }{this.props.age}</h1>
   
        </>
      )
    }
  }

  export default Name;
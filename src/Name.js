import React from "react";
 


class Name extends React.Component{
    render(){
      return (
        <>
        <h1 style={{color:this.props.isLight?"#ddd":"#fff"}}>{this.props.title }{this.props.age}</h1>
 
        </>
      )
    }
  }

  export default Name;
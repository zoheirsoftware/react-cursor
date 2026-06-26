import React,{Component, PureComponent, memo} from "react";
//Component
//PureComponent=>این کلاس به ما اجازه میده هر بار کامپونت تغییر کرده اجرا بشه
// class PureCompo extends PureComponent {
//     render(){
//         console.log("PureCompo");
// return (
//      <h2 className="text-center mt-4">{"Pure Component : "+this.props.name}</h2>
//  )
//     }
// }

const PureCompo = (props)=>
{
    return (
        <h2 className="text-center mt-4">{"Pure Component : "+props.name}</h2>
    )
}

export default memo( PureCompo);


 
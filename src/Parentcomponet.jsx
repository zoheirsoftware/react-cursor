import React,{Component, createRef} from "react";
import  PureCompo  from "./Purecomponet";

class ParentCompo extends Component{
 

  constructor(){
    super()
    this.compnetref=createRef()
  }
  handelchangecomponet=()=>{
    this.compnetref.current.handelChangeName()
  }
    render(){
        console.log(this.compnetref)
         return(
            <div>
                <PureCompo  ref={this.compnetref} />
                <button className="btn btn-info text-center text-white" 
                onClick={this.handelchangecomponet}>test</button>
            </div>
        )
    }
}

export default ParentCompo;
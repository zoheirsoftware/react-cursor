import React,{Component, createRef} from "react";
// import  PureCompo  from "./Purecomponet";
import Fcomponet from "./FComponet";

class ParentCompo extends Component{
 

  constructor(){
    super()
    this.compnetref=createRef()
    this.myinput=createRef()
  }
  componentDidMount(){
    this.myinput.current.focus()
}

  handelchangecomponet=()=>{
    this.compnetref.current.handelChangeName()
  }
    render(){
        console.log(this.compnetref)
         return(
            <div>
                {/* <PureCompo  ref={this.compnetref} /> */}
                <Fcomponet ref={this.myinput}/>
                <button className="btn btn-info text-center text-white" 
                onClick={this.handelchangecomponet}>test</button>
            </div>
        )
    }
}

export default ParentCompo;
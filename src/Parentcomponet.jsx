import React,{Component} from "react";
import  PureCompo  from "./Purecomponet";

class ParentCompo extends Component{
constructor(){
    super()
    this.state={
        name:"zoheir"
    }
}
componentDidMount(){


    setInterval(()=>{
        this.setState({
            // name:"zoheir"
            name:"zoheir"+new Date()

        })
    },1000)
}
    render(){
        console.log("---------parent----------")
        return(
            <div>
                <PureCompo name={this.state.name} />
            </div>
        )
    }
}

export default ParentCompo;
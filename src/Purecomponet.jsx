import React,{ PureComponent, createRef} from "react";
 
 class PureCompo extends PureComponent {
    constructor(){
        super()
        this.state={
            name:""
        }
        this.counter=0;
        this.myinput=createRef()
    }
    handelChangeName=()=>{
        this.setState({
            // name:document.getElementById('myinput').value
            name:this.myinput.current.value
        })
    }
//اولین بار صفحه اجرا بشه
    componentDidMount(){
        this.myinput.current.focus()
    }
    render(){
        console.log(this.myinput)
        return(
            <div className="form-fa-group text-center mt-4 p4">
                <h4 className="text-center text-dark">حدس کلمه</h4>
                <input ref={this.myinput} className="form-control" type="text" id="myinput" autoComplete="off" />
                <button className="btn btn-warning my-3" onClick={this.handelChangeName}>ثبت</button>
                <button className="btn btn-secondary my-3 mx-2" onClick={()=>
                this.myinput.current.value=""}>حذف</button>
                <br/>
                <span>{this.counter++}</span>

            </div>
        )
  
    }
}
 
export default PureCompo;


 
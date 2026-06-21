import { useContext } from "react"
import { TestContext } from "./TestContext"

const Item =(props)=>{
    const context=useContext(TestContext)
    const handeldeleteitem=(e)=>{
        context.setItemarray(context.itemArry.filter(t=>t !=e.target.innerHTML))
    }
    return(
        <div style={{color:context}} onClick={handeldeleteitem}>{props.children}</div>
    )
}
export default Item
import { useContext } from "react"
import { TestContext } from "./TestContext"

const Item =(props)=>{
    const context=useContext(TestContext)
    return(
        <div style={{color:context}}>{props.children}</div>
    )
}
export default Item
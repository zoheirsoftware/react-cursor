import { useContext } from "react"
import Item from "./Item"
import { TestContext } from "./TestContext"
const TimerList =(props)=>{
    const context=useContext(TestContext)
    //برای دریافت pros از childern استفاده میکنیم
    return (

        <div className="main_t">
         {/* <Item>{props.children[0]}</Item> */}
         {
           context.itemArry.map((c)=>(
                <Item key={Math.random()}>{c}</Item>
            ))
         }
        </div>
    )
}

export default TimerList
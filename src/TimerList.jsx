import Item from "./Item"
const timeList =(props)=>{
    //برای دریافت pros از childern استفاده میکنیم
    return (

        <div className="main_t">
         {/* <Item>{props.children[0]}</Item> */}
         {
            props.children.map((c)=>(
                <Item key={Math.random()}>{c}</Item>
            ))
         }
        </div>
    )
}

export default timeList
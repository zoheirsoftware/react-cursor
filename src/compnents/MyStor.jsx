import React from "react";

import { buyApple, buyOrange } from "../redux/fruit/fruitAction";
import { connect, useDispatch, useSelector } from "react-redux";
import { buySandvich } from "../redux/food/foodAction";

const MyStor = () => {
  const{apple,orange}=useSelector((state)=>state.fruit)
  const{sandwich}=useSelector((state)=>state.food)
  const dispatch=useDispatch()
  return <div>
    <h3 className="text-center ">تعداد سیب :{apple}</h3>
    <h3 className="text-center ">تعداد پرتقال :{orange}</h3>
    <h3 className="text-center ">تعداد ساندویچ :{sandwich}</h3>
    <div className="text-center ">
      
    <button className="btn-success text-center" onClick={()=>dispatch(buyApple())}>خرید سیب</button>
    <button className="btn-warning  text-center m-2" onClick={()=>dispatch(buyOrange())}>خرید پرتقال</button>
    <button className="btn-warning  text-center m-2" onClick={()=>dispatch(buySandvich())}>خرید ساندویچ</button>

    </div>
    
  </div>;
};

const stateToProps = state => {
  return {
    apple: state.apple,
    orange: state.orange,
  };
};
const dispatchToProps = dispatch => {
    return {
      buyApple: ()=>dispatch(buyApple()),
      buyOrange: ()=>dispatch(buyOrange()),
    };
  };
export default connect(stateToProps,dispatchToProps)(MyStor);

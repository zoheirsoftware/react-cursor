import React from "react";

import { buyApple, buyOrange } from "../redux/fruit/fruitAction";
import { connect } from "react-redux";

const MyStor = ({apple,orange,buyApple,buyOrange}) => {
  
  return <div>
    <h3 className="text-center ">تعداد سیب :{apple}</h3>
    <h3 className="text-center ">تعداد پرتقال :{orange}</h3>
    <div className="text-center ">
    <button className="btn-success text-center" onClick={buyApple}>خرید سیب</button>
    <button className="btn-warning  text-center" onClick={buyOrange}>خرید پرتقال</button>
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

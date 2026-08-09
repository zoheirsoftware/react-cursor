import React, { useState } from "react";

import { buyApple, buyOrange } from "../redux/fruit/fruitAction";
import { connect, useDispatch, useSelector } from "react-redux";
import { buySandwich } from "../redux/food/foodAction";

const MyStor = ({sandwich1,buySandwich1}) => {

  const [itemcount,setitemcount]=useState({
    apple:1,
    orange:1,
    sandwich:1
  })
  const { apple, orange } = useSelector((state) => state.fruit);
  //const { sandwich } = useSelector((state) => state.food);
  const dispatch = useDispatch();
  return (
    <div>
      <h3 className="text-center ">تعداد سیب :{apple}</h3>
      <h3 className="text-center ">تعداد پرتقال :{orange}</h3>
      <h3 className="text-center ">تعداد ساندویچ :{sandwich1}</h3>
      <div className=" row justify-content-center">
        <div className="col-12 col-md-4 col-lg-2">
          <div className="input-group mb-3 dir_ltr">
            <button
              className="btn-success text-center"
              onClick={() => dispatch(buyApple(itemcount.apple))}
            >
              خرید سیب
            </button>
            <input type="number" className="form-control" id="apple" value={itemcount.apple}
            onChange={(e)=>{setitemcount({...itemcount,apple:e.target.value}) }}/>
          </div>
        </div>
        <div className="col-12 col-md-4 col-lg-2">
          <div className="input-group mb-3 dir_ltr">
            <button
              className="btn-warning  text-center m-2"
              onClick={() => dispatch(buyOrange(itemcount.orange))} >
              خرید پرتقال
            </button>
            <input type="number" className="form-control" id="orange" value={itemcount.orange}
            onChange={(e)=>{setitemcount({...itemcount,orange:e.target.value})}} />
          </div>
        </div>

        <div className="col-12 col-md-4 col-lg-2">
          <div className="input-group mb-3 dir_ltr">
            <button
              className="btn-warning  text-center m-2"
              onClick={() => dispatch(buySandwich1(itemcount.sandwich))}
            >
              خرید ساندویچ
            </button>
            <input type="number" className="form-control" id="apple" value={itemcount.sandwich}
            onChange={(e)=>{setitemcount({...itemcount,sandwich:e.target.value})}} />
          </div>
        </div>
      </div>
    </div>
  );
};
 
const stateToProps = state=>{
  return{
      sandwich1: state.food.sandwich
  }
}

const dispatchToProps = dispatch=>{
  return{
      buySandwich1: (count)=>dispatch(buySandwich(count))
  }
}
export default connect(stateToProps, dispatchToProps)(MyStor);

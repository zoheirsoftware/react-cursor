import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useNavigate, useLocation } from "react-router-dom";
import style from "../style.module.css";
import axios from "axios";
import swal from "sweetalert";
const AddUser = () => {
  const { userid } = useParams();
 
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
    },
  });
const handeladduser=(e)=>{
    e.preventDefault()
    if(!userid){
        axios .post("https://jsonplaceholder.typicode.com/users",data).then((res) => {     
            swal("ثبت رکورد با موفقیت انجام شد", {
            icon: "success",
          });
       })  
       
    }else{
        axios.put(`https://jsonplaceholder.typicode.com/users/${userid}`,data).then((res) => {  
            swal("ویرایش رکورد با موفقیت انجام شد", {
                icon: "success",
              });
           })
       
    }
 
}
useEffect(()=>{
   if(userid){
    axios
    .get(`https://jsonplaceholder.typicode.com/users/${userid}`) 
     .then((res) => { 
       setData({
        name: res.data.name,
        username: res.data.username,
        email: res.data.email,
        address: {
          street:res.data.address.street,
          suite: res.data.address.suite,
          city:res.data.address.city,
          zipcode:res.data.address.zipcode,
        },
       })
      })
   }
    
})

  return (
    <div className={`${style.item_content} mt-5 p-4 container-fluid container`}>
      <h4 className="text-center text-primary">
        {userid ? "ویرایش کاربر" : "افزودن کاربر"}
      </h4>
      <div className="row justify-content-center mt-5 ">
        <form className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
          <div className="mb-3">
            <label className="form-label">نام و نام خانوادگی</label>
            <input
              type="text"
              className="form-control"
              value={data.name}
            //   onChange={(e) =>{ setData({ ...data, name: e.target.value });console.log(data)}}
            onChange={(e) =>setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">نام کاربری</label>
            <input type="text" className="form-control" value={data.username} 
             onChange={(e) =>setData({ ...data, username: e.target.value })}/>
          </div>
          <div className="mb-3">
            <label className="form-label">ایمیل</label>
            <input type="email" className="form-control" value={data.email} 
             onChange={(e) =>setData({ ...data, email: e.target.value })}/>
          </div>
          <div className="mb-3 row">
            <label className="form-label">آدرس</label>
            <div className="col-6 my-1">
              <input
                type="text"
                className="form-control"
                placeholder="شهر"
                value={data.address.city}
                onChange={(e) =>setData({ ...data,address:{...data.address,city: e.target.value}  })}
              />
            </div>
            <div className="col-6 my-1">
              <input
                type="text"
                className="form-control"
                placeholder="خیابان"
                value={data.address.street}
                onChange={(e) =>setData({ ...data,address:{...data.address,street: e.target.value} })}
              />
            </div>
            <div className="col-6 my-1">
              <input
                type="text"
                className="form-control"
                placeholder="ادامه آدرس"
                value={data.address.suite}
                onChange={(e) =>setData({...data,address:{...data.address,suite: e.target.value} })}
              />
            </div>
            <div className="col-6 my-1">
              <input
                type="text"
                className="form-control"
                placeholder="کد پستی"
                value={data.address.zipcode}
                onChange={(e) =>setData({...data,address:{...data.address,zipcode: e.target.value} })}
              />
            </div>
          </div>

          <div className="col-12 text-start">
            {/* <Link to="/user">
                        <button type="button" className="btn btn-danger ms-2">بازگشت</button>
                        </Link> */}
            <button
              onClick={() => {
                return navigate(-1);
              }}
              type="button"
              className="btn btn-danger ms-2"
            >
              بازگشت
            </button>
            <button onClick={handeladduser} type="submit" className="btn btn-primary">
              {userid ? "ویرایش " : "افزودن "}
            </button>
          </div>
        </form>
      </div>
      {/* <Outlet/> */}
    </div>
  );
};

export default AddUser;

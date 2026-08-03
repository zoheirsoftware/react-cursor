import { jpAxios } from "../jpAxios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import style from "../style.module.css";
import WithAlert from "../HOC/WithAlert";
import { Confirm, ConfirmAlret } from "../utilts/Alerts";
const Users = (props) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [mainusers, setMainUsers] = useState([]);
  useEffect(() => {
    jpAxios
      .get("/users")
      .then((res) => {
        setUsers(res.data);
        setMainUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      }); 
     
  }, []);
  const handeldelte =async (itemid) => {
    
  //  const {Confirm,ConfirmAlret}=props;

      if (await Confirm( `ایا از حذف رکورد ${itemid} اطمینان دارید`)) {
        // axios
        // .delete(`https://jsonplaceholder.typicode.com/users/${itemid}`)
        jpAxios({
            method:"DELETE",
            url:`/users/${itemid}`
        }).then(res=>{
            if(res.status==200){
                const newusers=users.filter(u=>u.id !=itemid)
                setUsers(newusers)
                console.log(res)
                ConfirmAlret("حذف رکورد با موفقیت انجام شد","success")
                 
            }
            else{
              ConfirmAlret("عملیات با خطا مواجه شده است","error") 
                
            }
         
        })
       
      } else {
        ConfirmAlret("از حذف رکو.رد منصرف شدید","info") 
       
      }
    
  };
const handelsearch=(e)=>{
  setUsers(mainusers.filter(u=>u.name.includes(e.target.value)))
}

  return (
    <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
      <h4 className="text-center">مدیریت کاربران</h4>
      <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
        <div className="form-group col-10 col-md-6 col-lg-4">
          <input
            type="text"
            className="form-control shadow"
            placeholder="جستجو"
            onChange={handelsearch}
          />
        </div>
        <div className="col-2 text-start px-0">
          <Link to="/user/add" state={"ali"}>
            <button className="btn btn-success">
              <i className="fas fa-plus text-light"></i>
            </button>
          </Link>
        </div>
      </div>
      {users.length ? (
        <table className="table bg-light shadow">
          <thead>
            <tr>
              <th>#</th>
              <th>نام</th>
              <th>نام کاربری</th>
              <th>ایمیل</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>
                  <i
                    className="fas fa-edit text-warning mx-2 pointer"
                    onClick={() => {
                      //action ...
                      // return navigate("/user/add/2",{state:"zoheir"})
                      return navigate(`/user/add/${u.id}`);
                    }}
                  ></i>
                  <i
                    onClick={() => handeldelte(u.id)}
                    className="fas fa-trash text-danger mx-2 pointer"
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4 className="text-info text-center">لطفا صبر کنید تا داده لود شود</h4>
      )}
    </div>
  );
};

export default  Users;

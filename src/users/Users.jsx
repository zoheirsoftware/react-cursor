import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import style from "../style.module.css";
const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(1)
    // setTimeout(()=>{
    //     console.log(2)
    // },1000)
    // console.log(3)

    // new Promise((resolve,reject)=>{
    //     console.log(1)
    //     setTimeout(()=>{
    //         console.log(2)
    //         resolve(true)
    //     },1000)

    // }).then(res=>{
    //     console.log(3)
    // }).catch(err=>{
    //     console.log(err)
    // })

    //    let promis= new Promise((resolve,reject)=>{
    //         console.log(1)
    //         setTimeout(()=>{
    //             console.log(2)
    //             resolve(true)
    //         },1000)

    //     })
    //     promis.then(res=>{
    //         console.log(3)
    //     }).catch(err=>{
    //         console.log(err)
    //     })

    // const func = () => {
    //   return new Promise((resolve, reject) => {
    //     console.log(1);
    //     setTimeout(() => {
    //       console.log(2);
    //       resolve(true);
    //     }, 1000);
    //   });
    // };
    // const test = async () => {
    //   const res = await func();
    //   if (res) {
    //     console.log(3);
    //   }
    // };
    // test();
    // const test = (id) => {
    //   axios
    //     .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    //     .then((res) => {
    //       console.log(res.data);
    //     });
    //   console.log(id);
    // };

    const prom = (id) => {
      return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    };
    const test = async (id) => {
      await prom(id).then((res) => {
        console.log(res.data);
      });
      console.log(id);
    };
    for (const item of [1, 2, 3, 4, 5, 6]) {
      test(item);
    }
  }, []);
  const handeldelte = (itemid) => {
    swal({
      title: "حذف رکورد",
      text: `ایا از حذف رکورد ${itemid} اطمینان دارید`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("حذف رکورد با موفقیت انجام شد", {
          icon: "success",
        });
      } else {
        swal("از حذف رکو.رد منصرف شدید");
      }
    });
  };
  return (
    <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
      <h4 className="text-center">مدیریت کاربران</h4>
      <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
        <div className="form-group col-10 col-md-6 col-lg-4">
          <input
            type="text"
            className="form-control shadow"
            placeholder="جستجو"
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
                      return navigate("/user/add/2", {
                        state: { x: "zoheir", age: 20 },
                      });
                    }}
                  ></i>
                  <i
                    onClick={() => handeldelte(1)}
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

export default Users;

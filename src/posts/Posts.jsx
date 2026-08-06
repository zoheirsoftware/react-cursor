import { jpAxios } from "../jpAxios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../style.module.css";
import { Confirm, ConfirmAlret } from "../utilts/Alerts";
import { postsgetService,postaddservice,postupdateswervice } from "../servies/postservice";
import useTitle from "../hooks/useTitle";

const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [mainposts, setMainPosts] = useState([]);
  const[uid,setUid]=useState([])
  const handelsearch = (e) => {
   if(uid>0){
    console.log(uid)
    setPosts(mainposts.filter((u) => u.userId==uid));
   }
   else{
    setPosts(mainposts);
   }
  };
  const getpost = async () => {
    const res = await postsgetService();

    setPosts(res.data);
    setMainPosts(res.data);
   
  };
  useEffect(() => {
    getpost();

    //برای ترک از کامپونت یک عملیات انجام شود
    return ()=>{
        console.log("destory log")
    }
  }, []);

  useEffect(()=>{
    console.log(uid )
   handelsearch()

  },[uid])

  useTitle('پست ها')
  const handeldelte = async (itemid) => {
    //  const {Confirm,ConfirmAlret}=props;

    if (await Confirm(`ایا از حذف رکورد ${itemid} اطمینان دارید`)) {
      jpAxios({
        method: "DELETE",
        url: `/posts/${itemid}`,
      }).then((res) => {
        if (res.status == 200) {
          const newposts = posts.filter((u) => u.id != itemid);
          setPosts(newposts);
          console.log(res);
          ConfirmAlret("حذف رکورد با موفقیت انجام شد", "success");
        } else {
          ConfirmAlret("عملیات با خطا مواجه شده است", "error");
        }
      });
    } else {
      ConfirmAlret("از حذف رکو.رد منصرف شدید", "info");
    }
  };
  return (
    <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
      <h4 className="text-center">مدیریت پست</h4>
      <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
        <div className="form-group col-10 col-md-6 col-lg-4">
          <input
            type="number"
            className="form-control shadow"
            placeholder="جستجو" value={uid}
            onChange={(e)=>{setUid(e.target.value)}}
          />
        </div>
        <div className="col-2 text-start px-0">
          <Link to="/post/add" state={"ali"}>
            <button className="btn btn-success">
              <i className="fas fa-plus text-light"></i>
            </button>
          </Link>
        </div>
      </div>
      {posts.length ? (
        <table className="table bg-light shadow">
          <thead>
            <tr>
              <th>#</th>
              <th>کاربر</th>
              <th>عنوان </th>
              <th>شرح</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td className="text-primary" style={{cursor:"pointer"}} onClick={()=>setUid(u.userId)} >{u.userId}</td>
                <td>{u.title}</td>
                <td>{u.body}</td>

                <td>
                  <i
                    className="fas fa-edit text-warning mx-2 pointer"
                    onClick={() => {
                      
                      return navigate(`/post/add/${u.id}`);
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

export default Posts;

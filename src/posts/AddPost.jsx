import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import style from "../style.module.css";

import { jpAxios } from "../jpAxios";
import { postaddservice, postupdateswervice } from "../servies/postservice";

const AddPost = () => {
  const { postid } = useParams();

  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  
  const [data, setData] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
  });

  const handeladdpost = (e) => {
    e.preventDefault();
    if (!postid) {
    
      postaddservice(data);
     
    } else {
      postupdateswervice(data, postid);

    }
  };
  useEffect(() => {
    jpAxios
      .get("/users")
      .then((res) => {
        setUsers(res.data);
       
      })
      .catch((err) => {
        console.log(err);
      });

    if (postid) {
      jpAxios.get(`/posts/${postid}`).then((res) => {
        setData({
          userId: res.data.userId,
          id: res.data.id,
          title: res.data.title,
          body: res.data.body,
        });
      });

      console.log(data);
    }
  });

  return (
    <div className={`${style.item_content} mt-5 p-4 container-fluid container`}>
      <h4 className="text-center text-primary">
        {postid ? "ویرایش پست" : "افزودن پست"}
      </h4>
      <div className="row justify-content-center mt-5 ">
        <form className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
          <div className="mb-3">
            <label className="form-label"> نام کاربر </label>
            <select   className="form-control" value={data.userId} 
              on onChange={(e)=> setData({...data , userId : e.target.value })} >
              <option  value="">کاربر مورد نظر را انتخاب کنید</option>
              {users.map(u=>(
                <option key={u.id} value={u.id}>{u.name}</option>
              ))}
            </select>
            
          </div>
          
          <div className="mb-3">
            <label className="form-label">ایدی کاربری</label>
            <input
              type="text"
              className="form-control"
              value={data.userId}
              onChange={(e) => setData({ ...data, userId: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">عنوان</label>
            <input
              type="text"
              className="form-control"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </div>
          <div className="mb-3 row">
            <label className="form-label">شرح</label>
            <div className="col-12 my-1">
              <textarea
                type="text"
                className="form-control"
                placeholder="شرح"
                value={data.body}
                onChange={(e) => setData({ ...data, body: e.target.value })}
              ></textarea>
            </div>
          </div>

          <div className="col-12 text-start">
            <button
              onClick={() => {
                return navigate(-1);
              }}
              type="button"
              className="btn btn-danger ms-2"
            >
              بازگشت
            </button>
            <button
              onClick={handeladdpost}
              type="submit"
              className="btn btn-primary"
            >
              {postid ? "ویرایش " : "افزودن "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;

import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import style from "../style.module.css";

import { jpAxios } from "../jpAxios";
import { postaddservice, postupdateswervice } from "../servies/postservice";
import { init,reducer } from "./PostReducer";

const AddPost2 = () => {
  const { postid } = useParams();

  const navigate = useNavigate();
  const [data, dispatch] = useReducer(reducer, init);

  const handeladdpost = (e) => {
    e.preventDefault();
    if (!postid) {
      postaddservice(data.postData);
    } else {
      postupdateswervice(data.postData, postid);
    }
  };
  useEffect(() => {
    jpAxios
      .get("/users")
      .then((res) => {
        dispatch({
          type:"changeUser",
          payload:res.data
        })
        
      })
      .catch((err) => {
        console.log(err);
      });

    if (postid) {
      jpAxios.get(`/posts/${postid}`).then((res) => {
        dispatch({
          type:"isUpdate",
          payload: res.data,
        })
        // setData({
        //   userId: res.data.userId,
        //   id: res.data.id,
        //   title: res.data.title,
        //   body: res.data.body,
        // });
      });

      console.log(data);
    }
  });
const setInputchange=(e,propname)=>{
  dispatch({
    type:"setInputValue",
    propName:propname,
    propValue:e.target.value
  })
}

  return (
    <div className={`${style.item_content} mt-5 p-4 container-fluid container`}>
      <h4 className="text-center text-primary">
        {postid ? "ویرایش پست" : "افزودن پست"}
      </h4>
      <div className="row justify-content-center mt-5 ">
        <form className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
          <div className="mb-3">
            <label className="form-label"> نام کاربر </label>
            <select
              className="form-control"
              value={data.postData.userId}
              
              onChange={(e) =>setInputchange(e,"userId")}
            >
              <option value="">کاربر مورد نظر را انتخاب کنید</option>
              {data.users.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">ایدی کاربری</label>
            <input
              type="text"
              className="form-control"
              value={data.postData.userId}
              onChange={(e) => setInputchange(e,"userId")}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">عنوان</label>
            <input
              type="text"
              className="form-control"
              value={data.postData.title}
              onChange={(e) => setInputchange(e,"title")}
            />
          </div>
          <div className="mb-3 row">
            <label className="form-label">شرح</label>
            <div className="col-12 my-1">
              <textarea
                type="text"
                className="form-control"
                placeholder="شرح"
                value={data.postData.body}
                onChange={(e) => setInputchange(e,"body")}
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

export default AddPost2;

import React, { useContext, useState } from "react";
import { MainContext } from "./contexts/MainContext";
import Gallery from "./gallery/Gallery";
import Posts from "./posts/Posts";
import AddPost from "./posts/AddPost";
import AddPost2 from "./posts/AddPost2";
import style from "./style.module.css";
import Todos from "./todos/Todos";
import Users from "./users/Users";
import { Route, Routes, Navigate } from "react-router-dom";
import AddUser from "./users/AddUser"; 
import WithAlert2 from "./HOC/WithAlert2";

const Content = () => {
  const { showMenu, setShowMenu } = useContext(MainContext);
  const [isUser, setIsUser] = useState(true);
  const handleShowMenu = (event) => {
    event.stopPropagation();
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  const renderAlert = (Confirm, ConfirmAlret) => (
    <Users Confirm={Confirm} ConfirmAlret={ConfirmAlret} />
  );
  return (
    <div
      className={style.content_section}
      onClick={() => {
        setShowMenu(false);
      }}
    >
      <i
        className={`${style.menu_button} fas fa-bars text-dark m-2 pointer`}
        onClick={handleShowMenu}
      ></i>

      <Routes>
        {/* <Route path='/user'  element={ <Users/>} /> */}
        {/* <Route path='/user'  element={ <WithAlert2 
                render={renderAlert}/>} /> */}
        {/* childer */}
        <Route path="/user" element={<WithAlert2>{renderAlert}</WithAlert2>} />
        <Route path="/user/add/" element={<AddUser />}>
          <Route path=":userid" />
        </Route>

        <Route path="/post" element={<Posts />} />

        {/* <Route path="/post/add/" element={<AddPost />}>
          <Route path=":postid" />
        </Route> */}
          <Route path="/post/add/" element={<AddPost2 />}>
          <Route path=":postid" />
        </Route>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/*" element={<WithAlert2>{renderAlert}</WithAlert2>} />
      </Routes>
    </div>
  );
};

export default Content;

import React, { useContext, useState } from 'react';
import { MainContext } from './contexts/MainContext';
import Gallery from './gallery/Gallery';
import Posts from './posts/Posts';
import style from './style.module.css'
import Todos from './todos/Todos';
import Users from './users/Users';
import {  Route, Routes,Navigate } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditDesc from './users/EditDesc';

const Content = ()=>{

    const{showMenu,setShowMenu}=useContext(MainContext)
    const[isUser,setIsUser]=useState(true)
    const handleShowMenu=(event)=>{
        event.stopPropagation()
        setShowMenu(!showMenu)
        console.log(showMenu)
    }

 

    return (
        <div className={style.content_section} onClick={()=>{setShowMenu(false)}}>
            <i className={`${style.menu_button} fas fa-bars text-dark m-2 pointer`} 
            onClick={handleShowMenu} 
            ></i>
            
            <Routes>
                 {/* <Route path='/user'  element={ isUser? <Users/>:<Navigate replace to="/posts"/>} /> */}
                <Route path='/user'  element={ <Users/>} />
                {/* <Route path='/user/add/:id' element={<AddUser/>}/> */}
                <Route path='/user/add/' element={<AddUser/>}>
                    <Route path=':userid'/>
                    {/* <Route path=':userid' element={<EditDesc/>}/> */}
                 </Route>
                <Route path='/post' element={<Posts/>}/>
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='/todos' element={<Todos/>}/>
                <Route path='/*' element={<Users/>}/>
            </Routes>
          
        </div>
    )

}

export default Content;
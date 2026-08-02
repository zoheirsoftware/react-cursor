import React from 'react';
import style from '../style.module.css'
import ClickCounts from './ClickCounts';
import Hovercount from './Hovercount';
const Posts = ()=>{

    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت پست ها</h4>
            <ClickCounts />
            <Hovercount />
        </div>
    )

}

export default Posts;
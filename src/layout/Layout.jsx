import React from 'react';
import Content from "./content/Content";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";

const Layout = () => {
    return (
        <div>
            <Content/>
            <Sidebar/>
            <Navbar/>
        </div>
    );
};

export default Layout;
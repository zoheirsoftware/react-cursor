import React from 'react';
import Content from "./content/Content";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";

const Layout = ({setDarkmod,darkmod}) => {
    return (
        <div>
            <Content/>
            <Sidebar/>
            <Navbar setDarkmod={setDarkmod} darkmod={darkmod}/>
        </div>
    );
};

export default Layout;
import React from "react";
import Header from "./component/header/header";
import Footer from './component/footer/Footer'
import { Outlet } from "react-router";

function Layout(){
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout
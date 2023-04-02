import * as React from "react"
import { Routes, Route, Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Nav from "./components/Nav/Nav"
import Hero from "./components/Home/Hero"


const Layout = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
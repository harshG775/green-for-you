import { useState } from "react"
import "./navbar.css"

export default function Navbar() {
    const [isShowing,setIsShowing]=useState(false)
    const [isTop,setIsTop]=useState(true)

    window.onscroll = function scrollFunction(){
        (document.documentElement.scrollTop > 50
            ?setIsTop(false):setIsTop(true))
    } 
    return (
    <>
    <header id={isTop?"aa" : ""} className="navbar_outer">
        <div className="navbar maxContainer">
            <a href="/"><h4>Green-For-You</h4></a>
            <nav className="navber_inner">
                <ul id={isShowing?"showHideMenu":""} className="navbar1">
                    <li><a href="https://www.yourwebsite.com/home">Home</a></li>
                    <li><a href="https://www.yourwebsite.com/product">Product</a></li>
                    <li><a href="https://www.yourwebsite.com/contact">Contact</a></li>
                </ul>
                <ul className="navbar2">
                    <li><a className="cart" href="https://www.yourwebsite.com/cart"><i className="fa-solid fa-cart-shopping"></i></a></li>
                    <li><a className="user" href="https://www.yourwebsite.com/user"><i className="fa-solid fa-circle-user"></i></a></li>
                    <li onClick={()=>setIsShowing((e)=>!e)}><a className="menu-toggle"><i className="fa-solid fa-bars"></i></a></li>
                </ul>
            </nav>
        </div>
    </header>
    </>
    )
}

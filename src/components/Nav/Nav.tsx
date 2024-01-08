import './Nav.css'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//Images
import Phone from '../../assets/Images/Phone Icon.png'
import NavIcon from '../../assets/Images/Roof Smith Logo.png'

//Components
import NavButton from './NavButton'
import { Link } from "react-router-dom";

function Navigation() {
    const RemoveActive = () => {
        let allActive = document.querySelectorAll(".active-link")
        allActive.forEach.call(allActive, function(aa) {
            aa.classList.remove("active-link")
        })
    }

    const [loc, setLoc] = useState("")
    const location = useLocation();

    useEffect(() => {
        setLoc(location.pathname)
    }, [location]);

    let allDesktopLinks = document.getElementsByClassName("desktop-nav")[0];
    let allMobileLinks = document.getElementsByClassName("mobile-nav")[0];
    console.log(allMobileLinks)

    if(loc === "/Home"){
        RemoveActive();
        allDesktopLinks.children[0].setAttribute("class", "active-link")
        allMobileLinks.children[1].setAttribute("class", "active-link")
    } else if(loc === "/About"){
        RemoveActive();
        allDesktopLinks.children[1].setAttribute("class", "active-link")
        allMobileLinks.children[2].setAttribute("class", "active-link")
    } else if(loc === "/Services"){
        RemoveActive();
        allDesktopLinks.children[2].setAttribute("class", "active-link")
        allMobileLinks.children[3].setAttribute("class", "active-link")
    } else if(loc === "/Projects"){
        RemoveActive();
        allDesktopLinks.children[3].setAttribute("class", "active-link")
        allMobileLinks.children[4].setAttribute("class", "active-link")
    } else if(loc === "/Contact"){
        RemoveActive();
        allDesktopLinks.children[4].setAttribute("class", "active-link")
        allMobileLinks.children[5].setAttribute("class", "active-link")
    }

    const closeMenu = () => {
        let mobileMenu = document.getElementsByClassName("mobile-nav")[0]
        mobileMenu.setAttribute('style', 'top: -100%;')
    }

    return (
        <div className="Navigation">
            <NavButton />
            <div className="mobile-nav">
                <span className="closenavcontainer" onClick={closeMenu}>
                    x
                </span>
                <Link to={"/Home"} onClick={closeMenu}>Home</Link>
                <Link to={"/About"} onClick={closeMenu}>About Us</Link>
                <Link to={"/Services"} onClick={closeMenu}>Services</Link>
                <Link to={"/Projects"} onClick={closeMenu}>Projects</Link>
                <Link to={"/Contact"} onClick={closeMenu}>Contact</Link>
            </div>
            <div id="navicon-container">
                <Link to={"/Home"}><img id="navicon" src={NavIcon} alt="" width="75px" /></Link>
            </div>
            <div className="desktop-nav">
                <Link to={"/Home"}>Home</Link>
                <Link to={"/About"}>About Us</Link>
                <Link to={"/Services"}>Services</Link>
                <Link to={"/Projects"}>Projects</Link>
                <Link to={"/Contact"}>Contact</Link>
            </div>
            <img id="phoneicon" src={Phone} alt="" width="30px" />
            <Link to={"/Contact"} id="quotebutton">Get a Quote</Link>
        </div>
    )
}

export default Navigation
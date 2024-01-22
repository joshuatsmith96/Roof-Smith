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

    if(loc === "/Roof-Smith"){
        RemoveActive();
        allDesktopLinks.children[0].setAttribute("class", "active-link")
        allMobileLinks.children[1].setAttribute("class", "active-link")
    } else if(loc === "/Roof-Smith/About"){
        RemoveActive();
        allDesktopLinks.children[1].setAttribute("class", "active-link")
        allMobileLinks.children[2].setAttribute("class", "active-link")
    } else if(loc === "/Roof-Smith/Services"){
        RemoveActive();
        allDesktopLinks.children[2].setAttribute("class", "active-link")
        allMobileLinks.children[3].setAttribute("class", "active-link")
    } else if(loc === "/Roof-Smith/Projects"){
        RemoveActive();
        allDesktopLinks.children[3].setAttribute("class", "active-link")
        allMobileLinks.children[4].setAttribute("class", "active-link")
    } else if(loc === "/Roof-Smith/Contact"){
        RemoveActive();
        allDesktopLinks.children[4].setAttribute("class", "active-link")
        allMobileLinks.children[5].setAttribute("class", "active-link")
    }

    const closeMenu = () => {
        let mobileMenu = document.getElementsByClassName("mobile-nav")[0]
        mobileMenu.setAttribute('style', 'top: -1500px;')
    }

    let currentPos = window.scrollY;

    window.addEventListener("scroll", function(){
        let newPos = window.scrollY;
        let nav = document.getElementsByClassName("Navigation")
        if(newPos > currentPos ){
            nav[0].setAttribute("style", "top: -100px")
        } else {
            nav[0].setAttribute("style", "top: 0px")
        }
        currentPos = newPos
    })

    return (
        <div className="Navigation">
            <NavButton />
            <div className="mobile-nav">
                <span className="closenavcontainer" onClick={closeMenu}>
                    x
                </span>
                <Link to={"/Roof-Smith"} onClick={closeMenu}>Home</Link>
                <Link to={"/Roof-Smith/About"} onClick={closeMenu}>About Us</Link>
                <Link to={"/Roof-Smith/Services"} onClick={closeMenu}>Services</Link>
                <Link to={"/Roof-Smith/Projects"} onClick={closeMenu}>Projects</Link>
                <Link to={"/Roof-Smith/Contact"} onClick={closeMenu}>Contact</Link>
            </div>
            <div id="navicon-container">
                <Link to={"/"}><img id="navicon" src={NavIcon} alt="" width="75px" /></Link>
            </div>
            <div className="desktop-nav">
                <Link to={"/Roof-Smith"}>Home</Link>
                <Link to={"/Roof-Smith/About"}>About Us</Link>
                <Link to={"/Roof-Smith/Services"}>Services</Link>
                <Link to={"/Roof-Smith/Projects"}>Projects</Link>
                <Link to={"/Roof-Smith/Contact"}>Contact</Link>
            </div>
            <img id="phoneicon" src={Phone} alt="" width="30px" />
            <Link to={"/Roof-Smith/Contact"} id="quotebutton">Get a Quote</Link>
        </div>
    )
}

export default Navigation
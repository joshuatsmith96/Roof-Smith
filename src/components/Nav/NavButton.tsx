function NavButton(){

    const openMenu = () => {
        let mobileMenu = document.getElementsByClassName("mobile-nav")[0]
        mobileMenu.setAttribute('style', 'top: 0;')
    }

    return(
            <span id="nav-icon" onClick={openMenu}>
                <span className="icon-line"></span>
                <span className="icon-line"></span>
                <span className="icon-line"></span>
            </span>
    )
}

export default NavButton
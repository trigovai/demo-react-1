import React, {useState} from "react";
import classes from "./Navbar.module.scss";
import Logo from "../../assets/imgs/logo.png";
import {GrMenu, GrClose} from "react-icons/gr";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const changeBG = () => {
        if(window.scrollY >= 150) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBG);

    return (
        <nav className={navbar ? `${classes.nav} ${classes.navActive}` : `${classes.nav}`}>
            <img src={Logo} alt="" className={classes.logo} />
            <div className={`${classes.nav__menu} ${menuOpen ? classes.nav__menuOpen : ""}`}>
                <ul>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#dest">Destinations</a>
                    </li>
                    <li>
                        <a href="#booking">Booking</a>
                    </li>
                    <li>
                        <a href="#subscribe">Subscribe</a>
                    </li>
                </ul>
            </div>
            <div className={classes.nav__toggle}>
                {menuOpen ? (
                    <GrClose onClick={() => setMenuOpen(false)} />
                ) : (
                    <GrMenu onClick={() => setMenuOpen(true)} />
                )}
            </div>
        </nav>
    );
}

export default Navbar;
import React from 'react';
import classes from "./Footer.module.scss";
import footerLogo from "../../assets/imgs/logo-footer.png";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div>
                <div className={classes.footer__logo}>
                    <img src={footerLogo} alt="logo" />
                    <div>Book your trip in minute, get full control for much longer.</div>
                </div>
                <div className={classes.footer__column}>
                    <h3>Company</h3>
                    <a href="#footer">About</a>
                    <a href="#footer">Careers</a>
                    <a href="#footer">Mobile</a>
                </div>
                <div className={classes.footer__column}>
                    <h3>Contact</h3>
                    <a href="#footer">Help/FAQ</a>
                    <a href="#footer">Press</a>
                    <a href="#footer">Affilates</a>
                </div>
                <div className={classes.footer__column}>
                    <h3>More</h3>
                    <a href="#footer">Airlinefees</a>
                    <a href="#footer">Airline</a>
                    <a href="#footer">Low fare tips</a>
                </div>
                <div className={classes.footer__social}>
                    <FaFacebookF />
                    <FaInstagram />
                    <FaTwitter />
                </div>
            </div>

            <div>©2022 Jadoo. All rights reserved</div>
        </footer>
    );
}

export default Footer;
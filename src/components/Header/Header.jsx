import React from 'react';
import classes from "./Header.module.scss";
import header from "../../assets/imgs/header.png";

const Header = () => {
    return (
        <section className={classes.header}>
            <div className={classes.header__content}>
                <div className={classes.header__label}>Best Destinations around the world</div>
                <h1>Travel, <span>enjoy</span> and live a new and full life</h1>
                <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                <a href="#dest">Find out more</a>
            </div>

            <div className={classes.header__img}>
                <img src={header} alt=""/>
            </div>
        </section>
    );
}

export default Header;
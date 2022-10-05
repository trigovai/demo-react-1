import React from 'react';
import classes from "./Subscribe.module.scss";

const Subscribe = () => {
    return (
        <section className={classes.subscribe} id="subscribe">
            <div>
                <h2>Subscribe to get information, latest news and other interesting offers about Jadoo</h2>
                <div className={classes.subscribe__input}>
                    <input type="email" placeholder="Your email"/>
                    <button type="submit">Subscribe</button>
                </div>
            </div>
        </section>
    );
}

export default Subscribe;
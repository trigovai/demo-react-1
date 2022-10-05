import React from 'react';
import classes from "./Partners.module.scss";
import img1 from "../../assets/imgs/axon.png";
import img2 from "../../assets/imgs/jetstar.png";
import img3 from "../../assets/imgs/expedia.png";
import img4 from "../../assets/imgs/qantas.png";
import img5 from "../../assets/imgs/alitalia.png";

function Partners(props) {
    return (
        <section className={classes.partners}>
            <div>
                <img src={img1} alt="axon" />
                <img src={img2} alt="jetstar" />
                <img src={img3} alt="expedia" />
                <img src={img4} alt="expedia" />
                <img src={img5} alt="alitalia" />
            </div>
        </section>
    );
}

export default Partners;
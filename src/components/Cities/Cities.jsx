import React from 'react';
import classes from "./Cities.module.scss";
import arrow from "../../assets/imgs/arrow.png";

const Cities = (props) => {
    return (
        <>
            <div className={classes.citiesCard}>
                <img src={props.img} alt=""/>
                <div className={classes.citiesCard__wrap}>
                    <div className={classes.citiesCard__dest}>
                        <span>{props.title}</span>
                        <span>{props.cost}</span>
                    </div>
                    <div className={classes.desc}>
                        {props.desc}
                    </div>
                    <div className={classes.citiesCard__duration}>
                        <img src={arrow} alt=""/>
                        {props.text}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cities;
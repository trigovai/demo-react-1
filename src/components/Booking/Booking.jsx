import React from 'react';
import classes from "./Booking.module.scss";
import image1 from "../../assets/imgs/step-1.png";
import image2 from "../../assets/imgs/step-2.png";
import image3 from "../../assets/imgs/step-3.png";
import booking1 from "../../assets/imgs/booking-1.png";
import booking2 from "../../assets/imgs/booking-2.png";

const Booking = () => {
    return (
        <section className={classes.booking} id="booking">
            <div className={classes.booking__wrap}>
                <div>
                    <div className={classes.booking__label}>Easy and Fast</div>
                    <h2>Book your next trip in 3 easy steps</h2>
                    <div className={classes.booking__cards}>
                        <div className={classes.booking__card}>
                            <img src={image1} alt=""/>
                            <div>
                                <div>Choose Destination</div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</div>
                            </div>
                        </div>
                        <div className={classes.booking__card}>
                            <img src={image2} alt=""/>
                            <div>
                                <div>Make Payment</div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</div>
                            </div>
                        </div>
                        <div className={classes.booking__card}>
                            <img src={image3} alt=""/>
                            <div>
                                <div>Reach Airport on Selected Date</div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.booking__img}>
                    <img src={booking1} alt=""/>
                    <img src={booking2} alt=""/>
                </div>
            </div>
        </section>
    );
}

export default Booking;
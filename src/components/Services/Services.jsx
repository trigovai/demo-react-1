import React from 'react';
import classes from "./Services.module.scss";
import Service from "../Service/Service";
import image1 from "../../assets/imgs/service-1.png";
import image2 from "../../assets/imgs/service-2.png";
import image3 from "../../assets/imgs/service-3.png";
import image4 from "../../assets/imgs/service-4.png";

const servicesData = [
    {
        title: 'Calculated Weather ',
        text: 'Built Wicket longer admire do barton vanity itself do in it.',
        img: image1
    },
    {
        title: 'Best Flights',
        text: 'Engrossed listening. Park gate sell they west hard for the.',
        img: image2
    },
    {
        title: 'Local Events',
        text: 'Barton vanity itself do in it. Preferd to men it engrossed listening. ',
        img: image3
    },
    {
        title: 'Customization',
        text: 'We deliver outsourced aviation services for military customers',
        img: image4
    }
]

const Services = () => {
    return (
        <section className={classes.services} id="services">
            <div>
                <div className={classes.services__label}>Category</div>
                <h2>We Offer Best Services</h2>
                <div className={classes.services__wrap}>
                    {servicesData.map((item, index) => (
                        <div className={classes.services__card}>
                            <Service img={item.img} title={item.title} text={item.text} key={item.title + index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
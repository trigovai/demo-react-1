import React from 'react';
import classes from "./Testimonials.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    }
};

const Testimonials = () => {
    return (
        <section className={classes.testimonials}>
            <div className={classes.testimonials__wrap}>
                <div>
                    <div>Testimonials</div>
                    <h2>What people say about Us</h2>
                </div>

                <Carousel
                    responsive={responsive}
                    arrows={false}
                    showDots={true}
                    infinite={true}
                    draggable={true}
                >
                    <div className={classes.testimonials__card}>
                        <div>“I've been working with Jadoo for a year now and I can't imagine staying with any other travel agency. They offer the best prices and also have great customer service. All my requests are fulfilled within 24 hours, even if it's half-way across the world. The app is also very user-friendly to navigate and navigate around on the go"</div>
                        <div className={classes.testimonials__cardName}>
                            <div>Golzar Hossein</div>
                            <div>Lahore, Pakistan</div>
                        </div>
                    </div>
                    <div className={classes.testimonials__card}>
                        <div>“I have been looking for a good travel agency for over a year and then I found Jadoo. The customer service is impeccable and the deals are unbeatable! My family has saved money on our last two trips because of Jadoo. I am happy to finally know that my travel needs are taken care of!"</div>
                        <div className={classes.testimonials__cardName}>
                            <div>Geoff Peers</div>
                            <div>Scranton, USA</div>
                        </div>
                    </div>
                    <div className={classes.testimonials__card}>
                        <div>“I booked my last two trips with Jadoo and they were absolutely amazing. I was looking for something that I could book right away without a lot of hassle and they delivered. All the other agencies I spoke to before sounded either too pushy or not what I was expecting at all, but Jadoo was just what I needed. Their customer service is stellar and they offer a huge range of destinations to choose from"</div>
                        <div className={classes.testimonials__cardName}>
                            <div>Spencer Huey</div>
                            <div>Richmond, USA</div>
                        </div>
                    </div>
                    <div className={classes.testimonials__card}>
                        <div>“I am so happy to have found Jadoo. My first experience was with their staff in California who helped me find a flight for my girlfriend's mother. I liked the idea that one of their agents was based in India and could cater to our needs better. I booked my next flight with them and they were just as great! They were able to offer me a better deal, found all the answers to my questions, and were always"</div>
                        <div className={classes.testimonials__cardName}>
                            <div>Elvira Anabela</div>
                            <div>Porto, Portugal</div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    );
}

export default Testimonials;
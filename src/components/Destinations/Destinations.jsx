import React from 'react';
import classes from "./Destinations.module.scss";
import Cities from "../Cities/Cities";
import image1 from "../../assets/imgs/london.png";
import image2 from "../../assets/imgs/rome.png";
import image3 from "../../assets/imgs/europe.png";

const citiesData = [
    {
        title: 'Rome, Italy',
        text: '10 Days Trip',
        desc: 'The sprawling city of Rome remains one of the most significant stops in the world. The ruins of the Colosseum, her iconic fountains, lazy wanders through cobblestone streets with gelato in hand. Rome is a winding, spectacular city full of places to discover.',
        cost: '$5,4',
        img: image1
    },
    {
        title: 'London, UK',
        text: '12 Days Trip',
        desc: 'London is layered with history, where medieval and Victorian complement a rich and vibrant modern world. It’s a place where travelers can time-hop through the city, and when they’re weary, do as Londoners do and grab a “cuppa” tea',
        cost: '$4,2',
        img: image2
    },
    {
        title: 'Full Europe',
        text: '28 Days Trip',
        desc: 'From the mighty fjords in the north to the ancient Greek ruins in the south, all the way to the volcanic Azores in the west and the monumental architecture in the east, Europe\'s unique blend of history, landscapes, and cultures must be seen to be believed.',
        cost: '$15k',
        img: image3
    }
]

const Destinations = () => {
    return (
        <section className={classes.destinations} id="dest">
            <div>
                <div className={classes.destinations__label}>Top Selling</div>
                <h2>Top Destinations</h2>
                <div className={classes.destinations__wrap}>
                    {citiesData.map((item, index) => (
                        <Cities img={item.img} title={item.title} cost={item.cost} desc={item.desc} text={item.text} key={item.title + index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Destinations;
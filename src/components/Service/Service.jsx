import React from 'react';

const Service = (props) => {
    return (
        <>
            <div>
                <img src={props.img} alt=""/>
                <div>{props.title}</div>
                <p>{props.text}</p>
            </div>
        </>
    );
}

export default Service;
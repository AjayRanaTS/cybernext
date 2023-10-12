import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Hero = (props) => {

    const hero = {
        title: "We Can be Your Partner in Reducing Cyber Security Risk",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        buttonText: "Show Me How",
        buttonLink: "/contact"
    };

    return (
        <>
            <section className='hero-section'>
                <div className='container'>
                    <div className='hero-wrap'>
                        <div className='hero-content'>
                            <h1>{hero.title}</h1>
                            <div className='rte'>
                                <p>{hero.content}</p>
                            </div>
                            <Link className='primary-button' to={hero.buttonLink}>{hero.buttonText}</Link>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Hero;
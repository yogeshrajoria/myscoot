import './index.scss';
import React from 'react';
import Mosaic from '../Mosaic';

function Hero(){
    return(
        <section className="hero">
            <div className="container">
                <h1 className="hero-title">Myscoot Social Experiences</h1>
                <p className="hero-subtitle">Where making friends is as easy as showing up</p>
                <Mosaic />
                <p className="hero-scroll">Scroll to Explore
                    <svg version="1.1" id="Arrow" className="arrow-down" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 476.213 476.213" >
                        <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "/>
                    </svg>
                </p>
            </div>
        </section>
    )
}
export default Hero;
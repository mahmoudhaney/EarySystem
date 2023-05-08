import React from 'react';
import './css/about.css';
import image from '../../assets/images/about.png'

const About = () => {
    return (
        <div className="about section-padding">
            <div className="container">
                <h2 className="about-title section-title">About</h2>
                <div className="about-content">
                    <div className="about-img">
                        <img src={image} alt=""/>
                    </div>
                    <div className="about-text">
                        <p>
                        We won’t stop until we see a world where deaf people and those with hearing loss or tinnitus are fully included
                        </p>
                        <hr/>
                        <p>
                        Where everyone is treated with respect, dignity and understanding
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default About;
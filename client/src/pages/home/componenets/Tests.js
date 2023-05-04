import React from 'react';
import './css/tests.css';
import image1 from '../../../assets/images/test1.jpg'
import image2 from '../../../assets/images/test2.jpg'
import image3 from '../../../assets/images/test3.jpg'

const Tests = () => {
    return (
        <div id="portfolio" class="section-padding">
            <div class="container">
                <h2 class="section-title">Tests</h2>
                <div class="portfolio-content grid-3">
                    <div>
                        <img src={image1} alt=""/>
                        <div class="project-info">
                            <h3>Test Name</h3>
                            <p class="special-p">My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
                        </div>
                    </div>
    
                    <div>
                        <img src={image2} alt=""/>
                        <div class="project-info">
                            <h3>Test Name</h3>
                            <p class="special-p">My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
                        </div>
                    </div>
    
                    <div>
                        <img src={image3} alt=""/>
                        <div class="project-info">
                            <h3>Test Name</h3>
                            <p class="special-p">My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tests;
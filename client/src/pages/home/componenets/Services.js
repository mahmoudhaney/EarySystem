import React from 'react';
import './css/services.css'
import test4 from '../../../assets/images/test4.jpg'

const Services = () => {
    return (
        <div id="services" className="section-padding">
            <div className="container">
                <h2 className="section-title">Services</h2>
                <div className="services-content grid-3">
                    <div className="col">
                        <div className="srv">
                            <i className="fa-solid fa-earth-asia"></i>
                            <div className="service-text">
                                <h3>Test Your Hearing from Home </h3>
                                <p className="special-p">
                                Are you concerned about your hearing ability? With our online hearing test, you can assess your hearing from the comfort of your own home. Our test is easy to use and takes just a few minutes to complete. You'll receive your results instantly and can use them to take action if necessary.
                                </p>
                            </div>
                        </div>

                        <div className="srv">
                            <i className="fa-regular fa-gem"></i>
                            <div className="service-text">
                                <h3>Convenient and Affordable Hearing Testing</h3>
                                <p className="special-p">
                                Getting your hearing tested has never been more convenient or affordable. Our online hearing test is available 24/7, so you can take it whenever it's convenient for you. And best of all, it's affordable - our pricing is competitive and transparent, with no hidden fees or charges.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="srv">
                            <i className="fa-sharp fa-solid fa-globe"></i>
                            <div className="service-text">
                                <h3>Take Control of Your Hearing Health</h3>
                                <p className="special-p">
                                Taking our online hearing test is the first step towards taking control of your hearing health. With our personalized results and recommendations, you can make informed decisions about how to protect and improve your hearing. Don't wait until it's too late - take our online hearing test today.
                                </p>
                            </div>
                        </div>

                        <div className="srv">
                            <i className="fa-solid fa-earth-asia"></i>
                            <div className="service-text">
                                <h3>Get Personalized Recommendations</h3>
                                <p className="special-p">
                                Our online hearing test provides personalized results and recommendations based on your unique hearing profile. Our advanced algorithms take into account factors such as age, gender, and lifestyle to give you the most accurate assessment possible. Based on your results, we'll provide recommendations for how you can protect and improve your hearing.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="srv-img">
                            <img src={test4} alt=""/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Services;
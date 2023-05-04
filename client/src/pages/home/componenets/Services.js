import React from 'react';
import './css/services.css'

const Services = () => {
    return (
        <div id="services" class="section-padding">
            <div class="container">
                <h2 class="section-title">Services</h2>
                <div class="services-content grid-3">
                    <div class="col">
                        <div class="srv">
                            <i class="fa-solid fa-earth-asia"></i>
                            <div class="service-text">
                                <h3>Graphic Designk</h3>
                                <p class="special-p">
                                    Graphic design is the process of visual communication and 
                                    problem-solving using one or more of typography, photography and illustration.
                                </p>
                            </div>
                        </div>

                        <div class="srv">
                            <i class="fa-regular fa-gem"></i>
                            <div class="service-text">
                                <h3>Web Design</h3>
                                <p class="special-p">
                                    Web design encompasses many different skills and disciplines 
                                    in the production and maintenance of websites.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="srv">
                            <i class="fa-sharp fa-solid fa-globe"></i>
                            <div class="service-text">
                                <h3>UI & UX</h3>
                                <p class="special-p">
                                    Process of enhancing user satisfaction with a product by improving 
                                    the usability, accessibility, and pleasure provided in the interaction.
                                </p>
                            </div>
                        </div>

                        <div class="srv">
                            <i class="fa-solid fa-earth-asia"></i>
                            <div class="service-text">
                                <h3>Web Development</h3>
                                <p class="special-p">
                                    Web development is a broad term for the work involved in developing 
                                    a web site for the Internet or an intranet.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="srv-img">
                            <img src="https://picsum.photos/200/300" alt=""/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Services;
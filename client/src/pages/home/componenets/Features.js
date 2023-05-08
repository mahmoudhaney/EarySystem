import React from 'react';
import './css/features.css'

const Features = () => {
    return (
        <div id="features" className="section-padding">
            <div className="container grid-3">
                <div className="feature">
                    <h4>Comprehensive Exams</h4>
                    <p className="special-p">
                    Our hearing assistance exams are designed to be comprehensive, ensuring that we can provide you with the most accurate diagnosis possible.
                    </p>
                </div>
    
                <div className="feature">
                    <h4>Qualified Professionals</h4>
                    <p className="special-p">
                    Our team of qualified professionals has the experience and knowledge necessary to provide you with the care you need.
                    </p>
                </div>
    
                <div className="feature">
                    <h4>Technology</h4>
                    <p className="special-p">
                    We use the latest technology and equipment to ensure that you receive the most accurate and effective hearing assistance possible.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Features;
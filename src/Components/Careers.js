import React from "react";
import '../Styles/Careers.css';

// import img
import arr4 from '../img/arr4.svg';

const positionList = [
    {
        position: 'General Manager',
        location: 'Jakarta, Indonesia',
    },
    {
        position: 'UI/UX Designer',
        location: 'Yokohama, Japan',
    },
    {
        position: 'Blog Content Copywriter',
        location: 'New York, United States',
    },
    {
        position: 'Graphic Designer',
        location: 'New York, United States',
    },
    {
        position: 'Fleet Supervisor',
        location: 'Jakarta, Indonesia',
    },
    {
        position: 'UX Analyst',
        location: 'London, United Kingdom',
    },
];

function Careers() {
    return (
        <div className="Careers">
            <div className="careers-cover">
                <h1>Careers</h1>
                <div className="careers-circles">
                    <div className="careers-circle"></div>
                    <div className="careers-circle"></div>
                    <div className="careers-circle circle-gray"></div>
                </div>
            </div>
            <div className="careers-fb">
                <div className="careers-fb-1">
                    <div className="careers-fb-text">
                        <h2>Care to join our mission?</h2>
                        <p>We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!</p>
                        <button>Say Hello</button>
                    </div>
                    <div>
                        <div className="careers-fb-circles-1">
                            <div className="careers-fb-gray-circle-1"></div>
                            <img alt="" src={arr4} />
                            <div className="careers-or-line"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="careers-sb">
                <h2>Why join us?</h2>
                <div className="careers-sb-cards">
                    <div className="careers-sb-card">
                        <div className="careers-sb-card-img-1">
                            <div className="careers-sb-orange-circle">01</div>
                        </div>
                        <h4>Our tech</h4>
                        <p>We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!</p>
                    </div>
                    <div className="careers-sb-card">
                        <div className="careers-sb-card-img-2">
                            <div className="careers-sb-orange-circle">02</div>
                        </div>
                        <h4>Our integrity</h4>
                        <p>We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.</p>
                    </div>
                    <div className="careers-sb-card">
                        <div className="careers-sb-card-img-3">
                            <div className="careers-sb-orange-circle">03</div>
                        </div>
                        <h4>Our community</h4>
                        <p>We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.</p>
                    </div>
                </div>
            </div>
            <div className="position-block">
                <ul>
                    {
                        positionList.map((item) => {
                            return (
                                <li>
                                    <div>
                                        <h4>{item.position}</h4>
                                        <p>{item.location}</p>
                                    </div>
                                    <button>Apply</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Careers;
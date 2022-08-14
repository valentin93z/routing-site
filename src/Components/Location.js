import React from "react";
import '../Styles/Location.css';
import worldMap from '../img/world-map-clear.png';

function Location() {
    return (
        <div className="Locations">
            <div className="locations-cover">
                <h1>Locations</h1>
                <div className="locations-circles">
                    <div className="locations-circle"></div>
                    <div className="locations-circle"></div>
                    <div className="locations-circle circle-gray"></div>
                </div>
            </div>
            <div className="world-map">
                <img alt="" src={worldMap} />
                <div className="city new-york">
                    <span>New York</span>
                    <div className="quatr"></div>
                </div>
                <div className="city london">
                    <span>London</span>
                    <div className="quatr"></div>
                </div>
                <div className="city yokohama">
                    <span>Yokohama</span>
                    <div className="quatr"></div>
                </div>
                <div className="city jakarta">
                    <span>Jakarta</span>
                    <div className="quatr"></div>
                </div>
            </div>
            <div className="city-375">
                <ul>
                    <li>New York</li>
                    <li>London</li>
                    <li>Jakarta</li>
                    <li>Yokohama</li>
                </ul>
            </div>
            <div className="messageUs">
                <div className="messageUs-text">
                    <h2>Your City Not Listed?</h2>
                    <p>If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
                </div>
                <button>Message Us</button>
            </div>
        </div>
    )
}

export default Location;
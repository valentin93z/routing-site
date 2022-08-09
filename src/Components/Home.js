import React from "react";
import '../Styles/Home.css'

// import img
import smart from '../img/smart.svg';
import scooter from '../img/scooter.svg';
import man from '../img/man-on-scooter.svg';
import arr0 from '../img/arr0.svg';
import arr1 from '../img/arr1.svg';
import arr2 from '../img/arr2.svg';
import arr3 from '../img/arr3.svg';

function Home() {
    return (
        <div>
                <div className="home-cover">
                    <div className="cover-wrap">
                        <h1>Scooter sharing <br/> made simple</h1>
                        <div className="wrap">
                            <p>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
                            <button>Get scootin</button>
                            <div className="arr-cover">
                                <img alt="" src={arr0} />
                                <img alt="" src={arr1} />
                            </div>
                        </div>
                    </div>
                    <div className="circles">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle circle-gray"></div>
                    </div>
                    <img className="cover-arr768" alt="" src={arr1} />
                </div>
                <div className="home-second-block">
                    <div className="home-second-block-item">
                        <div className="img-circle">
                            <img id="smart" alt="smart" src={smart} />
                        </div>
                        <h4>Locate with app</h4>
                        <p>Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.</p>
                    </div>
                    <div className="home-second-block-item">
                        <div className="img-circle">
                            <img id="scooter" alt="scooter" src={scooter} />
                        </div>
                        <h4>Pick your scooter</h4>
                        <p>We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.</p>
                    </div>
                    <div className="home-second-block-item">
                        <div className="img-circle">
                            <img id="man" alt="man" src={man} />
                            <hr className="home-second-block-gray-line" />
                        </div>
                        <h4>Enjoy the ride</h4>
                        <p>Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.</p>
                    </div>
                </div>
                <div className="home-third-block">
                    <div className="home-third-block-item-right">
                        <div className="home-third-block-item-text">
                            <h2>Easy to use riding telemetry</h2>
                            <p>The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.</p>
                            <button>Learn More</button>
                        </div>
                        <div className="home-third-block-item-circles">
                            <div className="home-third-block-item-circle-img img-one">
                                <div className="home-third-block-item-circle-gray circle-one"></div>
                                <img alt="" src={arr2} />
                                <div className="orLine"></div>
                            </div>
                        </div>
                    </div>
                    <div className="home-third-block-item-left">
                        <div className="home-third-block-item-circles">
                            <div className="home-third-block-item-circle-img img-two">
                                <div className="home-third-block-item-circle-gray circle-two"></div>
                                <img alt="" src={arr3} />
                            </div>
                        </div>
                        <div className="home-third-block-item-text">
                            <h2>Coming to a city near you</h2>
                            <p>Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className="home-third-block-item-right">
                        <div className="home-third-block-item-text">
                            <h2>Zero hassle payments</h2>
                            <p>Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.</p>
                            <button>Learn More</button>
                        </div>
                        <div className="home-third-block-item-circles">
                            <div className="home-third-block-item-circle-img img-three">
                                <div className="home-third-block-item-circle-gray circle-three"></div>
                                <img alt="" src={arr2} />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Home;
import React from "react";
import '../Styles/About.css';
import { useDispatch, useSelector } from "react-redux";
import { openQuestionsHowItWorks, openQuestionsSafeDriving } from '../features/scooterSlice';

// import img
import arr3 from '../img/arr3.svg';
import arr4 from '../img/arr4.svg';
import arrTop from '../img/arr-top.svg';
import arrBottom from '../img/arr-bottom.svg';



function About() {

    const dispatch = useDispatch();
    const howItWorks = useSelector((state) => state.scooter.howItWorks);
    const safeDriving = useSelector((state) => state.scooter.safeDriving);


    const howItWorksHandler = (id) => {
        dispatch(openQuestionsHowItWorks(id));
    }

    const safeDrivingHandler = (id) => {
        dispatch(openQuestionsSafeDriving(id));
    }


    return (
        <div className="About">
            <div className="about-cover">
                <h1>About</h1>
                <div className="about-circles">
                    <div className="about-circle"></div>
                    <div className="about-circle"></div>
                    <div className="about-circle circle-gray"></div>
                </div>
            </div>
            <div className="about-fb">
                <div className="about-fb-1">
                    <div className="about-fb-text">
                        <h2>Mobility for the digital era</h2>
                        <p>Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.</p>
                    </div>
                    <div>
                        <div className="about-fb-circles-1">
                            <div className="about-fb-gray-circle-1"></div>
                            <img alt="" src={arr4} />
                            <div className="about-or-line"></div>
                        </div>
                    </div>
                </div>
                <div className="about-fb-2">
                    <div>
                        <div className="about-fb-circles-2">
                            <div className="about-fb-gray-circle-2"></div>
                            <img alt="" src={arr3} />
                        </div>
                    </div>
                    <div className="about-fb-text">
                        <h2>Better urban living</h2>
                        <p>We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.</p>
                    </div>
                </div>
            </div>
            <div className="about-sb">
                <h2>Our values</h2>
                <div className="about-sb-cards">
                    <div className="about-sb-card">
                        <div className="about-sb-card-img-1">
                            <div className="about-sb-orange-circle">01</div>
                        </div>
                        <h4>Our tech</h4>
                        <p>We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!</p>
                    </div>
                    <div className="about-sb-card">
                        <div className="about-sb-card-img-2">
                            <div className="about-sb-orange-circle">02</div>
                        </div>
                        <h4>Our integrity</h4>
                        <p>We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.</p>
                    </div>
                    <div className="about-sb-card">
                        <div className="about-sb-card-img-3">
                            <div className="about-sb-orange-circle">03</div>
                        </div>
                        <h4>Our community</h4>
                        <p>We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.</p>
                    </div>
                </div>
            </div>
            <div className="faq-block">
                <h2>FAQs</h2>
                <div className="howItWorks">
                    <h3>How it works</h3>
                    <ul>
                        {
                            howItWorks.map((q) => {
                                return (
                                    <li key={q.id} onClick={(id) => howItWorksHandler(q.id)}>
                                        <div className="question-head">
                                            <h4>{q.question}</h4>
                                            <img alt="" src={q.status ? arrTop : arrBottom}/>
                                        </div>
                                        <p className={q.status ? 'answerDisplay' : 'answerNone'}>{q.answer}</p>
                                    </li>
                                )
                            })
                        }
                     </ul>
                 </div>
                 <div className="safeDriving">
                     <h3>Safe driving</h3>
                     <ul>
                        {
                            safeDriving.map((q) => {
                                return (
                                    <li key={q.id} onClick={(id) => safeDrivingHandler(q.id)}>
                                        <div className="question-head">
                                            <h4>{q.question}</h4>
                                            <img alt="" src={q.status ? arrTop : arrBottom}/>
                                        </div>
                                        <p className={q.status ? 'answerDisplay' : 'answerNone'}>{q.answer}</p>
                                    </li>
                                )
                            })
                        }
                     </ul>
                </div>
            </div>
        </div>
    )
}

export default About;
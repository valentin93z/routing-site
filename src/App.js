import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBurger, autoCloseMenu } from './features/scooterSlice';
import Home from './Components/Home';
import About from './Components/About';
import Location from './Components/Location'
import Careers from './Components/Careers';

// import img
import scoot from './img/scoot.svg';
import scootW from './img/scoot-w.svg';
import apple from './img/apple.svg';
import google from './img/google.svg';
import burger from './img/burger.svg';
import burgerClose from './img/burger-close.svg';


function App() {

  const dispatch = useDispatch();
  const burgerStatus = useSelector((state) => state.scooter.burgerOpen);

  const toggleBurgerHandler = () => {
    dispatch(toggleBurger());
  }

  const autoCloseHandler = () => {
    dispatch(autoCloseMenu());
  }

  return (
    <div className="App">
      <Router>
        <div className="wrapper-block">
          <header>
            <div className='burgerMenu' id='burgerMenu' onClick={() => toggleBurgerHandler()}>
              <img alt="" src={burgerStatus ? burgerClose : burger} />
            </div>
            <nav>
              <ul>
                <li onClick={() => autoCloseHandler()}>
                  <Link to={'/routing-site'}><img alt='scoot-logo' src={scoot} /></Link>
                </li>
                <li className={burgerStatus ? "linkDisplay navAbout" : "linkHide"} onClick={() => autoCloseHandler()}>
                  <Link to={'/about'}>About</Link>
                </li>
                <li className={burgerStatus ? "linkDisplay navLocation" : "linkHide"} onClick={() => autoCloseHandler()}>
                  <Link to={'/location'}>Location</Link>
                </li>
                <li className={burgerStatus ? "linkDisplay navCareers" : "linkHide"} onClick={() => autoCloseHandler()}>
                  <Link to={'/careers'}>Careers</Link>
                </li>
              </ul>
              <button className={burgerStatus ? "navButton" : "buttonHide"}>Get scootin</button>
            </nav>
            <div className={burgerStatus ? "openMenu" : "closeMenu"}></div>
            <div className={burgerStatus ? "grayMenu" : "closeMenu"}></div>
          </header>
          <main>
            <Routes>
              <Route path={'/routing-site'} element={<Home/>} />
              <Route path={'/about'} element={<About/>} />
              <Route path={'/location'} element={<Location/>} />
              <Route path={'/careers'} element={<Careers/>} />
            </Routes>
          </main>
          <footer>
            <div className='footer-top'>
              <h2>Sign up and <br/> Scoot off today</h2>
              <div className='footer-stors'>
                <div className='footer-apple'>
                  <img alt='apple' src={apple} />
                  <div>
                    <p>Available on the</p>
                    <p>AppStore</p>
                  </div>
                </div>
                <div className='footer-google'>
                  <img alt='google' src={google} />
                  <div>
                    <p>Get it on</p>
                    <p>GooglePlay</p>
                  </div>
                </div>
              </div>
              <div className='footer-circles'>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className='footer-bottom'>
              <ul>
                  <li>
                    <Link to={'/routing-site'}><img alt='scoot-logo' src={scootW} /></Link>
                  </li>
                  <li>
                    <Link to={'/about'}>About</Link>
                  </li>
                  <li>
                    <Link to={'/location'}>Location</Link>
                  </li>
                  <li>
                    <Link to={'/careers'}>Careers</Link>
                  </li>
                </ul>
                <div className='footer-social'>
                  <a href='https://facebook.com' target="_blank" rel="noreferrer">
                    <svg width="27px" height="27px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
                  </a>
                  <a href='https://twitter.com' target="_blank" rel="noreferrer">
                    <svg width="27px" height="27px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                  </a>
                  <a href='https://instagram.com' target="_blank" rel="noreferrer">
                    <svg width="27px" height="27px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                  </a>
                </div>
            </div>
          </footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
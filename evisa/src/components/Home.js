import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

import gov from '../assests/img11.png';
import expert from '../assests/expert.jpeg';
import img from '../assests/img0.jpg';
import Bvisa from '../assests/Buss_Visa.png';
import Tvisa from '../assests/tvisa.png';
import sectrans from '../assests/sectrans.png';
import logo from '../assests/logo.png';
import gr from '../assests/gr.jpeg';
import tra from '../assests/trans.jpeg';
import mvisa from '../assests/mvisa.png';
import cvisa from '../assests/cvisa.png';
import Support from '../assests/support.jpg';
import Footer from './Footer';

function Home() {
  const el = useRef(null);

  useEffect(() => {
    const strings = ['Services', 'Updates', 'Support', 'Seamless Support', 'in a Convenient way', 'Hassle-free Solutions'];
    let currentIndex = 0;

    const animateText = () => {
      gsap.to(el.current, {
        duration: 0.5,
        opacity: 0,
        onComplete: () => {
          el.current.textContent = strings[currentIndex];
          gsap.to(el.current, { duration: 0.5, opacity: 1 });
        }
      });
      currentIndex = (currentIndex + 1) % strings.length;
    };

    const animationInterval = setInterval(animateText, 2000);

    const typed = new Typed(el.current, {
      strings: strings,
      typeSpeed: 50,
      loop: true
    });

    return () => {
      clearInterval(animationInterval);
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <div className="navbar-logo-left">
        <div className="navbar-logo-left-container shadow-three w-nav">
          <div className="container">
            <div className="navbar-wrapper">
              <a href="#" className="navbar-brand w-nav-brand">
                <img src={gov} loading="lazy" width="66" alt="" />
              </a>
              <div className="text-block">eVisaIndia</div>
              <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
                <ul role="list" className="nav-menu-two w-list-unstyled">
                  <li><a href="#" className="nav-link">About eVisaIndia</a></li>
                  <li><Link to="/apply" className="nav-link">Apply-E-Visa</Link></li>
                  <li><Link to="/faq" className="nav-link">FAQ's</Link></li>
                  <li><div className="nav-divider"></div></li>
                  <li className="mobile-margin-top-10">
                    <Link to="/apply" className="button-primary w-button">Apply-Now</Link>
                  </li>
                </ul>
              </nav>
              <div className="menu-button w-nav-button">
                <div className="w-icon-nav-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="hero-subscribe-right">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-split">
              <img src={logo} loading="lazy" alt="" className="shadow-two" />
            </div>
            <div className="hero-split">
              <h1 style={{ fontFamily: 'Courier New', fontSize: '50px', fontWeight: 'bold', color: 'blue' }}>
                Your One-Stop Destination for E-Visas <br></br> <span style={{ color: "red" }} ref={el} />
              </h1>
              <p className="margin-bottom-24px" style={{ fontFamily: 'Courier New', color: 'white' }}>
                At our core, we are dedicated to offering a comprehensive array of visa services tailored to meet every aspect of your requirements. Our unwavering commitment revolves around prioritizing your privacy and security while orchestrating a seamless and intuitive user experience. With meticulous attention to detail, we assume full responsibility for delivering a service that not only meets but exceeds your expectations, ensuring a stress-free and expedited visa application journey
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-overview">
        <div className="container-3">
          <h2 className="centered-heading">We Offer</h2>
          <p className="pricing-description">The Below Listed are the Types of E-visa&#x27;s Currently we were offering</p>
          <div className="alternative-cards-grid">
            <div className="alternative-card">
              <img src={Tvisa} loading="lazy" alt="" className="alternative-card-image" />
              <h3>Tourist Visa</h3>
              <p><strong>Relevance:</strong> Tourists and travelers intending to visit for leisure or recreational purposes.</p>
              <p><strong>Max. Duration:</strong> Typically up to 6 months, but can vary depending on the country's regulations. Extensions may be possible in certain circumstances.</p>
            </div>
            <div className="alternative-card">
              <img src={Bvisa} loading="lazy" alt="" className="alternative-card-image" />
              <h3>Business Visa</h3>
              <p><strong>Relevance:</strong> Visiting India for a business purpose</p>
              <p><strong>Max. Duration:</strong> 5 years (Extendable in India)</p>
            </div>
            <div className="alternative-card">
              <img src={cvisa} loading="lazy" alt="" className="alternative-card-image" />
              <h3>Conference Visa</h3>
              <p><strong>Relevance:</strong> International seminars/ seminars held by Govt./ PSUs/NGOs</p>
              <p><strong>Max. Duration:</strong> Duration of Conference</p>
            </div>
            <div className="alternative-card">
              <img src={mvisa} loading="lazy" alt="" className="alternative-card-image" />
              <h3>Medical Visa</h3>
              <p><strong>Relevance:</strong> For seeking medical treatment in India at recognized and specialized hospitals and treatment centres</p>
              <p><strong>Max. Duration:</strong> 1 year</p>
            </div>
          </div>
        </div>
      </section>

      <div className="team-slide-wrapper w-slide">
        <div className="team-block">
          <img src={sectrans} loading="lazy" alt="" className="team-member-image-two" />
          <div className="team-block-info">
            <h3 className="team-member-name-two">Secure Transactions</h3>
            <p className="team-member-text">Your transactions are encrypted and secure, ensuring the safety of your personal information.</p>
          </div>
        </div>
      </div>

      <div className="team-slide-wrapper w-slide">
        <div className="team-block">
          <img src={expert} loading="lazy" alt="" className="team-member-image-two" />
          <div className="team-block-info">
            <h3 className="team-member-name-two">Expert Assistance</h3>
            <p className="team-member-text">Our team of experts is always available to assist you with any queries or concerns you may have.</p>
          </div>
        </div>
      </div>

      <div className="team-slide-wrapper w-slide">
        <div className="team-block">
          <img src={Support} loading="lazy" alt="" className="team-member-image-two" />
          <div className="team-block-info">
            <h3 className="team-member-name-two">User-Friendly Interface</h3>
            <p className="team-member-text">Our platform is designed to be intuitive and easy to navigate, ensuring a smooth user experience.</p>
          </div>
        </div>
      </div>

      <div className="team-slide-wrapper w-slide">
        <div className="team-block">
          <img src={gr} loading="lazy" alt="" className="team-member-image-two" />
          <div className="team-block-info">
            <h3 className="team-member-name-two">Global Reach</h3>
            <p className="team-member-text">We cater to applicants from around the world, providing a seamless visa application process regardless of location.</p>
          </div>
        </div>
      </div>

      <div className="team-slide-wrapper w-slide">
        <div className="team-block">
          <img src={tra} loading="lazy" alt="" className="team-member-image-two" />
          <div className="team-block-info">
            <h3 className="team-member-name-two">Transparent Fees</h3>
            <p className="team-member-text">We believe in transparency, with no hidden fees or charges throughout the visa application process.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;

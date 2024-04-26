import React from 'react';
import Typed from 'typed.js'
import gov from '../assests/img11.png'
import myPic from '../assests/profile.png'
import img from '../assests/img0.jpg'
import fast from '../assests/img8.png'
import status from '../assests/img7.png'
import service from '../assests/img1.png'
import visa from '../assests/visa.png'
import student   from '../assests/student.png'
import medi from '../assests/medi.png'
import travel from '../assests/travel.png'
import emp from '../assests/employee.png'
import Footer from './Footer'
import {Link} from 'react-router-dom'
function Home() {
    const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Services','Updates','Support'],
      typeSpeed: 50,
      loop:true
    });

    return () => {
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
                                <div className="text-block">Online E-Visa</div>
                                <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
                                    <ul role="list" className="nav-menu-two w-list-unstyled">
                                        <li><a href="#" className="nav-link">About us</a></li>
                                        <li><Link to="/apply" className="nav-link">Apply E-Visa</Link></li>
                                        <li><Link to="/check" className="nav-link">Check Status</Link></li>
                                        <li><Link to="/faq" className="nav-link">FAQ's</Link></li>
                                        <li><div className="nav-divider"></div></li>
                                        <li><a href="#team" className="nav-link-accent">Team</a></li>
                                        <li className="mobile-margin-top-10">
                                            <Link to="/apply" className="button-primary w-button">Apply Now</Link>
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
                                <img src={myPic} loading="lazy" alt="" className="shadow-two" />
                            </div>
                            <div className="hero-split">
    <h1 style={{ fontFamily: 'Arial', fontSize: '50px', fontWeight: 'bold', color: 'blue' }}>
    Your One-Stop Destination for E-Visas <span style={{ color: "red" }} ref={el} />
    </h1>
    <p className="margin-bottom-24px">
    <br></br>
    
    
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
                <img src={img} loading="lazy" alt="" className="alternative-card-image" />
                <h3>Employment Visa</h3>
                <p><strong>Relevance:</strong> Highly skilled Individuals intending to take up employment</p>
                <p><strong>Max. Duration:</strong> 5 years/period of contract (Extendable in India)</p>
            </div>
            <div className="alternative-card">
                <img src={img} loading="lazy" alt="" className="alternative-card-image" />
                <h3>Business Visa</h3>
                <p><strong>Relevance:</strong> Visiting India for a business purpose</p>
                <p><strong>Max. Duration:</strong> 5 years (Extendable in India)</p>
            </div>
            <div className="alternative-card">
                <img src={img} loading="lazy" alt="" className="alternative-card-image" />
                <h3>Project Visa</h3>
                <p><strong>Relevance:</strong> For executing projects in the Power and Steel sectors</p>
                <p><strong>Max. Duration:</strong> 1 year or for actual duration of the project/contract</p>
            </div>
            <div className="alternative-card">
                <img src={img} loading="lazy" alt="" className="alternative-card-image" />
                <h3>“X”/ Entry Visa</h3>
                <p><strong>Relevance:</strong> For accompanying families of foreign nationals</p>
                <p><strong>Max. Duration:</strong> 5 years (Extendable in India)</p>
            </div>
            <div className="alternative-card">
                <img src={img} loading="lazy" alt="" className="alternative-card-image" />
                <h3>Tourist Visa</h3>
                <p><strong>Relevance:</strong> Visiting India for tourism</p>
                <p><strong>Max. Duration:</strong> 30 days (Not extendable in India)</p>
            </div>
            <div className="alternative-card">
                <img src={img} loading="lazy" alt="" className="alternative-card-image" />
                <h3>Research Visa</h3>
                <p><strong>Relevance:</strong> Pursuing research in any field</p>
                <p><strong>Max. Duration:</strong> 5 years (Extendable in India)</p>
            </div>
            <div className="alternative-card">
                <img src={img} loading="lazy" alt="" className="alternative-card-image" />
                <h3>Transit Visa</h3>
                <p><strong>Relevance:</strong> Travellers passing through India</p>
                <p><strong>Max. Duration:</strong> 15 days (Not extendable in India)</p>
            </div>
            <div className="alternative-card">
                <img src={img} loading="lazy" alt="" className="alternative-card-image" />
                <h3>Conference Visa</h3>
                <p><strong>Relevance:</strong> International seminars/ seminars held by Govt./ PSUs/NGOs</p>
                <p><strong>Max. Duration:</strong> Duration of Conference</p>
            </div>
            <div className="alternative-card">
                <img src={img} loading="lazy" alt="" className="alternative-card-image" />
                <h3>Medical Visa</h3>
                <p><strong>Relevance:</strong> For seeking medical treatment in India at recognized and specialized hospitals and treatment centres</p>
                <p><strong>Max. Duration:</strong> 1 year</p>
            </div>
        </div>
    </div>
</section>





                <section className="team-slider">
                    <div className="container-3">
                        <h2 className="centered-heading">Here We Provide</h2>
                        <p className="centered-subheading">The below features we are offering as part of this online service</p>
                        <div className="team-slider-wrapper w-slider">
                            <div className="w-slider-mask">
                                <div className="team-slide-wrapper w-slide">
                                    <div className="team-block">
                                        <img src={img} loading="lazy" width="338" alt="" className="team-member-image-two" />
                                        <div className="team-block-info">
                                            <h3 className="team-member-name-two">Customer Service</h3>
                                            <p className="team-member-text">We provide 24/7 customer service for a better user experience and we respect your feedback</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-slide-wrapper w-slide">
                                    <div className="team-block">
                                        <img src={img} loading="lazy" alt="" className="team-member-image-two" />
                                        <div className="team-block-info">
                                            <h3 className="team-member-name-two">Fast Processing</h3>
                                            <p className="team-member-text">We provide fast processing of your visa application as fast as we value user time</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-slide-wrapper w-slide">
                                    <div className="team-block">
                                        <img src={img} loading="lazy" alt="" className="team-member-image-two" />
                                        <div className="team-block-info">
                                            <h3 className="team-member-name-two">Status of Application</h3>
                                            <p className="team-member-text">We provide a token number for your application that can be used to track the status of the application</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="team-slider-arrow w-slider-arrow-left">
                                <div className="w-icon-slider-left"></div>
                            </div>
                            <div className="team-slider-arrow w-slider-arrow-right">
                                <div className="w-icon-slider-right"></div>
                            </div>
                            <div className="team-slider-nav w-slider-nav w-slider-nav-invert w-round"></div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }

export default Home

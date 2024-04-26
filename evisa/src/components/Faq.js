import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/logo.png';
import Footer from './Footer';

function FAQ() {
  return (
    <div>
      {/* Navbar */}
      <div className="navbar-logo-left">
        <div className="navbar-logo-left-container shadow-three w-nav">
          <div className="container">
            <div className="navbar-wrapper">
              <a href="#" className="navbar-brand w-nav-brand">
                <img src={logo} loading="lazy" width="66" alt="" />
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

      {/* FAQ Content */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div>
            <h3>Who is eligible for e-Visa Services?</h3>
            <p>
              Ans- The following are the eligibility conditions for availing e-Visa services:
              <ol>
                <li>Nationals of countries listed on the e-Visa website <a href="https://indianvisaonline.gov.in/evisa/" target="_blank" rel="noopener noreferrer">https://indianvisaonline.gov.in/evisa/</a> are eligible to apply for e-Visa Services.</li>
                <li>Foreigners whose sole objective for visiting India is:
                  <ol type="a">
                    <li>Recreation and sightseeing</li>
                    <li>Casual visit to meet friends and relatives</li>
                    <li>Attending short term yoga programme or short term courses on local languages, music, dance, arts & crafts, cooking, medicine etc. which should not be a formal or structured course/programme (courses not exceeding 6 months duration and not issuing a qualifying certificate/diploma etc. to the participants)</li>
                    <li>Voluntary work of short duration (for a maximum period of one month, which do not involve any monetary payment or consideration of any kind in return)</li>
                    <li>Medical treatment, including treatment under Indian systems of medicine</li>
                    <li>As attendant to e-Medical visa holder</li>
                    <li>Business purpose</li>
                    <li>Attending a conference/ seminar/ workshop.</li>
                  </ol>
                </li>
                <li>Passport should have at least six months validity at the time of making application for grant of e-Visa and a re-entry permit, if that is required under the law of the country of nationality of the applicant. The passport should have at least two blank pages for stamping by the Immigration Officer.</li>
                <li>The foreigner should have return ticket or onward journey ticket, with sufficient money to spend during his/her stay in India.</li>
                <li>Foreigners of Pakistani origin or having Pakistani Passport are not eligible for e-Visa. Foreigners who are not Pakistani nationals, but whose parents or grandparents (either paternal or maternal) was born in, or was permanently resident in Pakistan, are also not eligible for e-Visa. They may apply for regular Visa at Indian Mission.</li>
                <li>Not available to Diplomatic/Official Passport Holders or Laissez-passer/ international travel document holders.</li>
                <li>Not available to individuals endorsed on Parent's/Spouse's Passport i.e. each individual should have a separate passport.</li>
              </ol>
            </p>
          </div>

          <div>
            <h3>Is there any fee other than the processing fee?</h3>
            <p>
              Ans- No, there is no fee other than the processing fee for e-Visa application and it is non-refundable. Please visit our website to know the fee applicable for your country as it is country-specific.
            </p>
          </div>

          <div>
            <h3>When should I apply?</h3>
            <p>
              Ans- (i) For e-Tourist Visa (01 year / 05 years), e-Business Visa, e-Medical, e-Medical Attendant and e-Conference visa, applicants of the eligible countries/territories may apply online minimum 4 days in advance of the date of arrival. Such application can be made 120 days in advance from proposed date of travel.
              <br />
              (ii) For e-Tourist Visa (30 days) , applicants of the eligible countries/territories may apply online minimum 4 days in advance of the date of arrival. Such application can be made 30 days in advance from proposed date of travel.
            </p>
          </div>

          <div>
            <h3>Can I convert my e-Visa to any other Visa?</h3>
            <p>
              Ans- No, e-Visa is non-extendable and non-convertible.
            </p>
          </div>

          <div>
            <h3>What are the necessary documents required to apply for an e-Business Visa other than the Passport?</h3>
            <p>
              Ans - You have to upload the business card along with the details of Indian Firm/Company (which you intend to associate yourself with) for business activities. For Sports Related Activity under e-Business Visa, please refer Instructions for applicant page for the list of documents required.
            </p>
          </div>
        </div>
      </section>

      {/* Close link */}
      <div>
        <a href="/home">Close</a>
      </div>

      <Footer />
    </div>
  );
}

export default FAQ;

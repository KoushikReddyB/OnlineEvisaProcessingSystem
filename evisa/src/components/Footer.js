import React from 'react';
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='primary' className='text-white'>
      <MDBContainer className='py-5'>
        <MDBRow className='mb-4'>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>eVisaIndia: A Online E-visa Platform</h5>
            <p>
              Experience hassle-free visa services with our online platform. Apply for your e-visa easily from anywhere in the world.
            </p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Quick Links</h5>
            <ul className='list-unstyled mb-0'>
              <li>
                <a href='/home' className='text-white'>
                  Home
                </a>
              </li>
              <li>
                <a href='/apply' className='text-white'>
                  Apply
                </a>
              </li>
              <li>
                <a href='/register' className='text-white'>
                  Register
                </a>
              </li>
              <li>
                <a href='/check' className='text-white'>
                  Check Status
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Contact Us</h5>
            <ul className='list-unstyled mb-0'>
              <li>
                <a href='mailto:contact@example.com' className='text-white'>
                  eVisaIndia@kluniversity.in
                </a>
              </li>
              <li>
                <a href='tel:+1234567890' className='text-white'>
                  +91 987 6543 210
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='6' className='text-md-start text-center'>
              &copy; {new Date().getFullYear()} E-VisaIndia. All rights reserved.
            </MDBCol>
            <MDBCol md='6' className='text-md-end text-center'>
              <ul className='list-inline'>
                <li className='list-inline-item'>
                  <a href='/privacy-policy' className='text-white text-decoration-none'>Privacy Policy</a>
                </li>
                <li className='list-inline-item'>
                  <a href='/terms-of-service' className='text-white text-decoration-none'>Terms of Service</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

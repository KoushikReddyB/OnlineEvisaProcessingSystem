import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar2 from './Navbar2';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon } from 'mdb-react-ui-kit';
import { sha256 } from 'js-sha256';

function Register() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        const name = document.getElementById('un').value;
        const email = document.getElementById('email1').value;
        const password = document.getElementById('pwd').value;

        // Append some text for additional security
        const hashedPassword = sha256(password) + 'Zap';

        axios.post('http://localhost:8000/newuser', {
            name: name,
            email: email,
            password: hashedPassword
        }).then((res) => {
            if (res.data === 1) {
                navigate('/');
            }
        });
    };

    return (
        <div style={{ backgroundColor: "rgba(245, 247,250, 1)", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Navbar2 />
            <MDBContainer>
                <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md='10' lg='6' className='d-flex flex-column align-items-center'>
                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                <div className="text-center mb-4">
                                    <MDBIcon fas icon="user" className="me-2" size='2x' />
                                    <MDBInput label='Your Name' id='un' type='text' className='w-100' />
                                </div>

                                <div className="text-center mb-4">
                                    <MDBIcon fas icon="envelope" className="me-2" size='2x' />
                                    <MDBInput label='Your Email' id='email1' type='email' />
                                </div>

                                <div className="text-center mb-4">
                                    <MDBIcon fas icon="lock" className="me-2" size='2x' />
                                    <MDBInput label='Password' id='pwd' type='password' />
                                </div>

                                <div className="text-center mb-4">
                                    <MDBIcon fas icon="key" className="me-2" size='2x' />
                                    <MDBInput label='Repeat your password' id='form4' type='password' />
                                </div>

                                <MDBBtn className='mb-4 w-100' size='lg' onClick={handleSubmit}>Register</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </div>
    );
}

export default Register;

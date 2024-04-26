import React from 'react';
import axios from 'axios';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Navbar2 from './Navbar2';
import { sha256 } from 'js-sha256';

function Login({ store }) {
    const navigate = useNavigate();

    function handleLogin() {
        const user = document.getElementById('email1').value;
        const password = document.getElementById('pwd').value;

        // Hash the password using SHA-256 and append some text for encryption
        const hashedPassword = sha256(password) + 'Zap';

        axios.post('https://online-evisa-processing-system.vercel.app/login', {
            un: user,
            pwd: hashedPassword
        }).then((res) => {
            if (res.data === '1') {
                navigate('/home');
                store.dispatch({ "type": "login", "data": { "un": user, "role": "user" } });
            }
            if (res.data === '2') {
                navigate('/sider');
                store.dispatch({ "type": "login", "data": { "un": user, "role": "emp" } });
            }
            if (res.data === '0') {
                alert("Check your credentials");
            }
        });
    }

    function handleSignup() {
        console.log('signup clicked');
        navigate('/register');
    }

    return (
        <div style={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
            <Navbar2 />
            <MDBContainer fluid className="p-3 my-5 border-red-600">
                <MDBRow className="justify-content-center align-items-center">
                    <MDBCol md="6" lg="4">
                        <div className="text-center mb-4">
                            <MDBIcon fas icon="user" className="me-2" size='2x' />
                            <br /><br /><br />
                            <MDBInput label='Your Email' id='email1' type='email' />
                        </div>
                        <div className="text-center mb-4">
                            <MDBIcon fas icon="lock" className="me-2" size='2x' />
                            <br /><br />
                            <MDBInput label='Password' id='pwd' type='password' />
                        </div>
                        <MDBBtn className="mb-4 w-100" color="primary" onClick={handleLogin}>Login</MDBBtn>
                        <MDBBtn className="mb-4 w-100" color="danger" onClick={handleSignup}>Register</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default Login;
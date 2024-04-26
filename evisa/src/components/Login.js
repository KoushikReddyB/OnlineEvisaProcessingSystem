import axios from 'axios';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Navbar2 from './Navbar2';

function Login({ store }) {
    const navigate = useNavigate();

    function handleLogin() {
        const user = document.getElementById('email1').value;
        axios.post('http://localhost:8000/login', {
            un: document.getElementById('email1').value,
            pwd: document.getElementById('pwd').value
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
                            <MDBInput label='Your Email' id='email1' type='email' />
                        </div>
                        <div className="text-center mb-4">
                            <MDBIcon fas icon="lock" className="me-2" size='2x' />
                            <MDBInput label='Password' id='pwd' type='password' />
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                            <a href="#!" className="text-decoration-none">Forgot password?</a>
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

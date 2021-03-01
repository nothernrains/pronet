import { Form, Button, Row, Col, Container, Alert } from 'react-bootstrap';
import Header from '../../components/frontend/layouts/header';
import Footer from '../../components/frontend/layouts/footer';

import { useRouter } from 'next/router';

import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Login = () => {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isValidEmail, setIsValiEmail] = useState(true);
    const [isValidPassword, setIsValiPassword] = useState(false);

    const [isLoginError, setIsLoginError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const submitForm = async (event) => {

        
        const userLogin = await axios.post(`/api/v1/users/auth`, {email, password}).catch(err => {
            setIsLoginError(true);
            setErrorMsg(err.response.data.message);
            return;
        });

        if ( userLogin?.data?.success !== undefined ) {

            const user = userLogin.data.user;
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', userLogin.data.token);
            router.replace('/browse', null);

        }

	};

    return (
        <>  
            <Header />
            <Container fluid>
                <div style={{ padding: '50px' }}>
                    <Row>
                        <Col md={{ span: 4, offset: 4 }}>
                            <h1>Login</h1>
                            <Form>

                                {
                                    isLogin && (
                                        <Alert variant='success'>Login was successfully</Alert>
                                    )
                                }

                                {
                                    isLoginError && (
                                        <Alert variant='danger'>{setErrorMsg }</Alert>
                                    )
                                }

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Enter email"
                                        value={ email }
                                        onChange={ e => {
                                            setEmail(e.target.value);
                                            setIsValiEmail(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.target.value)); 
                                        }
                                        } />
                                    {
                                        !isValidEmail &&  ( <Form.Text className="text-danger">Please provide a valid name </Form.Text> )
                                    }
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        value={ password }
                                        onChange={ e => setPassword(e.target.value) } />
                                    {
                                        !isValidEmail &&  ( <Form.Text className="text-danger">Please provide a valid name </Form.Text> )
                                    }
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember my password" />
                                </Form.Group>
                                <Button variant="primary" type="button" size="block" onClick={ e => submitForm(e) }>
                                    Login
                                </Button>

                            </Form>
                        </Col>
                    </Row>

                    <Row style={{ textAlign: 'center' }}>
                        <Col>
                            <Button variant="link" href="/auth/register">
                                Create Account
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="link" href="/auth/reset-password">
                                Forgot Password?
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Footer />
        </>
  	);
};

export default Login;
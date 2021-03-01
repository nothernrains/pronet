import { Form, Button, Row, Col, Container, Alert } from 'react-bootstrap';
import Header from '../../components/frontend/layouts/header';
import Footer from '../../components/frontend/layouts/footer';

import { useRouter } from 'next/router';

import React, { useState } from 'react';

import axios from 'axios';

const Register = () => {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isValidEmail, setIsValiEmail] = useState(true);
    const [isValidName, setIsValiName] = useState(true);
    const [isValidSurname, setIsValiSurname] = useState(true);
    const [isValidPhoneNumber, setIsValiPhoneNumber] = useState(true);
    const [isValidPassword, setIsValiPassword] = useState(false);
    const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);

    const [isAccountCreationError, setIsAccountCreationError] = useState(false);
    const [isAccountCreated, setIsAccountCreated] = useState(false);
    
    const submitForm = async (e) => {

        setIsValiName(/^[a-z\-_\s]+$/i.test(name)); 
        setIsValiSurname(/^[a-z\-_\s]+$/i.test(surname)); 
        setIsValiEmail(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)); 
        setIsValiPhoneNumber(/^0[0-9]{9}$/.test(phoneNumber)); 
        setIsValiPassword( password.length >= 4 );
        setIsValidConfirmPassword(password === confirmPassword);

        if (isValidEmail && isValidName && isValidSurname && isValidPhoneNumber && isValidPassword && isValidConfirmPassword ) {
            
            const createAccount = await axios.post(`/api/v1/users/create`, {
                name, surname, email, phoneNumber, password
            });

            setIsAccountCreated(createAccount.data.success);

            if ( createAccount.data.success ) {
                const user = createAccount.data.user;
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', createAccount.data.token);
                router.replace('/auth/package', null);
            }
        } else {
            setIsAccountCreated(false);
            setIsAccountCreationError(true);
        }

    }

    return (
        <>  
            <Header />
            <Container fluid>
                <div style={{ padding: '50px' }}>
                    <Row>
                        <Col md={{ span: 4, offset: 4 }}>
                            <h1>SETP 1: Create account</h1>
                            <Form>

                                {
                                    isAccountCreated && (
                                        <Alert variant='success'>Account created successfully</Alert>
                                    )
                                }

                                {
                                    isAccountCreationError && (
                                        <Alert variant='danger'>Something went wrong creating your account</Alert>
                                    )
                                }

                                <Form.Group controlId="frmName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter name"
                                        value={ name }
                                        onChange={ e => {
                                            setName(e.target.value) ;
                                            setIsValiName(/^[a-z\-_\s]+$/i.test(e.target.value));
                                        }
                                        } />

                                    {
                                        !isValidName &&  ( <Form.Text className="text-danger">Please provide a valid name </Form.Text> )
                                    }
                                    
                                </Form.Group>

                                <Form.Group controlId="frmSurname">
                                    <Form.Label>Surname</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter surname"
                                        value={ surname }
                                        onChange={ e => {
                                            setSurname(e.target.value);
                                            setIsValiSurname(/^[a-z\-_\s]+$/i.test(e.target.value));
                                         }
                                        } />
                                    {
                                        !isValidSurname &&  ( <Form.Text className="text-danger">Please provide a valid surname </Form.Text> )
                                    }
                                </Form.Group>

                                <Form.Group controlId="frmPhoneNumber">
                                    <Form.Label>Phone number</Form.Label>
                                    <Form.Control 
                                        type="tel" 
                                        placeholder="Enter phone number"
                                        value={ phoneNumber }
                                        onChange={ e => {
                                            setPhoneNumber(e.target.value);
                                            setIsValiPhoneNumber(/^0[0-9]{9}$/.test(e.target.value)) 
                                        }
                                        } />
                                    {
                                        !isValidPhoneNumber &&  ( <Form.Text className="text-danger">Please provide a valid phone number </Form.Text> )
                                    }
                                </Form.Group>

                                <Form.Group controlId="frmEmail">
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
                                        !isValidEmail &&  ( <Form.Text className="text-danger">Please provide a valid email </Form.Text> )
                                    }
                                </Form.Group>

                                <Form.Group controlId="frmPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Password"
                                        value={ password }
                                        onChange={ e => setPassword(e.target.value) } />

                                    {
                                        !isValidPassword &&  ( <Form.Text className="text-danger">Please provide a valid password </Form.Text> )
                                    }
                                </Form.Group>

                                
                                <Form.Group controlId="frmConfirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Confirm password"
                                        value={ confirmPassword }
                                        onChange={ e => setConfirmPassword(e.target.value) } />

                                    {
                                        !isValidConfirmPassword &&  ( <Form.Text className="text-danger">Please confirm your password </Form.Text> )
                                    }

                                </Form.Group>

                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember my password" />
                                </Form.Group>
                                <Button variant="primary" type="button" size="block" onClick={ e => submitForm(e) }>
                                    Register
                                </Button>

                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Footer />
        </>
  	);
};

export default Register;
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import Header from '../../components/frontend/layouts/header';
import Footer from '../../components/frontend/layouts/footer';

import { useRouter } from 'next/router';
import React, { useState } from 'react';

import axios from 'axios';

const Payment = () => {

    const router = useRouter();

    const [cardType, setCardType] = useState('');
    const [isCardType, setIsCardType] = useState(true);

    const [cardNumber, setCardNumber] = useState('');
    const [isCardNumber, setIsCardNumber] = useState(true);

    const [cardHolder, setCardHolder] = useState('');
    const [isCardHolder, setIsCardHolder] = useState(true);

    const [expiryMonth, setExpiryMonth] = useState('');
    const [isExpiryMonth, setIsExpiryMonth] = useState(true);

    const [expiryYear, setExpiryYear] = useState('');
    const [isExpiryYear, setIsExpiryYear] = useState(true);

    const [CVV, setCVV] = useState('');
    const [isCVV, setIsCVV] = useState(true);

    const goHome = async () => {

        setIsCardType(cardType.length === 0);
        setIsCardNumber(cardNumber.length === 0); 
        setIsCardHolder(cardHolder.length === 0); 
        setIsExpiryMonth(expiryMonth.length === 0); 
        setIsExpiryYear(expiryYear.length === 0); 
        setIsCVV(CVV.length === 0); 

        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        };

        const processPayment = await axios.post(`/api/v1/payment/process`, {
            cardNumber: cardNumber,
            cardHolder: cardHolder,
            cardExpiryMonth: expiryMonth,
            cardExpiryYear: expiryYear,
            cardCVV: CVV,
        }, config);

        if ( processPayment.data.success ) {
            router.replace('/browse', null);
        }

	};

    return (
        <>  
            <Header />
            <Container fluid>
                <div style={{ padding: '50px' }}>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <h1>SETP 3: Payment</h1>
                            <Form>

                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Card Type</Form.Label>
                                    <Form.Control as="select"
                                        value={ cardType }
                                        onChange={ e => {
                                            setCardType(e.target.value) ;
                                            setIsCardType(true);
                                        }}>
                                        <option>VISA</option>
                                        <option>MASTER</option>
                                        <option>MASTERDEBIT</option>
                                    </Form.Control>
                                    {
                                        !isCardType &&  ( <Form.Text className="text-danger">Please select your card type </Form.Text> )
                                    }
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Card Number</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter Card Number"
                                        value={ cardNumber }
                                        onChange={ e => {
                                            setCardNumber(e.target.value) ;
                                            setIsCardNumber(true);
                                        }} />
                                    {
                                        !isCardNumber &&  ( <Form.Text className="text-danger">Please provide a valid card number </Form.Text> )
                                    }
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Card Holder</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Card Holder"                                         
                                        value={ cardHolder }
                                        onChange={ e => {
                                            setCardHolder(e.target.value) ;
                                            setIsCardHolder(true);
                                        }} />
                                    {
                                        !isCardHolder &&  ( <Form.Text className="text-danger">Please provide a valid card holder </Form.Text> )
                                    }
                                </Form.Group>

                                <Row>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Expiry Month</Form.Label>
                                            <Form.Control type="text" placeholder="Enter MM"                                         
                                                value={ expiryMonth }
                                                onChange={ e => {
                                                    setExpiryMonth(e.target.value) ;
                                                    setIsExpiryMonth(true);
                                                    }} />
                                            {
                                                !isExpiryMonth &&  ( <Form.Text className="text-danger">Please provide a valid card expiry month </Form.Text> )
                                            }
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Expiry Year</Form.Label>
                                            <Form.Control type="text" placeholder="Enter YYYY"
                                              value={ expiryYear }
                                              onChange={ e => {
                                                  setExpiryYear(e.target.value) ;
                                                  setIsExpiryYear(true);
                                                  }} />
                                          {
                                              !isExpiryYear &&  ( <Form.Text className="text-danger">Please provide a valid card expiry year </Form.Text> )
                                          }
                                        </Form.Group>
                                    </Col>
                                </Row>
                                
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>CVV</Form.Label>
                                    <Form.Control type="text" placeholder="Enter CVV" />
                                    <Form.Text className="text-muted"
                                        value={ CVV }
                                        onChange={ e => {
                                            setCVV(e.target.value) ;
                                            setIsCVV(true);
                                            }} />
                                    {
                                        !isCVV &&  ( <Form.Text className="text-danger">Please provide a valid card CVV </Form.Text> )
                                    }
                                </Form.Group>

                                <Button variant="primary" type="button" size="block" onClick={ () => goHome() }>
                                    Finish
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

export default Payment;
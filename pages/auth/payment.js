import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import Header from '../../components/frontend/layouts/header';
import Footer from '../../components/frontend/layouts/footer';

import { useRouter } from 'next/router';

const Payment = () => {

    const router = useRouter();

    const goHome = () => {
        router.replace('/browse', null);
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
                                    <Form.Control as="select">
                                        <option>VISA</option>
                                        <option>MASTER</option>
                                        <option>MASTERDEBIT</option>
                                    </Form.Control>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Card Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Card Number" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Card Holder</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Card Holder" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Row>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Expiry Month</Form.Label>
                                            <Form.Control type="text" placeholder="Enter MM" />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Expiry Year</Form.Label>
                                            <Form.Control type="text" placeholder="Enter YYYY" />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>CVV</Form.Label>
                                    <Form.Control type="text" placeholder="Enter CVV" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
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
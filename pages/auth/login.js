import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import Header from '../../components/frontend/layouts/header';
import Footer from '../../components/frontend/layouts/footer';

const Login = () => {
    return (
        <>  
            <Header />
            <Container fluid>
                <div style={{ padding: '50px' }}>
                    <Row>
                        <Col md={{ span: 4, offset: 4 }}>
                            <h1>Login</h1>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember my password" />
                                </Form.Group>
                                <Button variant="primary" type="submit" size="block">
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
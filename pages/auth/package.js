import { Button, Row, Col, Container, Card, ListGroup } from 'react-bootstrap';
import Header from '../../components/frontend/layouts/header';
import Footer from '../../components/frontend/layouts/footer';

import { useRouter } from 'next/router';

const Package = () => {

    const router = useRouter();

    const gotoPackage = () => {
        router.replace('/auth/payment', null);
	};

    return (
        <>  
            <Header />
            <Container fluid>
                <div style={{ padding: '50px' }}>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <h1>STEP 2: Pick a package</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 6 }}>

                            <Card>
                                <Card.Body>
                                    <Card.Title>Standard Package</Card.Title>
                                    <Card.Text>
                                        <h1 class="card-title pricing-card-title">R39 <small class="text-muted">/ mo</small></h1>
                                        <ListGroup>
                                            <ListGroup.Item>Devices 2</ListGroup.Item>
                                            <ListGroup.Item>TV Shows unlimited</ListGroup.Item>
                                            <ListGroup.Item>Movies unlimited</ListGroup.Item>
                                            <ListGroup.Item>Support none</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Text>
                                    <Button variant="dark" size="lg" block type="button" onClick={ () => gotoPackage() }>Pick</Button>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col md={{ span: 6 }}>
                            
                            <Card>
                                <Card.Body>
                                    <Card.Title>Full Package</Card.Title>
                                    <Card.Text>
                                        <h1 class="card-title pricing-card-title">R69 <small class="text-muted">/ mo</small></h1>
                                        <ListGroup>
                                            <ListGroup.Item>Devices unlimited</ListGroup.Item>
                                            <ListGroup.Item>TV Shows unlimited</ListGroup.Item>
                                            <ListGroup.Item>Movies unlimited</ListGroup.Item>
                                            <ListGroup.Item>Support unlimited</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Text>
                                    <Button variant="dark" size="lg" block type="button" onClick={ () => gotoPackage() }>Pick</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </div>
            </Container>
            <Footer />
        </>
  	);
};

export default Package;
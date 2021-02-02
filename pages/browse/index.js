import { Button, Row, Col, Container, Card, ListGroup } from 'react-bootstrap';
import UserHeader from '../../components/frontend/layouts/userHeader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { useRouter } from 'next/router';

const UserHome = () => {

    const router = useRouter();

    const viewNormalContent = () => {
        router.replace('/browse/all', null);
    };

    const viewPGContent = () => {
        router.replace('/browse/all', null);
    };

    return (
        <>  
            <UserHeader />
            <Container fluid>
                <div style={{ padding: '50px' }}>

                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <h1>Welcome</h1>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{ span: 6 }}>

                            <Card>
                                <Card.Body style={{ textAlign: 'center' }}>
                                    <Card.Title>All Content</Card.Title>
                                    <Card.Text>
                                        <FontAwesomeIcon icon={faUser} size="4x" />
                                        <h3>All subscribed content</h3>

                                    </Card.Text>
                                    <Button variant="dark" size="lg" block onClick={ () => viewPGContent() }>Select</Button>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col md={{ span: 6 }}>
                            
                            <Card>
                                <Card.Body style={{ textAlign: 'center' }}>
                                    <Card.Title>PG Content</Card.Title>
                                    <Card.Text>
                                        <FontAwesomeIcon icon={faUser} size="4x" />
                                        <h3>Only kids content</h3>
                                    </Card.Text>
                                    <Button variant="dark" size="lg" block>Select</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </div>
            </Container>
        </>
  	);
};

export default UserHome;
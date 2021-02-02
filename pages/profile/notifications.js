import { Button, Row, Col, Container, Card, ListGroup } from 'react-bootstrap';
import UserHeader from '../../components/frontend/layouts/userHeader';
import Footer from '../../components/frontend/layouts/footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Notifications = () => {
    return (
        <>  
            <UserHeader />
            <Container fluid>
            </Container>
            <Footer />
        </>
  	);
};

export default Notifications;
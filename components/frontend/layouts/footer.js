import {Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <Container className="footer" fluid>
            <Row>
                <Col>

                    <a href="/" className="icon"><img src="/icons/logo.svg" height="20" /></a>
                
                </Col>
            </Row>
            <Row>
                <Col>

                    <h5>Support</h5>

                    <ul className="list-unstyled quick-links">
						<li><a href="#">Billing</a></li>
						<li><a href="#">Connection</a></li>
					</ul>
                
                </Col>
                <Col>

                    <h5>Privacy</h5>

                    <ul className="list-unstyled quick-links">
						<li><a href="#">T's & C's</a></li>
						<li><a href="#">Privacy</a></li>
						<li><a href="#">Security</a></li>
					</ul>
                
                </Col>
                <Col>

                    <h5>ProNet</h5>

                    <ul className="list-unstyled quick-links">
						<li><a href="#">About Us</a></li>
						<li><a href="#">Our Service</a></li>
					</ul>
                
                </Col>
            </Row>

            <Row>
                <Col>
                    <ul className="list-unstyled list-inline social text-center">
						<li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
						<li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
						<li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
						<li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
					</ul>
                </Col>
            </Row>

            <Row>
                <Col>
					<p className="h6 copy-right">
                        © <a className="text-green ml-2" href="https://pronet.com" target="_blank">ProNet </a> All right Reversed.  
                        Developed by <a className="text-green ml-2" href="http://www.northernrains.co.za/" target="_blank">Northern Rains</a></p>
                </Col>
            </Row>

        </Container>
    )
};

export default Footer;
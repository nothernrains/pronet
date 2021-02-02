import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faSearch } from '@fortawesome/free-solid-svg-icons';

const AdminHeader = () => {
    return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
      	<Navbar.Brand href="/"><img src="/icons/logo.svg" height="35" /></Navbar.Brand>
    	<Navbar.Toggle aria-controls="basic-navbar-nav" />
    	<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Link href="/browse/search"><FontAwesomeIcon icon={faSearch} /></Nav.Link>
            <Nav.Link href="/profile/notifications"><FontAwesomeIcon icon={faBell} /></Nav.Link>
            <Nav.Link href="/pofile/update"><FontAwesomeIcon icon={faUser} /></Nav.Link>
        </Nav>
		</Navbar.Collapse>
 	</Navbar>
  	);
};

export default AdminHeader;
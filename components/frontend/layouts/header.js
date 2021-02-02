import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      	<Navbar.Brand href="#home"><img src="/icons/logo.svg" height="35" /></Navbar.Brand>
    	<Navbar.Toggle aria-controls="basic-navbar-nav" />
    	<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      		<Nav className="justify-content-end" activeKey="/home">
			  	<Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
        		<Nav.Link href="/auth/register">Register</Nav.Link>
        		<Nav.Link href="/auth/login">Login</Nav.Link>
      		</Nav>
		</Navbar.Collapse>
 	</Navbar>
  	);
};

export default Header;
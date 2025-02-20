
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Tab } from 'bootstrap';
import { useSelector } from 'react-redux';
const Header = (props) => {
    const listUser = useSelector(state => state.user.listUser);


    return (

        <Navbar collapseOnSelect expand="lg" bg='light' className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown style={{ marginLeft: '50px' }} title={`${listUser.length}`} id="collapsible-nav-dropdown">
                            {listUser && listUser.length > 0 && listUser.map((item, index) => {
                                return (
                                    <NavDropdown.Item key={`user - ${index}`} href="#action/3.1">{item.email}</NavDropdown.Item>
                                )
                            })}
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
export default Header;
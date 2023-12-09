import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import "./NavBar.css"
import { Ppp } from './data/MobilePhoneList';
import { useContext, useState } from 'react';
import Toast from 'react-bootstrap/Toast';

const NavBar = () => {
    const {cartToShow, totalPrice} = useContext(Ppp);

    const [showCart, setShowCart] = useState(false);

    const changeState = ()=>{
        setShowCart((prevState)=> prevState ? false : true);        
    }
console.log("show cart", showCart);



    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
                <Container >
                    <Navbar.Brand href="/homepage">ProductShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/homepage">Home</Nav.Link>
                            <Nav.Link href="/products">Products</Nav.Link>
                            <NavDropdown title="More Info" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/contacts">
                                    Contacts Information
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/addproduct">
                                    Add product
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Button onClick={changeState}>Cart</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Toast show={showCart} >
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>{cartToShow} Price {totalPrice}</Toast.Body>
    </Toast>

        </>

    )

}

export default NavBar;
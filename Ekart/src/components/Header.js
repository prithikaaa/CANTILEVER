import React from "react";
import { Navbar, Nav,NavDropdown,Button} from 'react-bootstrap';
import { FaShoppingCart} from 'react-icons/fa';

const styles = {
    cartCount: {
        background: 'white',
        borderRadius: '50%',
        padding: '4px 5px',
        position: 'absolute',
        top:3,
        marginLeft:'19%',
      }
}
const Head = (props) => {
    let user= JSON.parse(localStorage.getItem('user-info'))
    console.warn(user)


    
    return (

 <div>
<div className="row my-5">
        
            <Navbar bg="dark" variant="dark" expand="lg" scrolling fixed="top" >
                <Navbar.Brand href="/" className="mx-3">E-Kart</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="col-md-4">
                    <Nav className="mr-auto">
                    <Nav.Link href="/" className="mx-2">Home</Nav.Link>
                    <Nav.Link href="/contact-us" className="mx-2">Contact Us</Nav.Link>
                    <Nav.Link href="/about-us" className="mx-2">About Us</Nav.Link>
                    <NavDropdown title="Category" id="basic-nav-dropdown" className="mx-2">
                        <NavDropdown.Item href="/fashion">Fashion</NavDropdown.Item>
                        <NavDropdown.Item href="/electronics">Electronics</NavDropdown.Item>
                        <NavDropdown.Item href="/grocery">Grocery</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    </div>
                    <div className="col-md-5" style={{marginLeft:"45%"}}>
                     <Nav>
                     <NavDropdown title="User">
                     <NavDropdown.Item href="/update-profile">Update Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                            <NavDropdown.Item></NavDropdown.Item>
                        </NavDropdown>
                    <Button variant="outline-light" href="/signup" className="mx-2">SignUp</Button>
                    <Button variant="outline-light" href="/login" className="mx-2" >LogIn</Button>
                    <Button variant="outline-light" href="/cart-app" className="mx-2"><FaShoppingCart /></Button>
                    <span style={styles.cartCount}>{props.count}</span>
                    </Nav>
                    
                    </div>
                
                </Navbar.Collapse>
                
                
            </Navbar>
            
        
    </div>
 </div>
   
    );
}
export default Head;

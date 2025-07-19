import React  from "react";
import { Navbar, Nav} from 'react-bootstrap';

function Admin_navbar() {
    
    return (
<div>
    {/* NAVBAR */}
 <div className="row my-5 col-md-12">
    <Navbar bg="dark" variant="dark" expand="lg" scrolling fixed="top" >
    <div className="col-md-10">
       <Navbar.Brand href="/" className="">WELCOME ADMIN</Navbar.Brand>
    </div>
    <div className="col-md-2">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="mr-auto">
         <Nav.Link href="AdminLogin" className="">SignOut</Nav.Link>
         </Nav>
         </Navbar.Collapse>
     </div>
    </Navbar>
</div>
</div>
    );
}
export default Admin_navbar;
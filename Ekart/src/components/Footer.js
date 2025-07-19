import React from "react";
import './fashion/fashion.css';

function footer(){
   
     
return(

<footer id="footer" className="bg-light mt-5">
    <div className="empty-container"></div>
    <div className="container" ><hr></hr></div>
    <div className="container-fluid bg-light">
        <div className="row mx-2">
        <div className="col-md-3">
        <dl>
        <dd><h5><b>Store</b></h5></dd>
        <dd><h2><a href="/"className="linkStyle">E-Kart</a></h2></dd>
        <dd>888 - 963 - 600</dd>
        <dd>info@example.com</dd>
        </dl>
        </div>
        <div className="col-md-3">
        <dl>
        <dd><h6><b>Info</b></h6></dd>
        <dd><a href="/" className="linkStyle">Home</a></dd>
        <dd><a  href="/about-us" className="linkStyle">About Us</a></dd>
        <dd><a  href="/contact-us" className="linkStyle">Contact Us</a></dd>
        </dl>
        </div>
        <div className="col-md-3">
        <dl>
        <dd><h6><b>Our Polices</b></h6></dd>
        <dd>FAQs</dd>
        <dd>Privacy Policy</dd>
        <dd>Refund Policy</dd>
        <dd>Terms of Service</dd>
        </dl>
        </div>
        <div className="col-md-3">
        <dl>
        <dd><h6><b>Social Network</b></h6></dd>
        <dd>Facebook</dd>
        <dd>Twitter</dd>
        <dd>Instagram</dd>
        <dd>Linkedin</dd>
        </dl>
        </div>
        </div>
    </div>
</footer>
);
}
export default footer;
import React from "react";
import Header from "../Header"
import fashion1 from '../../assets/fashion1.jpg'
import fashion2 from '../../assets/fashion2.jpg'
import './fashion.css';
import Footer from '../Footer'
function Fashion() {
    return(
    <div style={{backgroundColor:" #e1e5ea"}}>
       <Header />
       <br></br>
       <div className="container">
        <div className="row col-md-12">

               <div className="col-md-6 small-container">
               <img src={fashion1} className="img-fluid women-image" alt="women" style={{ objectFit:"cover"}}/>
               <div className="middle">
               <a href="/product?category=Fashion"><button className="text">Women</button></a>
               </div>
              </div>
             
              <div className=" col-md-6 small-container">
              <img src={fashion2} alt="men" className="img-fluid men-image" style={{ objectFit:"cover"}}/>
              <div className="middle">
              <a href="/product?category=Fashion"><button className="text">Men</button></a>
               </div>
              </div>
       </div>
       </div> 
       <Footer />
    </div>
    );
}
export default Fashion;
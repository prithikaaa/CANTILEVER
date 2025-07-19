import React from 'react'
import './grocery.css'
import Header from '../Header'
import Footer from '../Footer'



function Grocery() {
  return (
   <>
   <div style={{backgroundColor:" #e1e5ea"}}>
    <Header />
    <div className="grocery">
    <div className="shop">
    <a href="/product?category=Grocery">
    <button type="button" class="btn btn-dark">Shop Now!!</button>
    </a>
    </div>
   </div>   
     <Footer />
     </div>
     </>
     ); 
  }
export default Grocery;
import './Dashboard.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import im1 from '../../assets/img1.jpg'
import im2 from '../../assets/img2.jpg'
import im3 from '../../assets/img3.jpg'
import im4 from '../../assets/img4.jpg'
import Header from '../Header'
import Footer from '../Footer'

import { FaTruck} from 'react-icons/fa';
import {FaLifeRing} from 'react-icons/fa';
import {FaCreditCard} from 'react-icons/fa';
import {FaReply} from 'react-icons/fa';

import ban1 from '../../assets/ban1.jpg'
import ban2 from '../../assets/ban2.jpg'
import ban3 from '../../assets/ban3.jpg'
import ban4 from '../../assets/ban4.jpg'
import ban5 from '../../assets/ban5.jpg'



function App() {
  return (
    <div className="App" style={{backgroundColor:" #e1e5ea"}}>
     
      <Header />
      {/* CROUSEL */}
      <AliceCarousel autoPlay="true" autoPlayInterval="2000" disableButtonsControls="true" disableDotsControls="true" infinite>
      <img src={im1}alt="Slider1" className="sliderimg"/>
      <img src={im2} alt="Slider2"className="sliderimg"/>
      <img src={im3}alt="Slider3" className="sliderimg"/>
      <img src={im4}alt="Slider4" className="sliderimg"/>
      </AliceCarousel>
       <br></br>
      {/* INFO BOX  */}
       <div className="container-fluid bg-light">
       <div className="row">
         <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 info-box">
           <div className="block"><FaTruck /></div>
           <div><h4>Free Shipping</h4><p>We provide free shipping for all order over $200.00</p></div>
         </div>
         <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 info-box">
           <div className="block"><FaLifeRing /></div>
           <div><h4>Support 24/7</h4><p>We provide support to our customers 24 hours.</p></div>
         </div>
         <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 info-box">
           <div className="block"><FaCreditCard /></div>
           <div><h4>Safe Payment</h4><p>We provide always safe payment methods.</p></div>
         </div>
         <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 info-box">
           <div className="block"><FaReply /></div>
           <div><h4>Returns</h4><p>We provide always safe payment methods.</p></div>
         </div>
       </div>
       </div>
       <br></br>
       {/* BANNER CONTENT */}
       <section className="banner-content">
         <div className="container-fluid">
           <div className="row">
           <div className=" col-lg-3">
           <figure className="small-container"><img src={ban1} alt="products1" className="img-fluid image" style={{ objectFit:"cover"}}/>
           <div className="textPosition">
           <div className="content">Vibrant Colors</div><div className="small-content">Great Deals</div>
          </div>
          </figure>
           <figure className="small-container"><img src={ban2} alt="products2"className="img-fluid image" style={{ objectFit:"cover"}}/>
           <div className="textPosition">
           <div className="content">New Collection</div><div className="small-content">Best Match</div>
          </div>
           </figure>
           </div>
           <div className="col-lg-6"><figure className="small-container"><img src={ban3}alt="products3" className="img-fluid center-image" style={{ objectFit:"cover"}}/>
           <div className="textPosition">
           <div className="content">Update yourself with the Latest Technology</div><div className="small-content">Latest Tends
           <br></br><a href="/product"><button className="buy-btn">Buy Now</button></a></div>
           
           </div>
           </figure></div>
           <div className=" col-lg-3 ">
           <figure className="small-container"><img src={ban4}alt="products4" className="img-fluid image" style={{ objectFit:"cover"}}/>
           <div className="textPosition">
           <div className="content">Fresh Stock</div><div className="small-content">Choose the best</div>
           </div>
           </figure>
           <figure className="small-container"><img src={ban5}alt="products5" className="img-fluid image" style={{ objectFit:"cover"}}/>
           <div className="textPosition">
           <div className="content">Brand New Products</div><div className="small-content">Best Variety</div>
          </div>
           </figure>
           </div>
           </div>
         </div>

       </section>
      <Footer />
    </div>
  );
}

export default App;

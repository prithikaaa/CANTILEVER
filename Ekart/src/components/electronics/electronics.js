import '../dashboard/Dashboard.css';
import './electronics.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import im5 from '../../assets/img5.jpg'
import ipads from '../../assets/ipads.jpg'
import houseitem from '../../assets/houseitem.jpg'
import industryitem from '../../assets/industryitem.jpg'
import diwali from '../../assets/diwali.jpg'
import img6 from '../../assets/img6.jpg'
import Header from '../Header'
import Footer from '../Footer'


function Electronics() {
    return (
        <>
        <div className="App" style={{backgroundColor:" #e1e5ea"}}>

            <Header />
            <div className="crousel">
                <AliceCarousel autoPlay="true" autoPlayInterval="900" disableButtonsControls="true" disableDotsControls="true" infinite >
                <img src={diwali} alt="Slider5"className="sliderimg" />
                <img src={img6} alt="Slider6"className="sliderimg" />
                <img src={im5} alt="Slider7"className="sliderimg" />
                <img src={ipads}alt="Slider8" className="sliderimg" />
                    
                    
                </AliceCarousel>
            </div>
            <div className="categories">
                <a href="/product?category=Electronics">
                    <img src={houseitem} className="images" alt="householdimg"></img>
                </a>

                <a href="/product?category=Electronics">
                    <img src={industryitem} className="images" alt="industrialimg"></img>
                </a>
            </div>
          
        </div>
        <Footer />
        </>
    );
}

export default Electronics;
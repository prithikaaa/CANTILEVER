import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './AboutUs.css'

export default function AboutUs() {
    return (
        <>
        <div style={{backgroundColor:" #e1e5ea"}}>
        <Header />
  <div>
        <div className="about-section">
        <h1>About Us Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices libero neque, sit amet facilisis felis viverra ornare. Maecenas varius neque sed hendrerit gravida. Vestibulum molestie nulla in eleifend tincidunt. Pellentesque et felis nec tellus aliquam molestie. Fusce euismod porttitor leo commodo mattis. Ut cursus, orci at gravida euismod, tellus justo venenatis mauris, nec accumsan dolor diam id sem. Etiam orci metus, tempus in eleifend vitae, aliquam quis erat. Aliquam rhoncus ante sit amet felis fringilla egestas. Praesent pellentesque eget arcu eget finibus. Integer id mauris ligula. Sed ac malesuada velit. Donec et nibh mauris. Curabitur in diam purus. Nam aliquet magna ac leo cursus, suscipit molestie leo finibus.

Nulla ut metus arcu. Sed aliquam ante id lectus fermentum faucibus. Pellentesque semper, lectus aliquam pellentesque vulputate, mi enim aliquet sapien, at euismod dui tellus vitae tellus. Suspendisse scelerisque nisi sit amet nibh varius dignissim. Aliquam sit amet malesuada erat. Phasellus ullamcorper lorem vel imperdiet auctor. Cras maximus auctor nisi sit amet mattis. In ultricies, ligula et efficitur ornare, arcu ante elementum enim, ut aliquam massa tortor quis erat. Quisque volutpat aliquam volutpat. Sed in risus pellentesque, pellentesque ligula quis, auctor sapien. Nam aliquet ultrices magna, non aliquam neque vestibulum ut. Morbi sit amet sagittis dolor, sit amet dictum lectus.

Ut non blandit erat, mollis sollicitudin libero. Suspendisse ornare arcu ut tincidunt lacinia. Ut mi est, mollis in vehicula quis, ultricies ut nisl. Duis viverra, nunc sed accumsan dictum, ante libero bibendum orci, a lobortis nibh tellus vitae risus. Nam posuere sollicitudin ex, ac finibus nulla convallis a. Aliquam a hendrerit nisl, nec blandit turpis. Etiam sit amet ligula rhoncus, gravida erat sed, consectetur magna.
</p>
        </div>
    <h2 className="heading">Our Team</h2>
      <div className="row">
         <div className="col-md-4"> 
            <div className="card">
              <div className="pic"><img src="https://image000.flaticon.com/png/512/1946/1946429.png" alt="John" className="image-fluid our-image"/></div>
              <div className="container">
                <h2>Nupur Gupta</h2>
                {/* <p className="title">CEO &amp; Founder</p> */}
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p><a className="sendMailLink" href = "mailto: nupur2000gupta@gmail.com"><button className="sendMail">Send Mail</button></a></p>
              </div>
            </div>
          </div>
          <div className="col-md-4"> 
            <div className="card">
            <div className="pic"><img src="https://image000.flaticon.com/png/512/1946/1946429.png" alt="John" className="image-fluid our-image"/></div>
              <div className="container">
                <h2>Muskan Kohli</h2>
                {/* <p className="title">CEO &amp; Founder</p> */}
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p><a className="sendMailLink" href = "mailto: muskankohli2000@gmail.com"><button className="sendMail">Send Mail</button></a></p>
              </div>
            </div>
          </div>
          <div className="col-md-4"> 
            <div className="card">
            <div className="pic"><img src="https://image000.flaticon.com/png/512/1946/1946429.png" alt="John" className="image-fluid our-image"/></div>
              <div className="container">
                <h2>Suryansh Gupta</h2>
                {/* <p className="title">CEO &amp; Founder</p> */}
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p><a className="sendMailLink" href = "mailto:guptasuryansh.2301@gmail.com"><button className="sendMail">Send Mail</button></a></p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
         <div className="col-md-4"> 
            <div className="card">
            <div className="pic"><img src="https://image000.flaticon.com/png/512/1946/1946429.png" alt="John" className="image-fluid our-image"/></div>
              <div className="container">
                <h2>Jaskiran Malhotra</h2>
                {/* <p className="title">CEO &amp; Founder</p> */}
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p><a className="sendMailLink" href = "mailto: jaskiranmalhotra216@gmail.com"><button className="sendMail">Send Mail</button></a></p>
              </div>
            </div>
          </div>
          <div className="col-md-4"> 
            <div className="card">
            <div className="pic"><img src="https://image000.flaticon.com/png/512/1946/1946429.png" alt="John" className="image-fluid our-image"/></div>
              <div className="container">
                <h2>Sargam Raju</h2>
                {/* <p className="title">CEO &amp; Founder</p> */}
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p><a className="sendMailLink" href = "mailto: sargamraju111@gmail.com"><button className="sendMail">Send Mail</button></a></p>
              </div>
            </div>
          </div>
        </div>

  </div>
  <Footer />
  </div>
        </>
      );
}

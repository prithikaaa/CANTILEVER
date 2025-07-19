import React,{ useState } from 'react'
import { Form, Button, Container, Row ,Col } from "react-bootstrap"
import Header from './Header'
import {db} from '../firebase'
import Footer from './Footer'

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

    return (
        <>
        <div style={{backgroundColor:" #e1e5ea"}}>
        <Header />
        <Container>
        <Row>
          <h2 className="text-center mt-5">Contact Us</h2>
          </Row>
          <Row>
          <Col>
          <p className="mt-5" style={{ padding :'0em 5em 0em 5em'}}>
            We are here to answer any questions you may have about the products.
            If you have any questions, please feel free to drop a message by just 
            filling the contact us form and we will answer you as soon as possible.
            We are here to answer any questions you may have about the products.
            If you have any questions, please feel free to drop a message by just 
            filling the contact us form and we will answer you as soon as possible.
            We are here to answer any questions you may have about the products.
            If you have any questions, please feel free to drop a message by just 
            filling the contact us form and we will answer you as soon as possible.
             </p>
             </Col>
             <Col>
          <Form className="mt-5" onSubmit={handleSubmit}>
            <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text"  required placeholder="Enter Name"  value={name}
        onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email"  required placeholder="Enter Email" value={email}
        onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group id="message">
              <Form.Label>Email</Form.Label>
              <Form.Control as="textarea" rows="3" required placeholder="Type a message" value={message}
        onChange={(e) => setMessage(e.target.value)}/>
            </Form.Group>
            <Button  className="w-100 mt-3"  style={{ background: loader ? 'afb9c8' : '#34656d' }} type="submit">
              Submit
            </Button>
            </Form>
            </Col>
            </Row>
            </Container>
            <Footer />
            </div>
        </>
    )
}
export default ContactUs;
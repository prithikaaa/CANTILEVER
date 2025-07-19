import React, { useRef, useState} from "react"
import { Form, Button, Card} from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      alert("Failed to log in");
    }
    setLoading(false)
  }
  
 
 

  return (
    <>
    <Header />
    
      <Card className="align-items-center " style={{ height: '55vh',width:"50vw", marginLeft:"25%" }} >
        <Card.Body >
          <h2 className="text-center mb-4">Log In</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required placeholder="Enter Email"/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required placeholder="Enter Password" />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-2" type="submit">
              Log In
            </Button>
            <Link to="/AdminLogin">
            <Button disabled={loading} className="w-100 mt-2" type="submit">
              Log In As Admin
            </Button></Link>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
        </Card.Body>
      </Card>
      <Footer />
    </>
  );
}
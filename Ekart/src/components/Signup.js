import React, { useRef, useState } from "react"
import { Form, Button, Card } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return alert("Passwords do not match")
    }

    try {
      
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      alert("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
     <Header />
      <Card className="align-items-center shadow-lg mt-lg-5 mt-sm-5 mt-md-5" style={{ height: '55vh',width:"50vw", marginLeft:"25%" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required placeholder="Enter Email" />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required placeholder="Min Length 6 characters" />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required placeholder="Min Length 6 characters"/>
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-2" type="submit">
              Sign Up
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
        </Card.Body>
      </Card>
      <Footer />
    </>
  )
}
 import React, { useState } from "react"
import { Button} from "react-bootstrap"

import { useHistory } from "react-router-dom"
import './AdminLogin.css'
import Header from '../Header'
import firebase from "firebase/app"



export default function Login() {
 
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(user) {
    //e.preventDefault()

    try {
      setError("")
      setLoading(true)
      
      history.push("/Admin_product")
    } 
    catch {
      alert("Failed to log in")
    }

    setLoading(false)
  }

  var onSubmit = (e) => {
    e.preventDefault();
    
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {fb.auth.OAuthCredential} */
     
      var user = result.user;
      
      console.log(user.email+" "+ user.uid);
      return user;
      // ...
    })
    .then((user) => {
      handleSubmit(user)

    })
    .catch((error) => {
    console.log(error +"hello");
    });

  }
  

  return (
    <>
    <Header />
     <div className="abc">
     
            <Button disabled={loading} className="admin-btn mt-2 btn-light" type="submit"  onClick={onSubmit}>
              Login with Google
            </Button>
          
      </div>
    </>
  )
}

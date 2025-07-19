import React from "react"
import { Button} from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"

function Dashboard() {
  const { logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    try {
      await logout()
      history.push("/")
      alert("You are Logged Out")
    } catch {
      alert("Failed to log out")
    }
  }

  return (
    <>
     <div className=" text-center " style={{ marginTop:'20%' }}>
         <h3>Are you sure you want to logout</h3>
        <Button  onClick={handleLogout} className="mx-3">
          Yes
        </Button>
        <Button  href="/">
        No
        </Button>
      </div>
    </>
  )
}
export default Dashboard;
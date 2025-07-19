import React from 'react'
import { Button} from "react-bootstrap"

function Checkout() 
{
    return (
        <>
         <div className=" text-center " style={{ marginTop:'20%' }}>
             <h3>Your payment is successful!!</h3>
            <Button  href="/" className="btn-success">
              Done
            </Button>
        </div>
        </>
      )
}
export default Checkout;
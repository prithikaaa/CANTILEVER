
import React from "react"
import Signup from "./Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./dashboard/Dashboard"
import Login from "./Login"
import Logout from "./Logout"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Fashion from "./fashion/Fashion"
import AboutUs from "./aboutUs/AboutUs"
import ContactUs from "./ContactUs"
import Admin_product from"./Admin/Admin_product"
import Admin_contact from"./Admin/Admin_contact"
import Grocery from "./grocery/grocery" 
import Electronics from "./electronics/electronics.js"   
import Cart from "./Cart/CartApp"
import Product from"./Product/Product"
import ProductUi from"./Product/ProductUi"
import AdminLogin from "./Admin/AdminLogin.js"
import Checkout from"./Checkout"


function App() {
  return (
    
      <div className="w-100 h-100" style={{ maxWidth: "100%"}}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route className="w-50" path="/signup" component={Signup} />
              <Route className="w-50" path="/login" component={Login} />
              <Route className="w-50" path="/forgot-password" component={ForgotPassword} />
              <Route className="w-50" path="/fashion" component={Fashion} />
              <Route className="w-50" path="/about-us" component={AboutUs} />
              <Route className="w-50" path="/contact-us" component={ContactUs} />
              <Route className="w-50" path="/grocery" component={Grocery} />
              <Route className="w-50" path="/electronics" component={Electronics} />
              <Route className="w-50" path="/Admin_product" component={Admin_product} />
              <Route className="w-50" path="/Admin_contact" component={Admin_contact} />
              <Route className="w-50" path="/cart-app" component={Cart} />
              <Route className="w-50" path="/product" component={Product} />
              <Route className="w-50" path="/product-ui" component={ProductUi} />
              <Route className="w-50" path="/AdminLogin" component={AdminLogin} />
              <Route className="w-50" path="/logout" component={Logout} />
              <PrivateRoute className="w-50" path="/checkout" component={Checkout} />

            </Switch>
          </AuthProvider>
          
        </Router>
      </div>
      
  )
}

export default App
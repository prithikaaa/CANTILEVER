import React from 'react';
import Cart from './Cart';
// import Navbar from './Navbar';
import firebase from 'firebase'
import Header from '../../components/Header'
import { FaArrowRight } from "react-icons/fa";
import "./cart.css"

class CartApp extends React.Component {
  //used to define our components default state
  constructor() {
    super();
    this.state = {
      cart: [],
      loading: true,
    };
    //binded
    this.db = firebase.firestore();
  }

  //it is called only once in a lifecycle after component is rendered first time
  //it is used to make calls to api
  //we fetched data here so that it will called just after our app is mounted
  componentDidMount() {
    //metod chaining is used here to make code short
    //we have added onSnapshot eventlistener provided by firebase
    //inorder to auto referesh the app using setstate
    //onSnapshot is called whenever something changes in firebase collection
    this.db.collection("cart").onSnapshot(snapshot => {
      //Query snapshot has a property docs which is an array
      //iterating through docs
      const cart = snapshot.docs.map(doc => {
        const data = doc.data();
        //data storing documen key
        data["id"] = doc.id;
        return data;
      });
      //here we setstate so that after fetching the data browser will
      //rerender and show data
      this.setState({ cart: cart, loading: false });
    });
  }

  //function to increase the quantity of product
  //We will pass this as props to cart
  handleIncreaseQuantity = product => {
    const { cart } = this.state;
    const index = cart.indexOf(product);

   //reference of the document
    const docRef = this.db.collection("cart").doc(cart[index].id);

    //here as we update the data on firebase then onSnapshot in componentDidMount
    // will be called and will referesh the data inbrowser
    docRef
      .update({ qty: cart[index].qty + 1 })
      .then(() => {
        console.log("Document updated sucessfully");
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleDecreaseQuantity = product => {
    const { cart } = this.state;
    const index = cart.indexOf(product);

    if (cart[index].qty === 0) {
      return;
    }
   
    const docRef = this.db.collection("cart").doc(cart[index].id);

    docRef
      .update({ qty: cart[index].qty - 1 })
      .then(() => {
        console.log("Document updated sucessfully");
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleDeleteProduct = id => {

    const docRef = this.db.collection("cart").doc(id);

    docRef
    .delete()
    .then(() => {
      console.log("Deleted sucessfully");
    })
    .catch(error => {
      console.log(error);
    });
  };

  getcountOfCartItems = () => {
    const { cart } = this.state;
    let count = 0;

    cart.forEach(product => {
      count += product.qty;
    });

    return count;
  };

  getcartTotal = () => {
    const { cart } = this.state;
    let cartTotal = 0;

    cart.map(product => {
      if (product.qty > 0) {
        cartTotal = cartTotal + product.qty * product.price;
      }
      return "";
    });

    return cartTotal;
  };

  addProduct = () => {
    this.db
      .collection("cart")
      .add({
        img: "",
        price: 900,
        qty: 3,
        title: "Washing Machine"
      })
      //docref is refernce of above object
      .then(docRef => {
        docRef.get().then(snapshot => {
          console.log("Product has been added", snapshot.data());
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    //getting products from state
    const { cart, loading } = this.state;
    return (
      <div className="App">
       {/* passing prop count to navbar component */}
        <Header  count={this.getcountOfCartItems()}/>
       
        {loading && <h1>Loading Products...</h1>}
        <div className="row col-md-12 my-4 container-fluid">
        <div className="col-md-7">
          {/* passing all the components to cart via props */}
        <Cart
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          cart={cart}
        />
        </div>
        <div className="col-md-5">
        <div className="cart-div" style={{ padding: 30, fontSize: 20, marginLeft:"50px",marginRight:"30px"}}>
        <div className="bg-white" style={{padding:"9px",marginTop:"10px",marginBottom:"10px"}}><h3>The Total Amount</h3></div>
        <div className="bg-white" style={{padding:"5px",fontWeight:"15"}}>Temporary Amount<span className="mx-5">${this.getcartTotal()}</span></div>
        <div className="bg-white" style={{padding:"5px",fontWeight:"15"}}>Shipping Cost Added<span className="mx-5" >$0</span></div>
        <hr></hr>
         <div className="bg-white" style={{padding:"9px",marginTop:"8px"}}>The Total Amount<span className="mx-5" >${this.getcartTotal()}</span></div>
         <br></br>
         <a  href="/checkout"><button className="w-50 mx-2 mb-1 checkout-btn">Checkout</button></a>
         <br></br>
         <p className="mx-2 mb-1 mb-4 mt-3" style={{fontSize:"18px",marginTop:"10px"}}><a href="/product" style={{textDecoration:"none",color:"black"}}>Continue Shopping</a>
         <FaArrowRight style={{marginLeft:"5px"}}/></p>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default CartApp;


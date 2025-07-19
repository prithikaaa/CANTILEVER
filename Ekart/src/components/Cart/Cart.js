import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
  //we are recieving data here in constant called products using props from app.js
  const { cart } = props;
  return (
    <div className="cart">
      {/* //iterating through cart// */}
      {cart.map((product) => {
        return (
          <CartItem
          //we are passing props to cartItem
            product={product}
            //react does not know how to differentiate btw 
            //different products so we pass a key it's a unique key
            key={product.id}
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            onDeleteProduct={props.onDeleteProduct}
          />
        )
      })}
    </div>
  );
}

export default Cart;

//Cart is the list of cart items
//we can pass any item to our child cartItem using props
//props can be passed by specifying attributes
//We can pass fuctions via props as well

//Here we are sending each product as props to our cartItem
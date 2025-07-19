import React from 'react';
import './cart.css'
import { HiPlus,HiMinusSm,HiHeart } from "react-icons/hi";
import { FaTrashAlt } from "react-icons/fa";
//recieving props from cart
//every instance of cartItem have a property called props
const CartItem = (props) => {
  //product is an object with propertirs named price, title, qty
  const { price, title, qty } = props.product;
  //we recieve following properties via props
  const {
    product,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteProduct
  } = props;
  return (
    
    <div className="cart-item cart-div ">
      <div className="left-block ">
        <img className="cart-img my-3" style={styles.image} src={product.img} alt="Product" />
      </div>
      <div className="right-block w-100">
        <div className="my-3"  style={ { fontSize: 25 } }>
         <div className="">{title}</div>
        </div>
        <div className="my-2" style={ {fontSize:"20px"} }>Price: ${price} </div>

        {/* Quantity Buttons */}
        <div className=" mb-1 mt-1 d-flex" style={{textAlign:"center",fontSize:"20px"}}>
        {/* product is sent to onIncreaseQuantity in cart via props */}
         <div className="" style={{borderLeft:"1px solid rgb(185, 183, 183)",borderTop:"1px solid rgb(185, 183, 183)",borderBottom:"1px solid rgb(185, 183, 183)",borderRadius:"7px 0px 0px 7px"}} ><HiPlus className="action-icons"  onClick={() => onIncreaseQuantity(product)}/> </div>
         <div className=""  style={{borderLeft:"1px solid rgb(185, 183, 183)",borderTop:"1px solid rgb(185, 183, 183)",borderBottom:"1px solid rgb(185, 183, 183)",borderRight:"1px solid rgb(185, 183, 183)",padding:"0px 7px 0px 7px"}}>{qty}</div>
         <div className="" style={{borderTop:"1px solid rgb(185, 183, 183)",borderBottom:"1px solid rgb(185, 183, 183)",borderRight:"1px solid rgb(185, 183, 183)",borderRadius:"0px 7px 7px 0px"}}><HiMinusSm  className="action-icons" onClick={() => onDecreaseQuantity(product)} /></div>

          </div>
          

        <div className="cart-item-actions d-flex">
          {/* Delete Button */}
          <div className="cart-delete">
          <FaTrashAlt className="action-icons" style={{height:"18px",width:"18px"}} onClick={() => onDeleteProduct(product.id)} />REMOVE ITEM</div>
          <div className="cart-wishlist">
          <HiHeart className="action-icons" style={{width:"23px"}}/>MOVE TO WHISHLIST</div>
        </div>
      </div>
    </div>
    
  );
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#777'
  }
}

export default CartItem;
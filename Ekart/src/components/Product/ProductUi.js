import React from 'react'
import './Product.css'
import { FaStar, FaRegHeart, FaShoppingCart, FaInfoCircle } from 'react-icons/fa';
import sendData from './SendData'


const ProductUi = (props) => {
  const { product } = props;
return (
  
  <>
    <div className="row mb-4 product-div">
      <div className="col-md-5 col-lg-3 col-xl-3">
        <div className=" product-img-div">
          <img alt={product.name} className="img-responsive product-img img-fluid" src={product.img} />
        </div>
      </div>
      <div className="col-md-7 col-lg-9 col-xl-9">
        <div className="row">
          <div className="col-lg-7 col-xl-7 product-body">
            <h5 className="mt-4 mb-3">{product.title}</h5>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            <hr></hr>
            <p className="mb-3">{product.desc}
            </p>
          </div>
          <div className="col-lg-5 col-xl-5  product-footer">
            <h5 className="mb-3 mt-4"><span>Price: ${product.price}</span></h5>
            <div className="my-4">
              <button className=" mx-2 mb-1 addtocart-btn" onClick = {() => sendData(product)}>
                <FaShoppingCart style={{ marginRight: "6px" }}/>Add to cart</button>
              <button className=" mx-2 mb-1 detail-btn">
                <FaInfoCircle style={{ marginRight: "6px" }} />Details</button>
            </div>
            <button className="px-3 mb-3 mx-2 heart-btn" >
              <FaRegHeart style={{ backgroundColor: "" }} /></button>
          </div>

        </div>
      </div>
    </div>
  </>
);
}
export default ProductUi;

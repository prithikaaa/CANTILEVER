import React from 'react'
import ProductUi from'./ProductUi'

const  ProductList=(props) =>
{
   const { products } = props;
    return (
      
        <div className="productList">
        {
        products.map((product) =>  {
         return(
            <ProductUi
              key={product.key}
              product={product}
              category={product.category} 
              name={product.title}
              price={product.price} 
              qty={product.qty} 
              img={product.img}
            />
          )
        })}
      </div>
    );
}
export default ProductList;
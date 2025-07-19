import React from 'react'
import { Form} from 'react-bootstrap';
import Header from '../Header' //header imported
import Footer from '../Footer' //footer imported
import ProductList from'./ProductList'
import {db} from '../../firebase'
import './Product.css' //css for product page imported
import Collapse from 'react-bootstrap/Collapse'
// React icons are imported
import { RiArrowDownSLine } from "react-icons/ri";
import { IoShirtOutline,IoFastFoodOutline } from "react-icons/io5";
import { GoDeviceDesktop } from "react-icons/go";
import banner1 from '../../assets/banner1.jpg' // Images are imported from assets  


class Product extends React.Component  
{
  constructor() {
		super();
		this.state = {
			products: [],
			openCollection: true,
			open: true,
			openBrand: true,
			category: window?.location?.search?.split('?category=')?.[1],
      loading: true,
		};
	}

	// DidMount Function used here to display products and params are used to filter data
	componentDidMount() {
		db.collection('products').onSnapshot((snapshot) => {
			const products = this.state.category
				? snapshot.docs
						.map((doc) => {
							const data = doc.data();
							return data;
						})
						.filter((item) => item.category === this.state.category)
				: snapshot.docs.map((doc) => {
						const data = doc.data();
						return data;
				  });
			this.setState({ products: products ,loading:false });
		});
	}
      
      
    render()
    {
        const { products ,loading} = this.state;
        const { openCollection,open,openBrand } = this.state; // used for collapse in collection,price & brand section 
        
    return(
<div>

    {/* Header is imported from Header.js */}
     <Header /> 
     
      <div className="row col-md-12">
          <div className="col-md-3">
            {/* Product Menu */}
              <div className="bg-white product-menu container">
                   {/* Menu Heading */}
                  <div className="pro-menu-head mb-4 pt-4 pb-3"><h2><i> Shop Page </i></h2></div> 
                   <div className="pro-collection">

                     {/* Categories section */}

                    <div style={{textAlign:"left"}} className="my-2 mx-5"><h4><button style={{border:"none",backgroundColor:"white"}} onClick={() => this.setState({ openCollection: !openCollection })} 
                    aria-expanded={openCollection}>Categories<RiArrowDownSLine className="" style={{textAlign:"right"}}/></button></h4></div><hr></hr>
                    <div className="mb-3" >
                    <Collapse in={this.state.openCollection}>
                    <ul style={{listStyleType:"none",textAlign:"left",marginLeft:"35px",marginBottom:"30px"}}> 
                      <li><a href="/product?category=Fashion" style={{textDecoration: "none",color: "black"}}>Fashion </a><IoShirtOutline className="mx-2" /></li>
                      <li><a href="/product?category=Electronics"style={{textDecoration: "none",color: "black"}}>Electronics</a><GoDeviceDesktop className="mx-2" /></li>
                      <li><a href="/product?category=Grocery" style={{textDecoration: "none",color: "black"}}>Grocery</a><IoFastFoodOutline className="mx-2"/></li>
                    </ul>
                    </Collapse>
                    </div>
                  </div>

                   {/* Price Section */}

                  <div className="pro-price ">
                    <div style={{textAlign:"left"}} className="my-2 mx-5"><h4><button style={{border:"none",backgroundColor:"white"}} onClick={() => this.setState({ open: !open })} 
                    aria-expanded={open}>Price<RiArrowDownSLine className=""/></button></h4></div><hr></hr>
                    <div className="mb-3" >
                    <Collapse in={this.state.open}>
                    <ul style={{listStyleType:"none",textAlign:"left",marginLeft:"35px",marginBottom:"30px"}}> 
                      <li>$10 - $100</li>
                      <li>$100 - $200</li>
                      <li>$200 - $300</li>
                    </ul>
                    </Collapse>
                    </div>
                  </div>

                  {/* Brand Section */}

                  <div className="pro-brand ">
                    <div style={{textAlign:"left"}} className="my-2 mx-5"><h4><button style={{border:"none",backgroundColor:"white"}} onClick={() => this.setState({ openBrand: !openBrand })} 
                    aria-expanded={openBrand}>Brand<RiArrowDownSLine style={{}}/></button></h4></div><hr></hr>
                    <div className="mb-3" >
                    <Collapse in={this.state.openBrand}>
                    <ul style={{listStyleType:"none",textAlign:"left",marginLeft:"35px",marginBottom:"30px"}}> 
                     <Form.Check type="checkbox" label="Balenciaga"/>
                     <Form.Check type="checkbox" label="Adidas" />
                     <Form.Check type="checkbox" label="Givenchy" />
                     <Form.Check type="checkbox" label="Samsung" />
                    </ul>
                    </Collapse>
                    </div>
                  </div>

                  {/* Image in menu */}

                  <div>
                    <img src={banner1}alt="banner" style={{width:"95%",height:"100%",marginBottom:"30px",marginTop:"30px",borderRadius:"10px"}}/>
                  </div>

              </div>
         </div>
          <div className="col-md-9">
          <div className="mx-2">
          {loading && <h3>Loading Products...</h3>}
            {/* ProductList is imported here */}
            {/* we are passing props to ProductList */}
          <ProductList products={products} />  
          </div>
          </div>
    </div>

         {/* Footer is imported from Footer.js */}

        <Footer />
</div>
    );
   }
}
export default Product
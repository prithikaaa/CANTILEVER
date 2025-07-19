import React ,{useState,useEffect} from "react"
import {Table,Modal,Button,Form} from 'react-bootstrap';
import "./Admin_home.css"
import {db} from '../../firebase'
import Admin_navbar from './Admin_navbar'


function Example() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [lgShow, setLgShow] = useState(false);


  const [key, setKey] = useState("");
  const [category, setCategory] = useState("");
  const [title, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [desc, setDesc] = useState("");
  const [img,setImg] =useState("");
  const [loader, setLoader] = useState(false);

  // Edit Product
  const [editKey, setEditKey] = useState(null);
  const [editPrice, setEditPrice] = useState(price);
  const [editQty, setEditQty] = useState(qty);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("products")
      .add({
        key:key,
        category:category,
        title:title,
        price:price,
        qty:qty,
        desc:desc,
        img:img,
      })
      .then(() => {
        handleClose(false);
        setLoader(false);
        fetchPro();
        alert("Your product has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setKey("");
    setCategory("");
    setPrice("");
    setQty("");
    setName("");
    setDesc("");
    setImg("");
    
    };
      

    //  FECTH DATA

     const [pro,setPro]=useState([])
     window.addEventListener('load', () => {
      fetchPro();
    });
     const fetchPro=async()=>{
       setPro([]);
       const response=db.collection('products');
       const data=await response.get();
       data.docs.forEach(item=>{
        setPro(pro=>[...pro,item.data()])
       })
     }
     useEffect(() => {
       fetchPro();
     }, [])

     // Edit Product

     const onEditButtonClicked = (key) => {
      //  console.log("key =" + key);
      setLgShow(true);
      setEditKey(key);
     }

     const setEditChanges = async () => {
      let index = -1;
      let docId = "";
      // referring the firebase database with collection name products
      const res = db.collection("products");
      const data = await res.get();
      //iterating the prducts received from database
      data.docs.forEach((item, i) => {
      
        // checking which product needs to be edited
        if(item.data().key == editKey) {
          docId = item.id;
          index = i;
        }
      }
      )
    
      if(docId != "") {
        //updating the database with the changes received
        await res.doc(docId).update({
          price:editPrice,
          qty:editQty,
        })
        //handling the success
        .then(() => {
          let updatedProduct = pro[index];
          updatedProduct.price = editPrice;
          updatedProduct.qty = editQty;
          let products = pro;
          products[index] = updatedProduct;
          setPro(products);
          alert("Changes have been made sucessfully !!");
          
        })
        //handling the error
        .catch(() => {
          alert("Changes cannot be made !!");
        });
      }
      
       setEditPrice("");
       setEditQty("");
       setLgShow(false);
     }

     //delete data
     const deleteData = async ()=>{
  let docId = "";
  const res = db.collection("products");
  const data = await res.get();
  data.docs.forEach((item) => {
    // console.log(item.data());
    if(item.data().key == editKey) {
      docId = item.id;
    }
  })
  if(docId != "") {
    await res.doc(docId).delete()
    .then(() => {
      alert("Product Deleted!!");
    })
 }
}


    return (
      <>
<div style={{backgroundColor:" #e1e5ea"}}>
 <Admin_navbar/>
<div>
   {/* MENU */}
  <div className="row col-md-12">
      <div className="col-md-3">
      <dl className="menu_list">
          <dd className="menu_heading">Menu</dd>
          <dd><a href="/Admin_product" style={{color:"#bd965b"}} className="admin_link">Add Product</a></dd>
          
          <dd><a href="/Admin_contact" className="admin_link">Contact Us</a></dd>
      </dl>
      </div>

      {/* PRODUCT */}
      <div className="category_menu col-md-9 ">
         <div className="row category_row">
          <div className="category_heading col-md-10">Product</div>
          <div className="col-md-2 " ><button onClick={handleShow} className="add_category">Add Product</button></div>
         </div>
         <div className="col-md-12 p-3 category_table">
         <Table responsive hover>
           <thead>
              <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              {/* <th>img</th> */}
              <th>Edit</th>
              <th>Delete</th>
              </tr>
           </thead>
           <tbody>
           { pro && pro.map(products=>{
            return(
            <tr>
              <td>{products.key}</td>
              <td>{products.category}</td>
              <td>{products.title}</td>
              <td>{products.desc}</td>
              <td>{products.price}</td>
              <td>{products.qty}</td>
              {/* <td>{products.img}</td> */}
              <td><Button onClick={() => onEditButtonClicked(products.key)} className="btn-dark">Edit</Button></td>
              <td><Button className="btn-dark" onClick={() => deleteData(products.key)}>Delete</Button></td>
            </tr> 
            
        )}
           )
            }


           </tbody>
           </Table>
         </div>
      </div>
  </div>
</div>
</div>
{/* MODAL FORM */}
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group id="key">
              <Form.Label>Id</Form.Label>
              <Form.Control type="text"  required placeholder="Enter id"  value={key} onChange={(e) => setKey(e.target.value)}/>
            </Form.Group>
            <Form.Group id="category">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" required placeholder="Enter category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>Click to Choose</option>
            <option>Fashion</option>
            <option>Electronics</option>
            <option>Grocery</option>
             </Form.Control>
             </Form.Group>
            <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text"  required placeholder="Enter Name"  value={title} onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group id="description">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows="3" required placeholder="Type a Description"  value={desc} onChange={(e) => setDesc(e.target.value)}/>
            </Form.Group>
            <Form.Group id="price">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text"  required placeholder="Enter Price"  value={price} onChange={(e) => setPrice(e.target.value)}/>
            </Form.Group>
            <Form.Group id="qty">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="text"  required placeholder="Enter Quantity"  value={qty} onChange={(e) => setQty(e.target.value)}/>
            </Form.Group>
            <Form.Group id="image">
              <Form.Label>Image</Form.Label>
              <Form.Control type="string"  required placeholder="Upload Image"  value={img} onChange={(e) => setImg(e.target.value)}/>
            </Form.Group>
            <Button  className="w-100 mt-3"  style={{ background: loader ? 'afb9c8' : '#34656d' }} type="submit">
              Submit
            </Button>
            </Form>
         </Modal.Body> 
      </Modal>
      
       <Modal
        
        show={lgShow}
        onHide={() => setLgShow(false)}
       
        aria-labelledby="example-modal-sizes-title-lg" 
        centered
      >
        {/* setting for the modal of the edit product */}
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
          <Modal.Body id="example-modal-sizes-title-lg">
          <Form.Group id="price">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text"  required placeholder="Enter Price"  value={editPrice} onChange={(e) => setEditPrice(e.target.value)}/>
            </Form.Group>
            <Form.Group id="qty">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="text"  required placeholder="Enter Quantity"  value={editQty} onChange={(e) => setEditQty(e.target.value)}/>
            </Form.Group>
            <Button onClick={setEditChanges} className="w-100 mt-3"  style={{ background: loader ? 'afb9c8' : '#34656d' }} type="submit">
              Submit
            </Button>
          </Modal.Body>
        
        
      </Modal>
</> 

    );
      
}
export default Example
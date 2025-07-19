import React,{useState,useEffect} from "react"
import {Table} from 'react-bootstrap';
import "./Admin_home.css"
import Admin_navbar from './Admin_navbar'
import {db} from '../../firebase'

function Example() {

  const [pro,setPro]=useState([])
  const fetchPro=async()=>{
    const response=db.collection('contacts');
    const data=await response.get();
    data.docs.forEach(item=>{
     setPro(pro=>[...pro,item.data()])
    })
  }
  useEffect(() => {
    fetchPro();
  }, [])

    
    return (
      <>
<div style={{backgroundColor:" #e1e5ea"}}>
 <Admin_navbar/>
<div>
   {/* MENU */}
  <div className="row col-md-12">
      <div className=" col-md-3">
      <dl className="menu_list">
          <dd className="menu_heading">Menu</dd>
          <dd><a href="/Admin_product"className="admin_link">Add Product</a></dd>
          <dd><a href="/Admin_contact" style={{color:"#bd965b"}} className="admin_link">Contact Us</a></dd>
      </dl>
      </div>

      {/* Contact Us */}
      <div className="category_menu col-md-9 ">
         <div className="row category_row">
          <div className="category_heading col-md-10">Contact Us</div>
         </div>
         <div className="col-md-12 p-3 category_table">
         <Table responsive hover>
           <thead>
              <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              </tr>
           </thead>
           <tbody>
           { pro && pro.map(contacts=>{
            return(
            <tr>
              <td>{contacts.name}</td>
              <td>{contacts.email}</td>
              <td>{contacts.message}</td>
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

</>
    );
}
export default Example;



import {db} from '../../firebase'


function sendData(product){
    db.collection("cart").add({
      category: product.category,
      desc: product.desc,
      key: product.key,
      price: product.price,
      qty: 1,
      title: product.title,
      img: product.img
    })
      .then((docRef) => {
        alert("Data Successfully Submitted");
      })
   
  }

  export default sendData;
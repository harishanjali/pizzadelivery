import React from 'react';
import Header from './Header';
import { useState,useEffect,useContext} from 'react';
import { getItems } from '../config/Myservice';
import { myContext } from '../App';

export default function Menu() {
  const [items,setItems] = useState([])
  const cartData = useContext(myContext);
  const {getUpdatedcart} = cartData;
  useEffect(()=>{
    getItems()
    .then(res=>setItems(res.data))
    .catch(err=>console.log(err));
  },[])
function isThere(item){
  let arr=JSON.parse(localStorage.getItem('menucart'));
  let result;
  for(let items of arr){
    if(items.id===item.id){
      result = true;
      break;
    }
    else{
      result = false;
    }
  }
  return result;
}
  const addCart=(item)=>{
    if(localStorage.getItem('menucart')!=undefined){ 
       let arr=JSON.parse(localStorage.getItem('menucart'));
       let flag = isThere(item)
       if(flag){
           alert("Product already in cart");
       }
       else {
        arr.push(item);
        localStorage.setItem('menucart',JSON.stringify(arr));
        getUpdatedcart(arr)
        alert("Product Add To Cart");
       }
    }
    else{
        let arr=[];
        arr.push(item);
        localStorage.setItem('menucart',JSON.stringify(arr));
        getUpdatedcart(arr);
        alert("Product Add To Cart");
    }
}
const getId = (id)=>{
  addCart(id);
}
  return (
    <>
        <Header/>
        <div className='container mt-3'>
          <div className='row'>
          {items.map(item=>(
            <div className='col-4'>
                  <div class="card mb-3" style={{width: '18rem'}}>
                  <img style={{width: '180px',height:'180px'}} src={item.url} class="card-img-top" alt={item.id}/>
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">{item.price}</p>
                    <button class="btn btn-dark" onClick={()=>getId(item)}>Add To Cart</button>
                  </div>
            </div>
            </div>
            
          ))}
          </div>
          
        </div>
       
    </>
  )
}

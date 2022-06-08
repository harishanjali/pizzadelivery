import React,{useEffect,useState,useContext,useMemo} from 'react'
import Header from './Header'
import { getItemById, getItems } from '../config/Myservice'
import { myContext } from '../App';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const [counter,setCounter] = useState(0);
  let navigate = useNavigate();
  let total = useMemo(()=>{
      return 
  },[counter])
  const [itemArray,setItemArray] = useState([]);
  const cartData = useContext(myContext);
	const {arr,getUpdatedcart} = cartData;
  let price = 0;
  arr.map(item=>{
    let stringPrice = item.price;
    let intValue = parseFloat(stringPrice.substr(1))
    price += intValue;
  });
  useEffect(()=>{
    setCounter(price);
  })
  const deleteItem = (id)=>{
    let items = JSON.parse(localStorage.getItem('menucart'));
    let deleteElementIndex = items.findIndex(function(eachItem) {
      if(eachItem.id===id){
        return true;
      }
      else{
        return false;
      }
    });
    items.splice(deleteElementIndex,1);
    getUpdatedcart(items);
    localStorage.setItem('menucart',JSON.stringify(items));
  }
  const calculate = (id)=>{
    price = 0;
    arr.map(item=>{
      let stringPrice = item.price;
      let intValue = parseFloat(stringPrice.substr(1));
      if(item.id===id){
        intValue = intValue * counter;
        console.log(intValue);
        price += intValue;
      }
      else{
        price += intValue;
      }
    })
  }
  const handler = (event,id)=>{
    console.log(event.target.value)
    let counter = parseInt(event.target.value)
    setCounter(price);
  }
  const checkOut = ()=>{
    navigate(`/checkout/${counter}`)
  }
  return (
    <>
        <Header/>
        <div className='container'>
            <h1>Shopping Cart</h1>
            <table className='table table-striped'>
            {arr.map(item=>(
              <tr>
                <td>
                  <img src={item.url} alt='img'/>
                </td>
                <td>
                  {item.name}
                </td>
                <td>
                  {item.price}
                </td>
                <td>
                  <input type='text' onChange={(event)=>handler(event,item.id)}/>
                </td>
                <td><button onClick={()=>deleteItem(item.id)}>Delete</button></td>
              </tr>
            ))}
            </table>
            <div className='d-flex justify-content-evenly align-items-center'>
              <p>{counter}</p>
              <button className='btn btn-dark' onClick={checkOut}>Check Out</button>
            </div>
        </div>
    </>
  )
}

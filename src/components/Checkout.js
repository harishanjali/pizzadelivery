import React,{useContext} from 'react'
import Header from './Header'
import { myContext } from '../App';
import { useParams,useNavigate } from 'react-router-dom'
export default function Checkout() {
  const {total} = useParams();
  const cartData = useContext(myContext);
	const {arr,getUpdatedcart} = cartData;
  const navigate = useNavigate();
  const checkOut = ()=>{
    localStorage.removeItem("menucart");
    let arr = [];
    getUpdatedcart(arr);
    navigate('/success');
  }
  return (
    <>
        <Header/>
        <div className='container'>
            <h1>Checkout</h1>
            <p>{total}</p>
            <form>
              <div className='form-group'>
                <input tyep="text" className='form-control' placeholder='Enter card number'/>
                <button className='btn btn-dark mt-3' onClick={checkOut}>Checkout</button>
              </div>
            </form>
            
        </div>
    </>
  )
}

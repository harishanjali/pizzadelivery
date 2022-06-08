import React,{useState,useEffect,useContext} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import { myContext } from '../App';

export default function Header() {
  const cartData = useContext(myContext);
	const {arr,getUpdatedcart} = cartData;
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('menucart')!=undefined){
    let arr=JSON.parse(localStorage.getItem('menucart'));
    getUpdatedcart(arr);
  }
  },[])
  const logOut = ()=>{
    localStorage.removeItem("menucart");
    let arr = [];
    getUpdatedcart(arr);
    navigate('/');
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/"><img src='images/pizaaimg.jpg'/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to='/menu'>Menu</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart <span class="badge bg-secondary">{arr.length}</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">Profile</Link>
        </li>
        <li className="nav-item">
          <button className='btn btn-outline-dark ms-2' onClick={logOut}>Logout</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

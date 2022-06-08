import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();
    const gotoLogin = ()=>{
            navigate('/login');
    }
    const gotoSignUp = ()=>{
        navigate('/signup');
    }
  return (
    <div className='container'>
        <div className='d-flex justify-content-between mt-3'>
            <div className='logo-container'>
                <img src='images/pizaaimg.jpg' alt='logo'/>
            </div>
            <div>
                <button className='btn btn-outline-dark me-2' onClick={gotoSignUp}>Sign Up</button>
                <button className='btn btn-outline-dark' onClick={gotoLogin}>Login</button>
            </div>
        </div>
        <div className='bg-light p-4 mt-4'>
            <div>
                <h1>Pizza Delivery</h1>
                <p>Welcome to pizza delivery service. This is the place
                    when you may choose the most delicious pizza you like
                    from wide variety of options!.
                </p>
            </div>
            <hr></hr>
            <div className='pb-5'>
                <p>We're Performing delivery free of charge in case of your order is
                    higher than 20$.
                </p>
                <button className='form-control btn-dark display-2' onClick={gotoLogin}>Sign In and Order</button>
            </div>
        </div>
    </div>
  )
}

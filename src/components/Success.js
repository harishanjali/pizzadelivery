import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

export default function Success() {
  const navigate = useNavigate();
  const gotoMenu = ()=>{
    navigate('/menu')
  }
  return (
    <>
        <Header/>
        <div className='container mt-5'>
            <h1>Your Order has been successfully ordered</h1>
            <p className='bg-light p-4 text-success text-bold'>You will recieve a notification via email with order details</p>
            <button className='btn btn-dark' onClick={gotoMenu}>Go and Order Some more</button>
        </div>
    </>
  )
}

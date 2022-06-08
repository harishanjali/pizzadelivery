import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { getUsers } from '../config/Myservice';
import {useForm} from 'react-hook-form';

export default function Login() {
    const [state,setState] = useState({users:'',formError:''})
    const {register,handleSubmit,formState: { errors }} = useForm();
    let {users,formError} = {...state};
    useEffect(()=>{
        getUsers()
        .then(res=>setState({...state,users:res.data}))
        .catch(err=>console.log(err));
    })
    const navigate = useNavigate();
    const gotoSignUp = ()=>{
        navigate('/signup');
    }
    const gotoHome = ()=>{
        navigate('/');
    }
    const isUserThere = (data)=>{
        let result = false;
        users.filter(user=>{
            if(user.email===data.email && user.password===data.password){
                result = true;
            }
        })
        return result;
    }
    const setMyfn = ()=>{
        setState({...state,formError:'User is not registred'})
    }
    const onSubmit = (data)=>{
        let response = isUserThere(data);
        if(response){
            navigate('/menu')
        }
        else{
            alert('Either Email or Password is incorrect')
            
        }
    }
  return (
    <div className='container'>
        <div className='d-flex justify-content-between mt-3'>
            <div className='logo-container' onClick={gotoHome}>
                <img src='images/pizaaimg.jpg' alt='logo'/>
            </div>
            <div>
                <button className='btn btn-outline-dark me-2' onClick={gotoSignUp}>Sign Up</button>
                <button className='btn btn-outline-dark'>Login</button>
            </div>
        </div>
        <p className='text-danger'>{formError}</p>
        <form className='mt-4 border p-3' onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
            <input type="email" name="email" class="form-control" id="staticEmail"
            {...register('email',{ required: "Email is required", pattern: {value: /^\S+@\S+$/i, message: 'This is not a valid email'} })}
            />
            </div>
        </div>
        <p className="text-danger">{errors.email?.message}</p>
        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
            <input type="password" name="password" class="form-control" id="inputPassword"
            {...register('password',{ required: "Email is required"})}
            />
            </div>
        </div>
        <p className='text-danger'>{errors.password?.message}</p>
        <input type='submit' className='btn btn-dark' value='Submit'/>
        </form>
        
    </div>
  )
}

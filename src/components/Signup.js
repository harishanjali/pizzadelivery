import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { getUsers,addUser } from '../config/Myservice';
import {useForm} from 'react-hook-form'

export default function Signup() {
  const [state,setState] = useState({userError:''})
  const {register,handleSubmit,formState: { errors }} = useForm();
    const navigate = useNavigate();
    const gotoLogin = ()=>{
        navigate('/login');
    }
    // useEffect(()=>{
    //   getUsers()
    //   .then(res=>console.log(res.data))
    //   .catch(err=>console.log(err));
    // })
    let {userError} = {...state};
   
    const promise = async (data)=>{
      let response = await getUsers()
      let jsonData = response.data;
      let result=false;
      jsonData.map(user=>{
        if(user.email===data.email){
          result = true;
        }
      })
      return result;
    }
    const onSubmit = async (data)=>{
     let check = await  promise(data);
     if(check){
       setState({...state,userError:'User Already registred.'})
     }
     else{
       setState({...state,userError:''})
       addUser(data);
       navigate('/login');
     }
        
    }
    
  return (
    <div className='container mt-4'>
        <div className='d-flex justify-content-between'>
            <div>
                <img src="images/pizaaimg.jpg" alt='logo'/>
            </div>
            <div>
                <button className='btn btn-outline-dark' onClick={gotoLogin}>Login</button>
            </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className='text-danger'>{userError}</p>
            <div className='form-group'>
                <label> Name</label>
                <input type="text"
                 class="form-control" 
                 name="name" 
                 {...register('username',{ required: "Username is required",pattern:{value:/^[A-Za-z]{3,}$/i,message:'Enter Valid Name'}})}
                 />
            </div>
            <p className="text-danger">{errors.username?.message}</p>
            <div className='form-group'>
                <label>Email</label>
                <input type="email"
                 class="form-control" 
                 name="email" 
                 {...register('email',{ required: "Email is required", pattern: {value: /^\S+@\S+$/i, message: 'This is not a valid email'} })}
                 />
            </div>
            <p className="text-danger">{errors.email?.message}</p>
            <div className='form-group'>
                <label>Password</label>
                <input type="password" 
                class="form-control" 
                name="password"
                {...register('password',{ required: "password is required", pattern: {value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i, message: 'Password contain one upper,lower,special,digit min 8 chr'} })}
                />
            </div>
            <p className="text-danger">{errors.password?.message}</p>
            {/* <div className='form-group'>
                <label>Confirm Password</label>
                <input type="password" 
                class="form-control" 
                name="rpassword"
                {...register('rpassword',{ required: "confirm is required"})}
                />
            </div>
            <p className='text-danger'>{error4}</p> */}
            <input type="submit" value="Add" class="btn btn-success"/>
        </form>
    </div>
  )
}

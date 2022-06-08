import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { createContext,useState} from 'react';
import Home from "./components/Home";
import Login from './components/Login';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Success from './components/Success';
import Signup from './components/Signup';
export const myContext = createContext();
function App() {
  let [arr,setData]=useState([]);
	const getUpdatedcart = (data)=>{
    setData(data);
  }
  return (
    <>
       <myContext.Provider value={{getUpdatedcart,arr}}>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout/:total' element={<Checkout/>}/>
            <Route path='/success' element={<Success/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
        </Router>
    </myContext.Provider>
    </>
   
   
  );
}

export default App;

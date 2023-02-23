import Navbar from './Components/Navbar';
import './App.css';
import Home from './Pages/Home';
import { Routes, Route, Navigate } from 'react-router-dom'
import Cart from './Pages/Cart';
import Private from './Pages/Private';
import PageNotFound from './Pages/PageNotFount'
import Login from './Pages/Login';
// import { useState } from 'react';
import ProductDetails from './Pages/ProductDetails';
import CheckAuth from './Authentication/CheckAuth';
import { useLogin } from './Context/LoginContext';
function App() {
  const { isLogIn, setisLogIn } = useLogin();
  // console.log(isLogIn)

  // function CheckAuth({ children, isLogIn }) {
  //   return isLogIn ? children : <Navigate to='/login' replace />
  // }
  return (
    <div className="App">
      {/* <button className='btn btn-success mb-4 mt-3' onClick={() => setisLogIn((prev) => !prev)}>{isLogIn ? "Logout" : "Login"}</button> */}
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/productdetails/:dataID' element={
          <CheckAuth isLogIn={isLogIn}>
            <ProductDetails />
          </CheckAuth>
        }></Route>
        {
          <Route path='/private' element={
            <CheckAuth isLogIn={isLogIn}>
              <Private />
            </CheckAuth>
          }></Route>
        }
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;

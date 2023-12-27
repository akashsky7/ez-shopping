import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider'

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log('user is logged in', authUser);

      if(authUser){
        //the user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //the user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="app">
        <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/checkout' element={[<Header />,<Checkout />]}></Route>
            <Route path='/' element={[<Header />,<Home />]}></Route>
        </Routes>
        
      </div>
    </Router>
    
  );
}

export default App;

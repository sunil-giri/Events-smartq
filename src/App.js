import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { BrowserRouter , Route , Routes  } from 'react-router-dom';
import Booking from './components/events/Booking/booking';
import Payment from './components/events/Payment/payment';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {GlobalContext} from './context';

function App() {
  const [value,setValue]=useState(null)
  const [cartData,setCartData]=useState({
    cart_value:0,
    items:[]
  })
  useEffect(async()=>{
    const res=await axios.get('https://smartqdemo.firebaseio.com/events-data.json')
    setValue(res.data)
    console.log(value)
  },[])
  return (
    <GlobalContext.Provider value={{value,setValue,cartData,setCartData}}>
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path='/events/booking' element={<Booking/>}/>
        <Route path='/events/payment' element={<Payment/>}/>
        <Route path='*' element={<Booking/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
    </GlobalContext.Provider>
  );
}

export default App;

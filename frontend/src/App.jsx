import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Milk from './Milk';
import Electronics from './Electronics';
import Heavy from './Heavy';
import Food from './Food';
import Toothpaste from './Toothpaste';
import totalprice from './totalprice';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Price from './Price';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Routes>

      <Route path="/" element={<Dashboard/>} />
      <Route path="/Milk" element={<Milk/>}/>
      <Route path="/Electronics" element={<Electronics/>}/>
      <Route path="/Toothpaste" element={<Toothpaste/>}/>
      <Route path="/Food" element={<Food/>}/>
      <Route path="/Heavy" element={<Heavy/>}/>
      <Route path="/totalprice" element={<totalprice/>}/>
      <Route path="/Navbar" element={<Navbar/>}/>
      <Route path='/Price' element={<Price/>}/>
    </Routes>


    </Router>
    </>
  )
}

export default App

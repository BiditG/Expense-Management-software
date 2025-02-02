import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Milk from './Milk';
import { ExpenseProvider } from'./Expensecontext';
import Electronics from './Electronics';
import Heavy from './Heavy';
import Food from './Food';
import Toothpaste from './Toothpaste';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Price from './Price';
import AddItem from './AddItem';
import ExpenseTracker from './ExpenseTracker';

function App() {
  return (
    <ExpenseProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Milk" element={<Milk />} />
          <Route path="/Electronics" element={<Electronics />} />
          <Route path="/Toothpaste" element={<Toothpaste />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/Heavy" element={<Heavy />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Price" element={<Price />} />
          <Route path="/AddItem" element={<AddItem />} />
          <Route path='/ExpenseTracker' element={<ExpenseTracker/>}/>
        </Routes>
      </Router>
    </ExpenseProvider>
  );
}

export default App;

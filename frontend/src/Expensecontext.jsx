import { createContext, useState, useContext } from 'react';

const ExpenseContext = createContext();

export const useExpense = () => useContext(ExpenseContext);

export const ExpenseProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
    setTotalExpense((prevTotal) => prevTotal + item.price);
  };

  return (
    <ExpenseContext.Provider value={{ items, totalExpense, addItem }}>
      {children}
    </ExpenseContext.Provider>
  );
};

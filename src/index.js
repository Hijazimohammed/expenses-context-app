import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import MainLayout from './MainLayout';
import { ExpensesContextProvide } from './context/expenses-conext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ExpensesContextProvide>
    <MainLayout />
  </ExpensesContextProvide>
);

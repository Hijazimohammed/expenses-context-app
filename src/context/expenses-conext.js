import axios from 'axios';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import Swal from 'sweetalert2';
import Expenses from '../module/Expenses';

const initialState = {
  expenses: [],
  setExpenses: (exp) => {},
  addNewExpenses: (exp) => {},
  saveExpense: (exp) => {},
  deleteExpense: (id) => {},
};

const ExpensesContext = createContext(initialState);

export const ExpensesContextProvide = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const addNewExpenses = (exp) => {
    setExpenses((prev) => {
      return [exp, ...prev];
    });
  };

  const saveExpense = (exp) => {
    axios
      .post(
        'https://react-expenses-app-9e601-default-rtdb.firebaseio.com/expenses.json',
        exp
      )
      .then((res) => {
        exp.id = res.data.name;
        addNewExpenses(exp);
      })
      .catch((err) => {});
  };

  const fetchExpenses = () => {
    axios
      .get(
        'https://react-expenses-app-9e601-default-rtdb.firebaseio.com/expenses.json'
      )
      .then((res) => {
        const result = res.data;
        const tempExpenses = [];
        for (let key in result) {
          let expense = new Expenses(
            result[key].title,
            result[key].date,
            result[key].value,
            result[key].desc
          );
          expense.id = key;
          tempExpenses.push(expense);
        }
        setExpenses(tempExpenses);
      })
      .catch((err) => {});
  };

  const deleteExpense = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://react-expenses-app-9e601-default-rtdb.firebaseio.com/expenses/${id}.json`
          )
          .then((res) => {
            Swal.fire({
              icon: 'success',
              title: 'Great',
              text: 'Expenses deleted successfully',
              showConfirmButton: false,
              showCancelButton: false,
              timer: 1000,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
              }
            });
            const filteredExpenses = expenses.filter((item) => item.id !== id);
            setExpenses(filteredExpenses);
          })
          .catch((err) => {});
      }
    });
  };

  useEffect(fetchExpenses, []);

  return (
    <ExpensesContext.Provider
      value={{
        expenses: expenses,
        setExpenses: setExpenses,
        addNewExpenses: addNewExpenses,
        saveExpense: saveExpense,
        deleteExpense: deleteExpense,
      }}>
      {children}
    </ExpensesContext.Provider>
  );
};

export const useExpensesContext = () => {
  return useContext(ExpensesContext);
};

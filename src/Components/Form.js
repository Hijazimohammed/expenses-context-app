import React, { useRef } from 'react';
import Expenses from '../module/Expenses';
import InputForm from './InputForm';
import Swal from 'sweetalert2';
import { useExpensesContext } from '../context/expenses-conext';

function Form() {
  const { saveExpense } = useExpensesContext();
  let titleRef = useRef();
  let dateRef = useRef();
  let valueRef = useRef();
  let descRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      titleRef.current.value == '' &&
      dateRef.current.value == '' &&
      valueRef.current.value == '' &&
      descRef.current.value == ''
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Enter All Fileds',
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      const newExpense = new Expenses(
        titleRef.current.value,
        dateRef.current.value,
        valueRef.current.value,
        descRef.current.value
      );
      newExpense.id = Math.random();
      saveExpense(newExpense);
      successAdded();
      resetValues();
    }
  };

  const resetValues = () => {
    titleRef.current.value = '';
    dateRef.current.value = '';
    valueRef.current.value = '';
    descRef.current.value = '';
  };

  const successAdded = () => {
    Swal.fire({
      icon: 'success',
      title: 'Great',
      text: 'Expenses added successfully',
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <form className='row' onSubmit={handleSubmit}>
      <InputForm
        text='Title'
        type='text'
        textClassName='addTitle'
        ref={titleRef}
      />

      <InputForm
        text='Date'
        type='date'
        textClassName='addDate'
        ref={dateRef}
      />

      <InputForm
        text='Value'
        type='number'
        textClassName='addValue'
        ref={valueRef}
      />

      <InputForm
        text='Description'
        type='text'
        textClassName='addDescrption'
        ref={descRef}
      />

      <div className='mb-3 col-md-12 text-right'>
        <button type='submit' className='btn btn-primary addBtn'>
          Add
        </button>
      </div>
    </form>
  );
}

export default Form;

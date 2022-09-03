/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useExpensesContext } from '../context/expenses-conext';

function TableRow({ title, date, id, value, desc }) {
  const { deleteExpense } = useExpensesContext();

  const deleteHandler = () => {
    deleteExpense(id);
  };
  return (
    <tr>
      <td> {title} </td>
      <td>{date}</td>
      <td>{value}</td>
      <td colSpan='2'>{desc} </td>
      <td className='text-right'>
        <a className='delete' onClick={deleteHandler}>
          <i className='fa fa-trash-o' aria-hidden='true' />
        </a>
      </td>
    </tr>
  );
}

export default TableRow;

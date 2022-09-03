import React from 'react';
import Form from './Components/Form';
import Header from './Components/Header';
import Table from './Components/Table';
import IMG from './img/m1.png';

function MainLayout() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-sm-6'>
          <img src={IMG} className='img-fluid' alt='' />
        </div>
        <div className='col-sm-6 mt-5'>
          <Header />

          <Form />
        </div>
      </div>

      <div className='row mt-5 mb-5'>
        <div className='custom-card '>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;

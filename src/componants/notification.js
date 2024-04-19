import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function notification() {
  return (
    <div className=''>
      <ToastContainer position='top-center' />
    </div>
  )
}

export default notification

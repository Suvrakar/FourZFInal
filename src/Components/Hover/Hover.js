import React from 'react';
import { MDBRipple } from 'mdb-react-ui-kit';

export default function Hover() {
  return (
    <MDBRipple
      className='bg-image hover-overlay shadow-1-strong rounded'
      style={{ maxWidth: '22rem' }}
      rippleTag='div'
      rippleColor='light'
    >
      <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/113.jpg' className='w-100' />
      <a href='#!'>
        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
      </a>
    </MDBRipple>
  );
}
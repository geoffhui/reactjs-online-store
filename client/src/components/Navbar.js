import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { BsCart2 } from 'react-icons/bs';

const Navbar = () => {
   return (
      <div className='row m-auto py-3 bg-color-0059a7'>
         <div className='col-1 col-sm-1 col-md-1 col-lg-1 text-white'><FiMenu size='36px'/></div>
         <a href="/products" className='col-2 col-sm-2 col-md-2 col-lg-2 py-1 text-wrap text-white'>Logo Here</a>
         <div className='col-6 col-sm-6 col-md-6 col-lg-6 py-1 text-center bg-light'>Search</div>
         <a href="/login" className='col-2 col-sm-2 col-md-2 col-lg-2 py-1 text-center text-white'>Login / Register</a>
         <a href='/cart' className='col-1 col-sm-1 col-md-1 col-lg-1 text-white'><BsCart2 size='26px'/></a>
      </div>
   );
}

export default Navbar;
import React from 'react';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
   return (
      <div className='row m-auto py-3 bg-info'>
         <div className='col-1 col-sm-1 col-md-1 col-lg-1'><FiMenu size='36px'/></div>
         <div className='col-2 col-sm-2 col-md-2 col-lg-2 py-1 text-wrap'>Online Shop</div>
         <div className='col-7 col-sm-7 col-md-7 col-lg-7 py-1 text-center bg-light'>Search</div>
         <div className='col-2 col-sm-2 col-md-2 col-lg-2 py-1 text-center'>Login / Register</div>
      </div>
   );
}
 
export default Navbar;
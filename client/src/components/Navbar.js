import React from 'react';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
   return (
      <div className='row m-auto py-3 bg-info'>
         <div className='col-1'><FiMenu size='36px' style={{float: 'right'}}/></div>
         <div className='col-2 py-1 text-wrap text-center'>Online Shop</div>
         <div className='col-7 py-1 text-center bg-light'>Search</div>
         <div className='col-2 py-1 text-center'>Login/Register</div>
      </div>
   );
}
 
export default Navbar;
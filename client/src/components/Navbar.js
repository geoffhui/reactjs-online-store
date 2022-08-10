import React, { useEffect } from 'react';
import axios from 'axios';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';

const Navbar = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false)

   return (
      <div className='row m-auto py-3 bg-color-0059a7'>
         <div className='col-1 col-sm-1 col-md-1 col-lg-1 text-white'><FiMenu size='36px'/></div>
         <a href="/" className='col-2 col-sm-2 col-md-2 col-lg-2 py-1 text-wrap text-white'>Logo Here</a>
         <div className='col-7 col-sm-7 col-md-7 col-lg-7 py-1 text-center bg-light'>Search</div>
         <a href="/login" className='col-2 col-sm-2 col-md-2 col-lg-2 py-1 text-center text-white'>Login / Register</a>
      </div>
   );
}
 
export default Navbar;
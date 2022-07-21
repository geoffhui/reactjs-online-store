import React from 'react';
import Navbar from '../components/Navbar';
import ProductDisplay from '../components/ProductDisplay';

const Products = () => {
   return (
      <div className='container-fluid'>
         <div className='row mw-100'>
            <Navbar />
         </div>
         <div className='row my-5 mx-3'>
            <div className='col-2 mx-3'><ProductDisplay /></div>
            <div className='col-2 mx-3'><ProductDisplay /></div>
            <div className='col-2 mx-3'><ProductDisplay /></div>
            <div className='col-2 mx-3'><ProductDisplay /></div>
            <div className='col-2 mx-3'><ProductDisplay /></div>
         </div>
      </div>
   );
}
 
export default Products;
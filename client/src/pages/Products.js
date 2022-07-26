import React from 'react';
import Navbar from '../components/Navbar';
import ProductDisplay from '../components/ProductDisplay';

const Products = () => {
   return (
      <div className='container-fluid'>
         <div className='row'>
            <Navbar />
         </div>
         <div className='row my-5 justify-content-center'>
            <div className='col-6 col-sm-6 col-md-4 col-lg-2 my-3'><ProductDisplay /></div>
            <div className='col-6 col-sm-6 col-md-4 col-lg-2 my-3'><ProductDisplay /></div>
            <div className='col-6 col-sm-6 col-md-4 col-lg-2 my-3'><ProductDisplay /></div>
            <div className='col-6 col-sm-6 col-md-4 col-lg-2 my-3'><ProductDisplay /></div>
            <div className='col-6 col-sm-6 col-md-4 col-lg-2 my-3'><ProductDisplay /></div>
            <div className='col-6 col-sm-6 col-md-4 col-lg-2 my-3'><ProductDisplay /></div>
            <div className='col-6 col-sm-6 col-md-4 col-lg-2 my-3'><ProductDisplay /></div>
            <div className='col-6 col-sm-6 col-md-4 col-lg-2 my-3'><ProductDisplay /></div>
            <div className='col-6 col-sm-6 col-md-4 col-lg-2 my-3'><ProductDisplay /></div>
            <div className='col-6 col-sm-6 col-md-4 col-lg-2 my-3'><ProductDisplay /></div>
         </div>
      </div>
   );
}
 
export default Products;
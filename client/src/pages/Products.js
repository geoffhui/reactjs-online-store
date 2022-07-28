import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductDisplay from '../components/ProductDisplay';
import { v4 as uuidv4 } from 'uuid';

const Products = ({ products }) => {
   return (
      <div className='container-fluid'>
         <div className='row'>
            <Navbar />
         </div>

         <div className='row my-5' key={ uuidv4() }>
            { Object.keys(products).map((key, index) => {
               return(
                  <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 my-3 text-center' key={ uuidv4() }>
                     <ProductDisplay product={products[key]} />
                  </div>
               )
            })}
         </div>

         <div className='row'>
            <Footer />
         </div>
      </div>
   );
}
 
export default Products;
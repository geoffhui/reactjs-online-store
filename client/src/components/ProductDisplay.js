import React from "react";
import { displaySalePrice } from '../functions/functions'


const ProductDisplay = ({ product }) => {
   return (
      <div className="product-display-container text-center">
         <img src={`./${product.image_url}/${product._id}_1.jpg`} alt="img" className="img-fluid product_display_default_size my-2" />
         <div className="product-display-details">
            <p className="text-center">{ product.product_name }</p>
            {
               product.is_on_sale ? 
                  <div className="fs-14px text-center">
                     <del>{ product.price }</del>
                     <p>{ displaySalePrice(product.price, product.discount_type, product.discount_value) }</p>
                  </div>
                  :
                  <p className="fs-14px text-center">{ product.price }</p>
            }
            {/* <p className="fs-14px text-center">{ product.price }</p> */}
            {/* <p className="fs-14px text-center">$7.99</p> */}
            {/* <p className="fs-14px text-center">Out of Stock</p> */}
         </div>
      </div>
   );
}
 
export default ProductDisplay;
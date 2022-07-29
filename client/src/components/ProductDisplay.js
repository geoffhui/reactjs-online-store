import React from "react";
import { displaySalePrice, display_sale } from '../functions/functions'


const ProductDisplay = ({ product }) => {
   return (
      <div className="product-display-container text-center">
         <img src={`./${product.image_url}/${product._id}_1.jpg`} alt="img" className="img-fluid product_display_default_size my-2" />
         <div className="product-display-details">
            <p className="text-center">{ product.product_name }</p>
            {
               product.is_on_sale ? 
                  <div className="text-center">
                     <p className="text-danger my-0">{ displaySalePrice(product.price, product.discount_type, product.discount_value) }</p>
                     <del className="fs-14px">{ product.price }</del>
                     <p className="text-success bg-sale">{ display_sale(product.discount_type, product.discount_value) }</p>
                  </div>
                  :
                  <div className="text-center">
                     <p className="my-0">{ product.price }</p>
                     <br />
                     <br />
                     <p></p>
                  </div>
            }
         </div>
      </div>
   );
}
 
export default ProductDisplay;
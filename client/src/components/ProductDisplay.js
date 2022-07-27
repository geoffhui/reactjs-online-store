import React from "react";


const ProductDisplay = ({ product }) => {
   return (
      <div className="product-display-container">
         <img src={`./${product.image_url}/${product._id}_1.jpg`} alt="img" className="img-fluid" />
         <div className="product-display-details">
            <p className="text-center">{ product.product_name }</p>
            <p className="fs-14px text-center">{ product.price }</p>
            {/* <p className="fs-14px text-center">$7.99</p> */}
         </div>
      </div>
   );
}
 
export default ProductDisplay;
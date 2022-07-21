import React from "react";

const ProductDisplay = () => {
   return (
      <div className="product-display-container">
         <p className="product-display-image text-center">Image</p>
         <div className="product-display-details">
            <p className="text-center">Name</p>
            <p className="fs-14px text-center"><del>$10.99</del></p>
            <p className="fs-14px text-center">$7.99</p>
         </div>
      </div>
   );
}
 
export default ProductDisplay;
import React from "react";
import { displaySalePrice, display_sale } from '../functions/functions'


const ProductDisplay = ({ product }) => {
   const onAddCart = (addedProduct) => {
      // localStorage.removeItem('cart')

      let cartProducts = JSON.parse(localStorage.getItem('cart') || "[]")
      cartProducts.push(addedProduct)
      localStorage.setItem('cart', JSON.stringify(cartProducts))
   }

   return (
      <div className="product-display-container text-center">
         <img src={`./${product.image_url}/${product._id}_1.jpg`} alt="img" className="img-fluid product_display_default_size my-2" />
         <div className="product-display-details">
            <p className="text-center">{ product.product_name }</p>
            {
               product.is_on_sale ? 
                  <div className="text-center position-relative">
                     <p className="my-0">
                        { displaySalePrice(product.price, product.discount_type, product.discount_value) }
                     </p>
                     
                     <del className="fs-14px text-secondary">{ product.price }</del> 
                     
                     <p className="bg-sale m-0 bg-sale px-2 text-white">
                        { display_sale(product.discount_type, product.discount_value) }
                     </p>
                  </div>
                  :
                  <div className="text-center">
                     <p className="my-0">{ product.price }</p>
                     <br />
                  </div>
            }
            <button className="btn" onClick={e => onAddCart(product)}>Add To Cart</button>
         </div>
      </div>
   );
}
 
export default ProductDisplay;
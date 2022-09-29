import React from "react";
import { displaySalePrice, display_sale } from '../functions/functions'


const ProductDisplay = ({ product }) => {
   var productCopy = {
      discount_type: product.discount_type,
      discount_value: product.discount_value,
      image_url: product.image_url,
      is_on_sale: product.is_on_sale,
      price: product.price,
      product_name: product.product_name,
      product_sku: product.product_sku,
      quantity: product.quantity,
      _id: product._id,
      quantity_in_cart: 1
   }

   const onAddCart = (addedProduct) => {
      // localStorage.removeItem('cart')

      let exists = false

      let cartProducts = JSON.parse(localStorage.getItem('cart') || "[]")

      if (cartProducts.length === 0) {
         cartProducts.push(productCopy)
         localStorage.setItem('cart', JSON.stringify(cartProducts))
      } else {
         cartProducts.map(item => {
            if (item._id === productCopy._id) {
               item.quantity_in_cart = item.quantity_in_cart + 1
               if (item.quantity_in_cart > item.quantity) {
                  item.quantity_in_cart = item.quantity
                  console.log('exceeded quantity')
               }
               localStorage.setItem('cart', JSON.stringify(cartProducts))
               exists = true
               return
            }
         })
         if (exists === false) {
            cartProducts.push(productCopy)
            localStorage.setItem('cart', JSON.stringify(cartProducts))
         }
      }
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
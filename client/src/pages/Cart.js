import CartProduct from "../components/CartProduct";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { displaySalePrice } from '../functions/functions'

const Cart = () => {
   const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))
   const [totalPrice, setTotalPrice] = useState(0)

   const loadCartPrice = () => {
      let finalPrice = 0
      
      cart.map(item => {
         if (item.is_on_sale) {
            let salePrice = displaySalePrice(item.price, item.discount_type, item.discount_value).replace('$', '')
            let convertedSalePrice = Number(parseFloat(salePrice)).toFixed(2)
            finalPrice = Number(parseFloat(finalPrice) + parseFloat(convertedSalePrice) * item.quantity_in_cart).toFixed(2)
         } else {
            let convertedProductPrice = Number(parseFloat(item.price)).toFixed(2)
            finalPrice = Number(parseFloat(finalPrice) + parseFloat(convertedProductPrice) * item.quantity_in_cart).toFixed(2)
         }
      })

      localStorage.setItem('cartTotalPrice', finalPrice)
      setTotalPrice(finalPrice)
   }

   useEffect(() => {
      loadCartPrice()
   }, [])

   return (  
      <div className="container-fluid">
         <div className='row'>
            <Navbar />
         </div>

         <div className="row my-5 justify-content-center text-center" key={ uuidv4() }>
            <div className="col-2">Product</div>
            <div className="col-3">Name</div>
            <div className="col-2">Quantity</div>
            <div className="col-2">Price</div>
            <div className="col-2"></div>
         </div>

         { cart.map(item => {
               return (
                  <div key={ uuidv4() }>
                     <CartProduct product={ item }/>
                  </div>
               )
         }) }

         <hr></hr>

         <div className="row my-3 justify-content-center text-center" key={ uuidv4() }>
            <div className="col-2"></div>
            <div className="col-3"></div>
            <div className="col-2">Total</div>
            <div className="col-2">${ totalPrice }</div>
            <div className="col-2"></div>
         </div>

         <div className="row my-5">
            <div className="col-2"></div>
            <div className="col-3"></div>
            <div className="col-3"></div>
            <button className="col-1 btn btn-primary">Checkout</button>
         </div>
         

         <div className='row'>
            <Footer />
         </div>
      </div>
   );
}
 
export default Cart;
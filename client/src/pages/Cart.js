import CartProduct from "../components/CartProduct";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Cart = () => {
   const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))

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
            <div className="col-2">$0.00</div>
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
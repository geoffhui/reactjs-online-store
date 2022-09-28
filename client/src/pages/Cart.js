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

         <div className="row" key={ uuidv4() }>
            { cart.map(item => {
               return (
                  <div key={ uuidv4() }>
                     <CartProduct product={ item }/>
                  </div>
               )
            }) }
         </div>

         <div className='row'>
            <Footer />
         </div>
      </div>
   );
}
 
export default Cart;
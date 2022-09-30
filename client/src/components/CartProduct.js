import { displaySalePrice } from '../functions/functions'
import { BsTrash } from 'react-icons/bs'
import { useState } from 'react'

const CartProduct = ({ product }) => {
   const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem('cart')))
   const [quantity, setQuantity] = useState(product.quantity_in_cart)

   const onClickMinus = () => {
      cartProducts.map(item => {
         if (item._id === product._id) {
            item.quantity_in_cart = parseInt(item.quantity_in_cart) - 1
            if (item.quantity_in_cart <= 0) {
               item.quantity_in_cart = 0
            }
            localStorage.setItem('cart', JSON.stringify(cartProducts))
            window.location.reload(true)
            return
         }
      })
   }

   const onClickPlus = () => {
      cartProducts.map(item => {
         if (item._id === product._id) {
            item.quantity_in_cart = parseInt(item.quantity_in_cart) + 1
            if (item.quantity_in_cart >= item.quantity) {
               item.quantity_in_cart = item.quantity
            }
            localStorage.setItem('cart', JSON.stringify(cartProducts))
            window.location.reload(true)
            return
         }
      })
   }

   const onClickDelete = () => {
      let updatedCartProducts = cartProducts.filter(item => item._id !== product._id)
      localStorage.setItem('cart', JSON.stringify(updatedCartProducts))
      window.location.reload(true)
   }

   const updateCartProductQuantity = () => {
      cartProducts.map(item => {
         if (item._id === product._id) {
            if (quantity === '' || quantity < 0) {
               console.log(quantity)
               setQuantity(0)
               item.quantity_in_cart = 0
               product.quantity_in_cart = 0
               localStorage.setItem('cart', JSON.stringify(cartProducts))
               window.location.reload(true)
               return
            }
            if (item.quantity >= quantity) {
               item.quantity_in_cart = quantity
               product.quantity_in_cart = quantity
               localStorage.setItem('cart', JSON.stringify(cartProducts))
               window.location.reload(true)
               return
            }
            if (item.quantity <= quantity) {
               setQuantity(item.quantity)
               item.quantity_in_cart = item.quantity
               product.quantity_in_cart = item.quantity
               localStorage.setItem('cart', JSON.stringify(cartProducts))
               window.location.reload(true)
               return
            }
         }
      })
   }

   return (  
      <div className='row my-5 justify-content-center text-center'>
         <div className='col-2 '>
            <img src={`./${product.image_url}/${product._id}_1.jpg`} alt="img" className="img-thumbnail cart-product-image" />
         </div>
         
         <div className="col-3">{ product.product_name }</div>

         <div className="col-2">
            <div className='row'>
               <div className="input-group">
                  <button className="col-3 btn btn-secondary" onClick={ onClickMinus }>-</button>
                  <input 
                     className='col-6 form-control text-center' 
                     type="number" 
                     autoComplete='off' 
                     value={ quantity }
                     onChange={ (e) => setQuantity(e.target.value) }
                     onBlur={ updateCartProductQuantity }
                  />
                  <button className="col-3 btn btn-secondary" onClick={ onClickPlus }>+</button>
               </div>
            </div>
         </div>

         { product.is_on_sale ? 
            <div className="col-2">
               <strike className='text-danger'>{ product.price }</strike>
               <div className='text-success'>
                  { displaySalePrice(product.price, product.discount_type, product.discount_value) }
               </div>
            </div>
            : 
            <div className='col-2'>{ product.price }</div>
         }

         <div className='col-2'>
            <BsTrash onClick={ onClickDelete }/>
         </div>
      </div>
   );
}
 
export default CartProduct;
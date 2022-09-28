import { displaySalePrice } from '../functions/functions'
import { BsTrash } from 'react-icons/bs'

const CartProduct = ({ product }) => {
   return (  
      <div className='row my-5 justify-content-center text-center'>
         <div className='col-2 '>
            <img src={`./${product.image_url}/${product._id}_1.jpg`} alt="img" className="img-thumbnail cart-product-image" />
         </div>
         
         <div className="col-3">{ product.product_name }</div>

         <div className="col-2">
            <div className='row'>
            <div className="col-4">-</div>
            <div className="col-4">1</div>
            <div className="col-4">+</div>
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
            <BsTrash className=''/>
         </div>
      </div>
   );
}
 
export default CartProduct;
// Calculates and displays sale price
// PARAM price: Float
// PARAM discount_type: Enum - 'none', 'percent' or 'amount'
// PARAM discount_value: Int
export const displaySalePrice = (price, discount_type, discount_value) => {
   var final_price = price;
   switch (discount_type) {
      case 'percent':
         final_price = (1 - (discount_value / 100)) * price
         break
      case 'amount':
         final_price = price - discount_value
         break
      default: 
         break
   }

   final_price = final_price.toLocaleString('en-US', { style: 'currency', currency: 'USD'})

   return final_price
}


// Displays text depending on value of discount_type
// PARAM discount_type: String
// PARAM discount_value: Float
export const display_sale = (discount_type, discount_value) => {
   var discount_text = ''
   switch (discount_type) {
      case 'percent':
         discount_text = `${discount_value}% OFF!`
         break
      case 'amount':
         discount_text = `SAVE ${discount_value.toLocaleString('en-US', { style: 'currency', currency: 'USD'})}!`
         break
      default:
         break
   }

   return discount_text
}


// Capitalizes first letter of every word
// PARAM str: String
export const titleCase = (str) => {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }

   return splitStr.join(' '); 
}
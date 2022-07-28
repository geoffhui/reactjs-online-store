// Calculates and displays sale price
// PARAM price: float
// PARAM discount_type: Enum - 'percent' or 'amount'
// PARAM discount_value: int
export const displaySalePrice = (price, discount_type, discount_value) => {
   var final_price = price;
   switch(discount_type) {
      case 'percent':
         final_price = Math.round((1 - (discount_value / 100)) * price)
         break
      case 'amount':
         final_price = price - discount_value
         break
      default: 
         break
   }

   return format_2_decimal_places(final_price)
}


// Formats a number to USD currency
// PARAM number: int
export const format_2_decimal_places = (number) => {
   return number.toLocaleString('en-US', { style: 'currency', currency: 'USD'})
}
// GET request to fetch data from 'products' table
export const getProducts = async () => {
   try {
      const res = await fetch("http://localhost:8080/products", {
         method: 'GET',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
         }
      })

      return await res.json()
   }
   catch (err) {
      console.log(err)
   }
}
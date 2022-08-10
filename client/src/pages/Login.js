import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

const Login = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [customText, setCustomText] = useState('')
   const navigate = useNavigate()

   const handleLogin = (e) => {
      e.preventDefault()

      const user = {
         email: email,
         password: password
      }

      axios.post("http://localhost:8080/login", user)
         .then(res => {
            localStorage.setItem("token", res.data.token)
            setCustomText(res.data.message)
         })
   }

   useEffect(() => {
      axios.get("http://localhost:8080/getUser", {
         headers: {
            "x-access-token": localStorage.getItem("token")
         }
      })
      // .then(res => res.data.isLoggedIn ? navigate('/') : null)
   }, [navigate])

   return ( 
      <div>
         <h3 className='container w-75 text-start mt-4'>Login</h3>

         <form className='container my-5 w-75 bg-color-0059a7 rounded-corners' autoComplete='on' onSubmit={event => handleLogin(event)}>
            <div className='form-group'>
               <label className='mt-4 text-light'>Email</label>
               <input 
                  className='form-control mb-4' 
                  id='email'  
                  type="email" 
                  value={ email } 
                  onChange={ e => setEmail(e.target.value) } />
            </div>

            <div className="form-group mb-4">
               <label className="text-light">Password</label>
               <input 
                  className='form-control'
                  type='password'
                  value={ password } 
                  onChange={ e => setPassword(e.target.value) } />
            </div>

            <div className="form-group">
               <button className='btn bg-light mb-4' type='submit'>Login</button>
               { customText !== '' ? 
                  <label className='form-text col-12 text-white mb-4'>{ customText }</label>
                  : null
               }
            </div>
         </form>
      </div>
   );
}
 
export default Login;
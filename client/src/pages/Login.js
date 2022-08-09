import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

const Login = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
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
         })
   }

   useEffect(() => {
      fetch("http://localhost:8080/getUser", {
         headers: {
            "x-access-token": localStorage.getItem("token")
         }
      })
      .then(res => res.json())
      .then(data => data.isLoggedIn ? navigate('/') : null)
   }, [])

   return (  
      <form onSubmit={ event => handleLogin(event) }>
         <input required type="email" value={ email } onChange= {e => setEmail(e.target.value) } />
         <input required type="password" value={ password } onChange={ e => setPassword(e.target.value) }/>
         <button type="submit">Login</button>
      </form>
   );
}
 
export default Login;
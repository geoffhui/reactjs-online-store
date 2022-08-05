import { useNavigate } from 'react-router'
import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const navigate = useNavigate()

   const handleRegister = async (e) => {
      e.preventDefault()

      const user = {
         full_name: name,
         email: email,
         password: password
      }

      await axios.post('http://localhost:8080/register', user)

      // navigate('/')
   }

   return (
      <form onSubmit={event => handleRegister(event)}>
         <input type="text" value={ name } onChange={ e => setName(e.target.value) }/>
         <input required type="email" value={ email } onChange={ e => setEmail(e.target.value) } />
         <input required type="password" value={ password } onChange={ e => setPassword(e.target.value) } />
         <input type="submit" value="Register" />
      </form>
   );
}
 
export default Register;
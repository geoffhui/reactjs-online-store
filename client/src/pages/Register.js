import { useNavigate } from 'react-router'
import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [customText, setCustomText] = useState('')
   const navigate = useNavigate()

   const handleRegister = async (e) => {
      e.preventDefault()

      const user = {
         name: name,
         email: email,
         password: password
      }

      await axios.post('http://localhost:8080/register', user)
         .then(res => setCustomText(res.data.message))

      // navigate('/')
   }

   return (
      <div>
         <h3 className='container w-75 text-start mt-4'>Create An Account</h3>
         <form className='container mt-5 w-75 bg-color-0059a7 rounded-corners' onSubmit={event => handleRegister(event)}>
         <div className='form-group'>
            <label className='mt-4 text-light'>Name *</label>
            <input className='form-control mb-4' required type="text" value={ name } onChange={ e => setName(e.target.value) }/>
         </div>

         <div className='form-group'>
            <label className='text-light'>Email *</label>
            <input className='form-control mb-4' required type="email" value={ email } onChange={ e => setEmail(e.target.value) } />
         </div>

         <div className='form-group'>
            <label className='text-light'>Password *</label>
            <input className='form-control mb-4' required type="password" value={ password } onChange={ e => setPassword(e.target.value) } />
         </div>

         <div className='form-group'>
            <button className='btn bg-light mb-4' type='submit'>Register</button>
            { customText !== '' ? 
               <label className='form-text col-12 text-white mb-4'>{ customText }</label>
               : null
            }
         </div>
         </form>
      </div>
   );
}
 
export default Register;
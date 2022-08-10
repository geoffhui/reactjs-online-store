import { useNavigate } from 'react-router'
import React, { useState } from 'react'
import axios from 'axios'
import SecondaryNavBar from '../components/SecondaryNavBar'
import Footer from '../components/Footer'

const Register = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [verifyPassword, setVerifyPassword] = useState('')
   const [customText, setCustomText] = useState('')
   const navigate = useNavigate()

   const handleRegister = async (e) => {
      e.preventDefault()

      const user = {
         name: name,
         email: email,
         password: password,
         verifyPassword: verifyPassword
      }

      await axios.post('http://localhost:8080/register', user)
         .then(res => setCustomText(res.data.message))

         navigate('/login')
   }

   return (
      <div>
         <SecondaryNavBar />

         <h3 className='container w-75 text-start mt-5 mb-0'>Create An Account</h3>

         <form className='container mt-3 mb-5 w-75 bg-color-0059a7 rounded-corners' autoComplete='on' onSubmit={event => handleRegister(event)}>
            <div className='form-group'>
               <label className='mt-4 text-light'>Name *</label>
               <input 
                  className='form-control mb-4' 
                  id='name' 
                  required 
                  type="text" 
                  value={ name } 
                  onChange={ e => setName(e.target.value) }/>
            </div>

            <div className='form-group'>
               <label className='text-light'>Email *</label>
               <input 
                  className='form-control mb-4' 
                  id='email' 
                  required 
                  type="email" 
                  value={ email } 
                  onChange={ e => setEmail(e.target.value) } />
            </div>

            <div className='form-group'>
               <label className='text-light'>Password *</label>
               <input 
                  className='form-control mb-4' 
                  required 
                  type="password" 
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                  title="Must contain at least one number, one uppercase letter, and lowercase letter, and at least 8 characters" 
                  value={ password } 
                  onChange={ e => setPassword(e.target.value) } />
            </div>

            <div className="form-group">
               <label className='text-light'>Verify Password *</label>
               <input 
                  className='form-control mb-4' 
                  required 
                  type='password' 
                  value={ verifyPassword } 
                  onChange={ e => setVerifyPassword(e.target.value) }/>
            </div>

            <div className='form-group'>
               <button className='btn bg-light mb-2' type='submit'>Register</button>
               { customText !== '' ? 
                  <label className='form-text col-12 text-white mb-4'>{ customText }</label>
                  : null
               }
            </div>

            <a href="/login" className='form-text mb-4 text-light d-inline-block' >Already have an account? Click here to log in!</a>
         </form>

         <Footer />
      </div>
   );
}
 
export default Register;
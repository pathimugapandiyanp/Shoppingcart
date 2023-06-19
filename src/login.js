import React, { useState } from 'react'
import Home from './Home.js'
import "./loginform.css"
import { emailValidator, passwordValidator } from './components/valitader'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [input,setInput]=useState({email:'',password:''})
 const [error,setError] = useState('')
 const [success,setSuccess] = useState('')

  const handlechange =(e) =>{
    setInput({...input,[e.target.name]: e.target.value})
  }


const submit =(e)=>{
  e.preventDefault()
  setSuccess('');
  if(!emailValidator(input.email))
  return setError('pls eneter valid email id');
  
  if (!passwordValidator(input.password))
			return setError(
				'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters'
			);
   
     setSuccess('succesfully login')
    //  if(input.email !== 'admin@a.com' || input.password !== 'Password@1') return setError('Invalid email or password');

		// history.push('/Home')
    navigate('/Home');
}

  return (
    <main className="page">
      <div >
      <h1 style={{textAlign:'center'}}>Login form</h1>

        <form className="cover" onSubmit={submit}>
         
         <label style={{fontSize:28,fontStyle:'italic'}}>Email</label>
         
         {error.length > 0 && <div style={{color:'red',textAlign:'center' }}>{error}</div>}
         {success.length > 0 &&<div style={{color:'green'}} className="Success">{success}</div>}
         <input text="text" placeholder='username' name="email" onChange={handlechange}/>

         <label style={{fontSize:28}}>password</label>
         <input text="password" placeholder='password' name="password" onChange={handlechange}/>

         <button>submit</button>
         
          
         <span>or login using below</span>
         <div className="below-icon">
        <div className="facebook"></div>
        <div className="google">
        </div>
    </div>
         </form>
         
      </div>

    </main>
  )
}

export default Login;
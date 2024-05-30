import React, { useState } from 'react'

const Login = () => {
    const[uname, setUname] = useState('');
    const[pwd, setPwd] = useState('');
    const[isInvalid, setIsInvalid] = useState(false)
    const[loginSuccess, setLoginSuccess] = useState(false)
    const submitHandler = (e) =>{
        e.preventDefault();
        if(uname !== "user" || pwd !== "password"){
            setIsInvalid(true)

        }else{
            setLoginSuccess(true)
        }
        
    }
  return (
    <div>
      <h1>Login Page</h1>
      {loginSuccess ? (<div>Welcome, {uname}</div>) : (<form onSubmit={submitHandler}>
        {isInvalid ? (<div>Invalid username or password</div>) : (null)}
        <div>
        <label for="username">Username:</label>
        <input type="text" value={uname} onChange={(e) => setUname(e.target.value)} id="username" required/>
        </div>
        <div>
        <label for="password">Password:</label>
        <input type="text" value={pwd} onChange={(e) => setPwd(e.target.value)} id="password" required/>
        </div>
        <button type="submit">Submit</button>
      </form>)}
      
    </div>
  )
}

export default Login

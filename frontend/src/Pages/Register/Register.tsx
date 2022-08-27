import React, { useState } from 'react'
import axios  from 'axios'

export default function Register() {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  
  const Register = () => {
    axios.post("http://103.181.142.239:8000/api/register", {
      username,
      password
    }, {
      withCredentials: true 
    }).then(res => {
      console.log(res.data);
    })
  }

  return (
    <>
  <div className='body'>
    <div className="background">
    <div className="shape" />
    <div className="shape" />
  </div>
  <form>
    <h3>Register</h3>
    <label htmlFor="username">Username</label>
        <input type="text" placeholder="Username" id="username" onChange={e => setUsername(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password"  onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="btn" onClick={Register}>Register</button>
      </form>  
  </div>
    </>

  )
}

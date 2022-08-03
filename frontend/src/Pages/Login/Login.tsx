import React, { useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import './login.css'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const login = () => {
    axios.post("http://localhost:8000/login", {
      username,
      password
    }, {
      withCredentials: true
    }).then((res : AxiosResponse) => {
      if (res.data === "succes") {
      navigate('/')
    }
    }, () => {
      console.log("failure");
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
    <h3>Login</h3>
    <label htmlFor="username">Username</label>
        <input type="text" placeholder=" Username" id="username" onChange={e => setUsername(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password"  onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="btn" onClick={login}>Login</button>
      </form>  
  </div>
    </>
  )
}

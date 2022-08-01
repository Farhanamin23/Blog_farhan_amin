import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../Pages/Context/Context'
import Axios, { AxiosResponse } from 'axios';

export default function NavBar() {
  // const navigation = useNavigation();
  const ctx = useContext(myContext);

  const logout = () => {
    Axios.delete("http://localhost:8000/logout", {
      withCredentials: true
    }).then((res : AxiosResponse) => {
      if (res.data === "berhasil") {
        window.location.href = "/";
      }
    })
  }
  return (
    <>
    <div className="NavContainer">
      {ctx ? (
        <>
          <Link onClick={logout} to={'/'}>Logout</Link>
          {ctx.isAdmin ? (<Link to="/admin">Admin</Link>) : null}
          <Link to="/user">User</Link>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>  
        </>
      )}<Link to="/">Home</Link>
    </div>
  </>
  )
}
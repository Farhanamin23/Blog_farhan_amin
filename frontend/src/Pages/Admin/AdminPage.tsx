import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'

export default function AdminPage() {
  const [data, setData] = useState<any>();
  const [selectedUser, setSelectedUser] = useState<string>();
  useEffect(() => {
    Axios.get("http://localhost:8000/getalluser", {
      withCredentials: true
    }).then(res => {
      setData(res.data)
    })
  }, []);
  if (!data) {
    return null;
  }
  
  const deleteUser = () => {
    let userid: any;
    data.forEach((item: any) => {
      if (item.username === selectedUser) {
        userid = item._id
      }
    })
    Axios.post("http://localhost:8000/deleteuser", {
      id: userid     
    }, {
      withCredentials:true
    })
  }
  return (
    <div>
      <h4>Admin Pages Only admin can see this page </h4>
      <select onChange={e => setSelectedUser(e.target.value)} name="deleteuser" id='deleteuser' aria-label='deleteuser'>
      <option id="Select User">Select User</option>
        {
          data.map((item: any) => {
            return (
              <option id={item.username}>{item.username}</option>
          )
        })  
        
        } 
      </select>
      <button onClick={deleteUser}>Delete User</button>
    </div>
  )
}

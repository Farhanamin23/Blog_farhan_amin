import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import  './admin.css'
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
      <select onChange={e => setSelectedUser(e.target.value)} name="deleteuser" key='deleteuser' id='deleteuser' aria-label='deleteuser'>
      <option key="Select User">Select User</option>
        {
          data.map((item: any) => {
            return (
              <option key={item.username}>{item.username}</option>
          )
        })  
        
        } 
      </select>
      <div>
      <button onClick={deleteUser} className='delete'>Delete User</button>
  </div>
    </div>
  )
}

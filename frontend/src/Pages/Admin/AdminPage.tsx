import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import  './admin.css'

export default function AdminPage() {
  const [data, setData] = useState<any>();
  const [selectedUser, setSelectedUser] = useState<string>();
  useEffect(() => {
    Axios.get("http://103.181.142.239:8000/api/getalluser", {
      withCredentials: true
    }).then(res => {
      setData(res.data)
    })
  }, []);
  if (!data) {
    return null;
  }
  
  const deleteUser = () => {
      confirmAlert({
      title: 'Confirm to submit ',
      message: 'Are you sure want delete user.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('Click Ok and Refresh the pages')
        },
        {
          label: 'No',
          onClick: () => alert('Click Ok')
        }
      ]
    });

    let userid: any;
    data.forEach((item: any) => {
      if (item.username === selectedUser) {
        userid = item._id
      }
    })
    Axios.post("http://103.181.142.239:8000/api/deleteuser", {
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

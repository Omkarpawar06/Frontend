import React , {useState} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import '../assets/Styles/AdminList.css';
import axios from 'axios';

const AdminList = () => {

  const [admins , setadmins] = useState([]);

  axios.get('https://mdc-backend.onrender.com/Admin/getAdmins')
  .then((response)=> {
    if (response.data.admins) {
      console.log(response.data.admins)
      setadmins(response.data.admins)
    }
  })
  .catch((error) => {
    toast.error('error getting Adimns');
  });

  return (
    <div className='adminlist-container'>
    <div className="admin-list">
      <h2>Admin List</h2>
      <ul>
        {admins.map((admin, index) => (
          <li key={index}>
            <span>{admin.name}</span> - <span>{admin.email}</span>
          </li>
        ))}
      </ul>
      <ToastContainer/>
    </div>
    </div>
  );
};

export default AdminList;

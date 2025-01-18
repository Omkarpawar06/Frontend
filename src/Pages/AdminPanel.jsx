import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import { Navigate, useNavigate } from "react-router-dom";
import "react-toastify/ReactToastify.css";
import axios from "axios";
import '../assets/Styles/AdminPanel.css';  // Ensure you have the CSS in this file

const AdminPanel = () => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data) => {
        const AdminData = {
          name: data.name,
          email: data.email,
          password: data.password,
        };

    if (!/^[A-Za-z\s]+$/.test(AdminData.name)) {
        toast.error("Name field only allows character data.");
        return;
      }
    if (!/\S+@\S+\.\S+/.test(AdminData.email)) {
        toast.error("Email is not valid.");
        return;
      }
      if (
        AdminData.password.length < 8 ||
        AdminData.password.length > 15 ||
        !/[A-Z]/.test(AdminData.password) ||
        !/[!@#$%^&*]/.test(AdminData.password)
      ) {
        toast.error("Password should contain at least one capital letter and special character and be 8-15 characters long.");
        return;
      }

        await axios
      .post("https://mdc-backend.onrender.com/Admin/signup", AdminData)
      .then((response) => {
        if (response.data && response.data.AdminId) {
          toast.success("Admin Added Successfully..");
          sessionStorage.setItem('AdminId', response.data.AdminId);
        }
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        }
      });
    }
    const handleRedirect = (path) =>{
        navigate(path)
    }
    return (
        
        <div className="admin-panel">
            {/* Container for Add Admin */}
            <div className='adminform-container'>
            <div className="addAdminForm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>ADD ADMIN</h1>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    {...register("name", { required: true })} 
                />
                {errors.name && <span>This field is required</span>}

                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    {...register("password", { required: true })} 
                />
                {errors.password && <span>This field is required</span>}
                <button type="submit">Add Admin</button>
            </form>
        </div>
        </div>

            {/* Container for Admin List and Appointments */}
            <div className="admin-panel__double-container">
                <div className="admin-panel__rect-container">
                    <button className='adminlistbtn' type='submit' onClick={()=>handleRedirect('/AdminList')}>ADMIN List</button>
                </div>
                <div className="admin-panel__rect-container">
                <button className='aappointmentbtn' type='submit' onClick={()=>handleRedirect('/AppointmentList')}>Appointments</button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default AdminPanel;

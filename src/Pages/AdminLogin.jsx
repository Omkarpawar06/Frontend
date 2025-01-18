import React from "react";
import { useState } from "react";
import "../assets/Styles/AdminLogin.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const AdminLogin = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = async (data) => {
    const AdminData = {
      email: data.email,
      password: data.password,
    };

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
      .post("https://mdc-backend.onrender.com/Admin/login", AdminData)
      .then((response) => {
        if (response.data) {
          toast.success("Login Successfull");
          navigate("/AdminPanel");
        }
      })
      .catch((error) => {
        console.log(error)
        toast.error("Invalid Credentials");
      });
  };
  return (
    <div className="Admin-Container">
      <div className="form-container">
        <h2 className="title">Admin Login</h2>
        <form onSubmit={handleSubmit(onsubmit)} className="form">
          <div className="input-group">
            <label className="label">Email</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your username"
              {...register("email", { required: true })}
            />
          </div>
          <div className="input-group">
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            {errors.password && <span></span>}
          </div>
          <button type="submit" className="button">
            Login
          </button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default AdminLogin;

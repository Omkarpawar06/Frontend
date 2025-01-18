import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import "react-toastify/ReactToastify.css";
import axios from "axios";
import "../assets/Styles/Register.css";

const Register = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate('/login');
  }

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    // Basic validation
    if (!/^[A-Za-z\s]+$/.test(userInfo.name)) {
      toast.error("Name field only allows character data.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(userInfo.email)) {
      toast.error("Email is not valid.");
      return;
    }
    if (
      userInfo.password.length < 8 ||
      userInfo.password.length > 15 ||
      !/[A-Z]/.test(userInfo.password) ||
      !/[!@#$%^&*]/.test(userInfo.password)
    ) {
      toast.error("Password should contain at least one capital letter and special character and be 8-15 characters long.");
      return;
    }

    await axios
      .post("https://mdc-backend.onrender.com/user/signup", userInfo)
      .then((response) => {
        if (response.data && response.data.userId) {
          toast.success("Signup successful.");
          sessionStorage.setItem('userId', response.data.userId);
          navigate("/");
        }
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        }
      });
  };

  return (
    <div className="back-container1">
      <div className="register-container">
        {/* Sign In Section */}
        <div className="sign-in-container1">
          <h1>Welcome Back!</h1>
          <p>Enter your personal details to use all site features</p>
          <button className="sign-in-btn" onClick={login}>LOG IN</button>
        </div>

        {/* Sign Up Section */}
        <div className="sign-up-container1">
          <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required</span>}
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && <span>This field is required</span>}
            <button className="sign-up-btn" type="submit">SIGN UP</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;

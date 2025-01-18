import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/ReactToastify.css";
import axios from "axios";
import "../assets/Styles/Login.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const signUp = () => {
    navigate("/Register");
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

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
      toast.error(
        "Password should contain at least one capital letter and special character and be 8-15 characters long."
      );
      return;
    }

    await axios
      .post("https://mdc-backend.onrender.com/user/login", userInfo)
      .then((response) => {
        if (response.data && response.data.userId) {
          toast.success("Login Successful");
          sessionStorage.setItem("userId", response.data.userId);
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error("Invalid Credentials");
      });
  };

  return (
    <div className="back-login-container">
      <div className="login-main-container">
        <div className="signin-container">
          <form className="signin-form" onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>
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
            <button className="signin-button" type="submit">
               LogIn
            </button>
          </form>
        </div>
        <div className="signup-container">
          <h2>Hello, Friend!</h2>
          <p>
            Register with your personal details to use all of the site features
          </p>
          <button className="signup-button" onClick={signUp}>
            Sign Up
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;

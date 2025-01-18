import React, { useState, useEffect } from "react";
import "../assets/Styles/BookPathology.css"; // Import the CSS file
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Register from "./Register";

function BookDigitalXRay() {
  // const [options, setOptions] = useState([]);
  const [test , setTest] = useState("");
  const userId = sessionStorage.getItem('userId')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const nameRegex = /^[A-Za-z\s]+$/;
  const contactNoRegex = /^\d{10}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const onSubmit = async (data) => {
    const formdata = {
      userId: userId,
      name: data.name,
      contactNo: data.contactNo,
      email: data.email,
      date: data.apDate,
      time: data.timeSlot,
      test: data.test,
    };

    if (!nameRegex.test(data.name)) {
      alert("Invalid Name");
      return;
    }
    if (!contactNoRegex.test(data.contactNo)) {
      alert("Invalid Contact Number");
      return;
    }
    if (!emailRegex.test(data.email)) {
      alert("Invalid Email");
      return;
    }

    await axios
      .post("https://mdc-backend.onrender.com/Appointment/bookDXrayAppointment", formdata)
      .then((response) => {
        console.log(response.data);
        if(response.data){
            alert("Appointment Scheduled");
        }
      })
      .catch((error) => {
        console.error(error.response);
        alert(error.response.data.message);
      });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Book an Appointment</h2>
        <div className="form-group">
          <label htmlFor="patientName">Patient Name:</label>
          <input
            type="text"
            id="patientName"
            className="input"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="contactNo">Contact No:</label>
          <input
            type="tel"
            id="contactNo"
            className="input"
            {...register("contactNo", { required: "contact number is required."})}
          />
          {errors.contactNo && <span>{errors.contactNo.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="input"
            {...register("email", { required: "email is required." })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            className="input"
            {...register("apDate", {required: "appoinment date is required."})}
          />
          {errors.apDate && <span>{errors.apDate.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="timeslot">Timeslot:</label>
          <select
            id="timeslot"
            className="input"
            {...register("timeSlot", {required: "please select the time slot."})}
          >
            <option value="">Select a timeslot</option>
            <option value="8:00AM">8:00 AM</option>
            <option value="11:00AM">11:00 AM</option>
            <option value="1:00PM">1:00 PM</option>
            <option value="3:00PM">3:00 PM</option>
            <option value="5:00PM">5:00 PM</option>
            <option value="7:00PM">7:00 PM</option>
          </select>
          {errors.timeSlot && <span>{errors.timeSlot.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="category">Select Test:</label>
          <select
            id="test"
            onChange={(e) => setTest(e.target.value)}
            className="input"
            defaultValue=""
          >
            <option value="">Select Test</option>
            <option value="Chest(PA)">Chest(PA)</option>
            <option value="Right/Left Chest Lateral">Right/Left Chest Lateral</option>
            <option value="Right/Left Chest Ribs">Right/Left Chest Ribs</option>
            <option value="L. S. Spine(AP/Lat)">L. S. Spine(AP/Lat)</option>
            <option value="Cervical Spine(AP/Lat)">Cervical Spine(AP/Lat)</option>
            <option value="Right/Left Elbow(AP/Lat)">Right/Left Elbow(AP/Lat)</option>
            <option value="Right/Left Wrist(AP/Lat)">Right/Left Wrist(AP/Lat)</option>
            <option value="Right/Left Hand(AP/Lat)">Right/Left Hand(AP/Lat)</option>
            <option value="P. N. S. (W/C)">P. N. S. (W/C)</option>
            <option value="Skull(AP/Lat)">Skull(AP/Lat)</option>
            <option value="Right/Left Mastoids">Right/Left Mastoids</option>
            <option value="Right/Left Shoulder(AP/Lat)">Right/Left Shoulder(AP/Lat)</option>
            <option value="Right/Left Knee Joint(AP/Lat)">Right/Left Knee Joint(AP/Lat)</option>
            <option value="Right/Left Ankle Joint(AP/Lat)">Right/Left Ankle Joint(AP/Lat)</option>
            <option value="Right/Left Foot(AP/Lat)">Right/Left Foot(AP/Lat)</option>
            <option value="Hip Joint(AP/Lat)">Hip Joint(AP/Lat)</option>
            <option value="Pelvis C Both Hip Joint(AP)">Pelvis C Both Hip Joint(AP)</option>
            <option value="T. M. Joints(Open/Closed)">T. M. Joints(Open/Closed)</option>
          </select>
          {errors.category && <span>{errors.category.message}</span>}
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" className="submit-button" />
        </div>
      </form>
    </div>
  );
}

export default BookDigitalXRay;
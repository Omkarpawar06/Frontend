// src/AppointmentForm.js
import React, { useState, useEffect } from "react";
import "../assets/Styles/BookPathology.css"; // Import the CSS file
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Register from "./Register";

function BookPathology() {
  const [options, setOptions] = useState([]);
  const [category, setCategory] = useState("");
  const userId = sessionStorage.getItem('userId')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const Haematology = [
    "CBC/HB%",
    "ESR",
    "Malarial Parasite",
    "Reticulocyte Count",
    "PT(INR)",
    "PTT",
    "Blood Group",
    "G6 PD",
    "Malarial Antigen",
  ];
  const Biochemistry = [
    "Blood Sugar Fasting",
    "Blood Sugar Post-Prandial",
    "Blood Sugar Random",
    "Blood Sugar Post-Glucose",
    "GTT",
    "Glycosylated Hb/HbA1c",
    "Blood Urea/Bun",
    "Creatinine",
    "Calcium",
    "Uric Acid",
    "Phosphorus",
    "HDL Cholesterol",
    "Cholesterol",
    "Bilirubin",
    "LDH",
    "SGPT",
    "Triglycarides",
    "SGOT",
    "Alkaline Phosphatase",
    "Protein,Albumin",
    "Amylase",
    "Lipase",
    "CPK,MB",
    "CPK",
    "S.trolytes",
  ];
  const Microbiology = [
    "Sputum AFB Culture",
    "Blood Culture",
    "Urine Culture/Sensitivity",
  ];
  const HistopathologyAndCytology = [
    "Histopathology(Small/Large)",
    "Histopathology Second",
    "Opinion Slides",
    "Cytology PAP Smeer",
    "Fine Needle Aspiration",
    "Cytology(FNAC)",
  ];
  const stool = ["Stool Rotine"];
  const urine = ["Urine Routine", "Urine Accetone", "24 Hour Urine"];
  const BodyFluids = [
    "Semen Routine",
    "CSF/Ascitic/Pleural",
    "Sputum Routine",
    "Examination/AFB",
    "Fluid for malignant cells",
  ];
  const Serology = [
    "Widal TEst",
    "R. A. Test",
    "C. R. P.",
    "Coombs Test(Diret/Indirect)",
    "Mantoux Test",
    "RH Antibody Titre",
    "B HCG",
    "Urine Pregnancy Test",
  ];
  const HormoneTest = [
    "T3,T4,TSH",
    "T3,Free",
    "T4,Free",
    "F. S. H.",
    "L. H.",
    "Prolactin",
    "Testosterone(Total)",
    "DHEAS",
    "Parathyroid Hormone",
  ];

  useEffect(() => {
    switch (category) {
      case "Haematology":
        setOptions(Haematology);
        break;
      case "Biochemistry":
        setOptions(Biochemistry);
        break;
      case "Microbiology":
        setOptions(Microbiology);
        break;
      case "HistopathologyAndCytology":
        setOptions(HistopathologyAndCytology);
        break;
      case "stool":
        setOptions(stool);
        break;
      case "urine":
        setOptions(urine);
        break;
      case "BodyFluids":
        setOptions(BodyFluids);
        break;
      case "Serology":
        setOptions(Serology);
        break;
      case "HormoneTest":
        setOptions(HormoneTest);
        break;
      default:
        setOptions([]);
        break;
    }
  }, [category]);

  const nameRegex = /^[A-Za-z\s]+$/;
  const contactNoRegex = /^\d{10}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const onSubmit = async (data) => {
    const formdata = {
      userId: userId,
      category: category,
      name: data.name,
      contactNo: data.contactNo,
      email: data.email,
      date: data.apDate,
      time: data.timeSlot,
      testType: data.testType,
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
      .post("https://mdc-backend.onrender.com/Appointment/bookPathAppointment", formdata)
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
    <div className="Pathcontainer">
      <form className="Pathform" onSubmit={handleSubmit(onSubmit)}>
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
            {...register("contactNo", {
              required: "contact number is required.",
            })}
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
            {...register("apDate", {
              required: "appoinment date is required.",
            })}
          />
          {errors.apDate && <span>{errors.apDate.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="timeslot">Timeslot:</label>
          <select
            id="timeslot"
            className="input"
            {...register("timeSlot", {
              required: "please select the time slot.",
            })}
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
          <label htmlFor="Pathologytest">Select Category:</label>
          <select
            id="Pathologytest"
            onChange={(e) => setCategory(e.target.value)}
            className="input"
            defaultValue=""
          >
            <option value="">Select a Pathology Test</option>
            <option value="Haematology">Haematology</option>
            <option value="Serology">Serology</option>
            <option value="HormoneTest">Hormone Test</option>
            <option value="HistopathologyAndCytology">
              Histopathology & Cytology
            </option>
            <option value="BodyFluids">Body Fluids</option>
            <option value="urine">Urine</option>
            <option value="stool">Stool</option>
            <option value="Microbiology">Microbiology</option>
            <option value="Biochemistry">Bio Chemistry</option>
          </select>
          {errors.category && <span>{errors.category.message}</span>}
          </div>
          <div className="form-group">
          <label htmlFor="Pathologytest">Select Test:</label>
          <select
            id="test"
            {...register("testType", { required: "select the test" })}
            >
            {options.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
            </div>
        <div className="form-group">
          <input type="submit" value="Submit" className="submit-button" />
        </div>
      </form>
    </div>
  );
}

export default BookPathology;

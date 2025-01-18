import React , {useState, useEffect} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import '../assets/Styles/AppointmentList.css';
import axios from 'axios';

const Appointments = () => {

  const [appointments, setappointments] = useState([]);
  const [DGappointments, setDGappointments] = useState([]);
  const [ECGappointments, setECGappointments] = useState([]);

  useEffect(() => {
    const getAp = async () => {
      axios.get('https://mdc-backend.onrender.com/Appointment/getDGAppointments')
      .then((response) => {
        if (response.data.appointment) {
          console.log(response.data.appointment)
          setDGappointments(response.data.appointment);
        }
      })
      .catch((error) => {
        toast.error('Error getting Appointments');
      });
    }
    getAp();
  }, []);

  useEffect(() => {
    const getDG = async () => {
      axios.get('https://mdc-backend.onrender.com/Appointment/getAppointments')
      .then((response) => {
        if (response.data.appointment) {
          console.log(response.data.appointment)
          setappointments(response.data.appointment);
        }
      })
      .catch((error) => {
        toast.error('Error getting Appointments');
      });
    }
    getDG();
  }, []);

  useEffect(() => {
    const getECG = async () => {
      axios.get('https://mdc-backend.onrender.com/Appointment/getECGAppointments')
      .then((response) => {
        if (response.data.appointment) {
          console.log(response.data.appointment)
          setECGappointments(response.data.appointment);
        }
      })
      .catch((error) => {
        toast.error('Error getting Appointments');
      });
    }
    getECG();
  }, []);

  return (
    <div className="Appointment-container">
      <div className="appointmentsPanel">
        <div className="pathappointments-table">
          <h2>Pathology Appointments</h2>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact No</th>
                <th>Date</th>
                <th>Time</th>
                <th>Test Type</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={index}>
                  <td>{appointment.testCategory}</td>
                  <td>{appointment.name}</td>
                  <td>{appointment.email}</td>
                  <td>{appointment.contactNo}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.testType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="DGappointments-table">
          <h2>Digital X-ray Appointments</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contact No</th>
                <th>Date</th>
                <th>Time</th>
                <th>Test</th>
              </tr>
            </thead>
            <tbody>
              {DGappointments.map((appointment, index) => (
                <tr key={index}>
                  <td>{appointment.name}</td>
                  <td>{appointment.email}</td>
                  <td>{appointment.contactNo}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.test}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="ECGappointments-table">
          <h2>ECG Appointments</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contact No</th>
                <th>Date</th>
                <th>Time</th>
                <th>Test</th>
              </tr>
            </thead>
            <tbody>
              {ECGappointments.map((appointment, index) => (
                <tr key={index}>
                  <td>{appointment.name}</td>
                  <td>{appointment.email}</td>
                  <td>{appointment.contactNo}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Appointments;

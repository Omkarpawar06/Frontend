import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [appointments, setAppointments] = useState([]);
  const userId = sessionStorage.getItem('userId');

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!userId) {
        console.error("User ID not found in session storage.");
        return;
      }

      try {
        // Get appointments by making three API requests
        const dgResponse = await axios.get(`https://mdc-backend.onrender.com/Appointment/getDGAppointments`, {
          params: { userId }
        });
        const regularResponse = await axios.get(`https://mdc-backend.onrender.com/Appointment/getAppointments`, {
          params: { userId }
        });
        const ecgResponse = await axios.get(`https://mdc-backend.onrender.com/Appointment/getECGAppointments`, {
          params: { userId }
        });

        // Combine all the results into one array
        const allAppointments = [
          ...dgResponse.data.appointment,
          ...regularResponse.data.appointment,
          ...ecgResponse.data.appointment
        ];

        // Store appointments in the state
        setAppointments(allAppointments);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, [userId]); // Runs once after component mounts

  return (
    <div>
      <h2>Your Appointments</h2>
      {appointments.length > 0 ? (
        <table border="1" cellPadding="10" style={{ width: '100%', textAlign: 'left' }}>
          <thead>
            <tr>
              <th>Test Type</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.testType}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No appointments found.</p>
      )}
    </div>
  );
};

export default Profile;
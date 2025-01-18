import React from 'react';
import '../assets/Styles/ECG.css';
import { useNavigate } from 'react-router-dom';

const ECG = () => {
  const navigate = useNavigate();
  // const [path, setPath] = useState()

    const handleRedirect = (path) => {
        navigate(path)
    };
    
return (
    <div className='ECGContainer'>

      <div className="category">
        <h2>ECG</h2>
        An ECG is a fundamental tool in cardiology, 
        offering a quick and non-invasive method to assess heart health. 
        While it provides valuable information about the heart's rhythm and electrical activity, 
        it is often used in conjunction with other tests and clinical findings to diagnose or monitor heart conditions accurately.
        <button type='submit' onClick={() => handleRedirect('/BookECG')}>Book Appointment</button>
      </div>
    </div>

);

};

export default ECG;
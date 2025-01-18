import React from 'react';
import '../assets/Styles/DigitalXRay.css';
import { useNavigate } from 'react-router-dom';

const XRay = () => {
  const navigate = useNavigate();
  // const [path, setPath] = useState()

    const handleRedirect = (path) => {
        navigate(path)
    };
  return (
    
    <div className='XRayContainer'>
        <div className='category'>
            <h1>X-Ray Examiation</h1>
            <ul className='test-list'>
                <li>Chest(PA)</li>
                <li>Right/Left Chest Lateral</li>
                <li>Right/Left Chest Ribs</li>
                <li>L. S. Spine(AP/Lat)</li>
                <li>Cervical Spine(AP/Lat)</li>
                <li>Right/Left Elbow(AP/Lat)</li>
                <li>Right/Left Wrist(AP/Lat)</li>
                <li>Right/Left Hand(AP/Lat)</li>
                <li>P. N. S. (W/C)</li>
                <li>Skull(AP/Lat)</li>
                <li>Right/Left Mastoids</li>
                <li>Right/Left Shoulder(AP/Lat)</li>
                <li>Right/Left Knee Joint(AP/Lat)</li>
                <li>Right/Left Ankle Joint(AP/Lat)</li>
                <li>Right/Left Foot(AP/Lat)</li>
                <li>Hip Joint(AP/Lat)</li>
                <li>Pelvis C Both Hip Joint(AP)</li>
                <li>T. M. Joints(Open/Closed)</li>
            </ul>
            <button type='submit' onClick={() => handleRedirect('/BookDigitalxRay')}>Book Appointment</button>
        </div>

    </div>
  );
};

export default XRay;
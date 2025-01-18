import React , { useState } from 'react'
import { useNavigate } from 'react-router-dom';

// import logo from './assets/img5.jpg'
// import './App.css'

function Services(){
  const navigate = useNavigate();
  // const [path, setPath] = useState()

    const handleRedirect = (path) => {
        navigate(path)
    };
    return(
        <section className="services" id="services">
          <h2>Our Services</h2>
          <div className="service-grid">
            <div className="service" onClick={() => handleRedirect('pathology')} >
              {/* <img src="service1.jpg" alt="Service 1" /> */}
              <h3>Pathology</h3>
              <p>Detailed pathology analysis for accurate diagnosis.</p>
            </div>
            <div className="service" onClick={() => handleRedirect('DigitalXRay')}>
              {/* <img src="service2.jpg" alt="Service 2" /> */}
              <h3>Digital X-Ray</h3>
              <p>Advanced imaging technologies for accurate diagnosis.</p>
            </div>
            <div className="service" onClick={() => handleRedirect('ECG')}>
              {/* <img src="service3.jpg" alt="Service 3" /> */}
              <h3>E.C.G</h3>
              <p>An electrocardiogram is a medical test that records the electrical activity
                of the heart over a period of time using electrodes placed on the skin.</p>
            </div>
          </div>
        </section>
    )    
}

export default Services;
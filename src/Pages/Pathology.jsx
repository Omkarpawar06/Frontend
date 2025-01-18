import React from 'react';
import '../assets/Styles/Pathology.css';
import { useNavigate } from 'react-router-dom';

const Pathology = () => {
  const navigate = useNavigate();
  const userId = sessionStorage.getItem("userId")
  // const [path, setPath] = useState()

    const handleRedirect = (path) => {
      if(userId){
        navigate(path)
      }else{
        alert("please login before booking....")
      }
    };
  return (
    
    <div className='pathalogyContainer'>

      <div className="category">
        <h2>Haematology</h2>
        <ul className="test-list">
          <li>Complete Blood Count (CBC)</li>
          <li>ESR</li>
          <li>Malarial Parasite</li>
          <li>Reticulocyte Count</li>
          <li>APTT</li>
          <li>Prothrombin Time (PT)</li>
          <li>Blood Group</li>
          <li>G6 PD</li>
          <li>Malarial Antigen</li>
        </ul>
        <button type='submit' onClick={() => handleRedirect('/BookPathology')}>Book Appointment</button>
      </div>
      
      <div className="category">
        <h2>Serology</h2>
        <ul className="test-list">
          <li>Widal Test</li>
          <li>R. A. Test</li>
          <li>C. R. P.</li>
          <li>V. D. R. L.</li>
          <li>A. S. O.</li>        
          <li>Coomb's Test</li>
          <li>Mantoux Test</li>
          <li>RH Antibody Titre</li>
          <li>B HCG</li>
          <li>Urine Pregnancy Test</li>
        </ul>
        <button type='submit' onClick={() => handleRedirect('/BookPathology')}>Book Appointment</button>
      </div>

      <div className="category">
        <h2>Profile</h2>
        <ul className="test-list">
          <li>Lipid Profile (Cholesterol, Triglycerides, HDL, LDL)</li>
          <li>Renal Profile</li>
          <li>Liver Function Tests (SGOT, SGPT, Alkaline Phosphatase)</li>
          <li>Diabetes Profile</li>
          <li>Fever Profile</li>
          <li>Anaemia Profile</li>
          <li>Antenatal Profile</li>
          <li>Triple Marker Test</li>
        </ul>
        <button type='submit' onClick={() => handleRedirect('/BookPathology')}>Book Appointment</button>
      </div>

      <div className="category">
        <h2>Hormone Test</h2>
        <ul className="test-list">
          <li>Thyroid Function Tests (T3, T4, TSH)</li>
          <li>F.S.H</li>
          <li>L.H</li>
          <li>Prolactin</li>
          <li>Testosterone (Total)</li>
          <li>DHEAS</li>
          <li>Parathyroid Hormone</li>
        </ul>
        <button type='submit' onClick={() => handleRedirect('/BookPathology')}>Book Appointment</button>
      </div>
      
      <div className='category'>
        <h2>Histopathology & Cytology</h2>
        <ul className='test-list'>
        <li>Histopathology(Small/Large)</li>
        <li>Histopathology Second</li>
        <li>Opinion Slides</li>
        <li>Cytology PAP Smeer</li>
        <li>Fine Needle Aspiration</li>
        <li>Cytology(FNAC)</li>
        </ul>
        <button type='submit' onClick={() => handleRedirect('/BookPathology')}>Book Appointment</button>
      </div>
      
      <div className='category'>
        <h2>Body Fluids</h2>
        <ul className="test-list">
        <li>Semen Routine</li>
        <li>CSF/Ascitic/Pleural Routine</li>
        <li>Sputum Routine</li>
        <li>Examination/AFB</li>
        <li>Fluid for malignant cells</li>
        </ul>
        <button type='submit' onClick={() => handleRedirect('/BookPathology')}>Book Appointment</button>
      </div>
      
      <div className="category">
        <h2>Urine</h2>
        <ul className="test-list">
          <li>Urine Routine</li>
          <li>Urine Accetone</li>
          <li>24 Hour Urine</li>
        </ul>
        <button type='submit' onClick={() => handleRedirect('/BookPathology')}>Book Appointment</button>
      </div>

      <div className='category'>
        <h2>Stool</h2>
        <ul className="test-list">
        <li>Stool Routine</li>
        </ul>
        <button type='submit' onClick={() => handleRedirect('/BookPathology')}>Book Appointment</button>
      </div>

      <div className='category'>
        <h2>Microbiology</h2>
        <ul className="test-list">
        <li>Sputum AFB Culture</li>
        <li>Blood Culture</li>
        <li>Urine Culture/Sensitivity</li>
        </ul>
        <button type='submit' onClick={() => handleRedirect('/BookPathology')}>Book Appointment</button>
      </div>

      <div className='category'>
        <h2>Bio Chemistry</h2>
        <ul className="test-list">
        <li>Blood Sugar Fasting</li>
        <li>Blood Sugar Post-Prandial</li>
        <li>Blood Sugar Random</li>
        <li>Blood Sugar Post-Glucose</li>
        <li>GTT</li>
        <li>Glycosylated Hb/HbAlc</li>
        <li>Blood Urea/Bun</li>
        <li>Creatinine</li>
        <li>Uric Acid</li>
        <li>Calcium</li>
        <li>Phosphorous</li>
        <li>HDL Cholesterol</li>
        <li>Cholesterol</li>
        <li>Bilirubin</li>
        <li>LDH</li>
        <li>SGPT</li>
        <li>SGOT</li>
        <li>Triglycarides</li>
        <li>Alkaline Phosphate</li>
        <li>Protien/Albumin</li>
        <li>Amylase</li>
        <li>Lipase</li>
        <li>CPK,MB</li>
        <li>CPK</li>
        <li>s.Electrolytes</li>
        </ul>
        <button type='submit' onClick={() => handleRedirect('/BookPathology')}>Book Appointment</button>
      </div>

    </div>
  );
};

export default Pathology;
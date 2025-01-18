import React from 'react';
import { Route , Routes } from 'react-router-dom'
import Home from '../src/Pages/Home';
import Pathology from '../src/Pages/Pathology';
import Navigate from "../src/assets/Components/Navigate"
import Login from '../src/Pages/Login';
import DigitalXRay from '../src/Pages/DigitalXRay';
import BookPathology from '../src/Pages/BookPathology';
import Register from './Pages/Register';
import './App.css';
import AdminPanel from './Pages/AdminPanel';
import BookDigitalXRay from './Pages/BookDigitalXRay';
import ECG from './Pages/ECG';
import AdminLogin from '../src/Pages/AdminLogin';
import AdminList from '../src/Pages/AdminList';
import AppointmentList from '../src/Pages/AppointmentList';
import BookECG from './Pages/BookECG';
import Feedback from './Pages/Feedback';
import Profile from './Pages/Profile';
import Navbar from './assets/Components/Navbar';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Pathology' element={<Pathology/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/DigitalXRay' element={<DigitalXRay/>}/>
        <Route path='/ECG' element={<ECG/>}/>
        <Route path='/BookPathology' element={<BookPathology/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/AdminPanel' element={<AdminPanel/>}/>
        <Route path='/BookDigitalxRay' element={<BookDigitalXRay/>}/>
        <Route path='/BookECG' element={<BookECG/>}/>
        <Route path='/AdminLogin' element={<AdminLogin/>}/>
        <Route path='/AdminList' element={<AdminList/>}/>
        <Route path='/AppointmentList' element={<AppointmentList/>}/>
        <Route path='/Feedback' element={<Feedback/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
    </div>
    // <div>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/Profile" element={<Profile />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/Register" element={<Register />} />
    //   </Routes>
    // </div>
  );
}

export default App;

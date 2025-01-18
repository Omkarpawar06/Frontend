import React , { useState } from 'react'
// import logo from './assets/img5.jpg'
// import './App.css'

function Contact(){
    return(
        <section className="contact" id="contact">
          <h2>Contact Us</h2>
          <div className="contact-form">
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>

              <button type="submit" className="btn">Submit</button>
            </form>
          </div>
        </section>
    )    
}

export default Contact;
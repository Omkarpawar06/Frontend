import React, { useState } from 'react';
import '../assets/Styles/Feedback.css';

const FeedbackPage = () => {

  return (
    <div className="feedback-container">
      <h2>Feedback Page</h2>
      {/* {submitted && <p className="success-message">Thank you for your feedback!</p>} */}
      
      <form className="feedback-form" >
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            // required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            // required
          />
        </div>

        <div className="form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            // value={feedback}
            // onChange={(e) => setFeedback(e.target.value)}
            // required
          />
        </div>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackPage;

import React from "react";
import "../style/FeedbackForm.css";
import  Form from './Form'

const FeedbackForm = () => {
  return (
    <div className="feedbackForm">
      <div className="feedbackForm__title">
        <h2>Thank you so much for taking the time!</h2>
        <p>Please provide the below the details!</p>
      </div>
      <Form/>

    </div>
  );
};

export default FeedbackForm;

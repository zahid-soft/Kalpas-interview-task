import React, { useState } from "react";
import UserReader from "./UserReader";
import "../style/Sidebar.css";
import ViewToggle from "./ViewToggle";
import FeedBackButton from "./FeedBackButton";
import FeedbackForm from "./FeedbackForm";

const Sidebar = ({vertical,horizontal}) => {
  const [feedback, setfeedback] = useState(true);

  const handleFrom = () => {
    setfeedback(!feedback);
  };

  return (
    <div className={feedback ? "sidebar" : "feedbackform"}>
      <div className="sidebar__form">
        <div>
          <UserReader />
          {feedback ? (
            <div>
              <ViewToggle vertical={vertical} horizontal={horizontal} />
              <FeedBackButton feedback={handleFrom} bg={"rgb(155,243,204)"} />
            </div>
          ) : (
            <FeedBackButton feedback={handleFrom} bg={"rgb(236,164,167)"} />
          )}
        </div>

        {feedback ? null : <FeedbackForm />}
      </div>
    </div>
  );
};

export default Sidebar;

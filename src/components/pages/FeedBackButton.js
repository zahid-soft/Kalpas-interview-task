import React from 'react';
import '../style/FeedBackButton.css'

const FeedBackButton = ({feedback,bg}) => {
    return (
        <div className="feedBackButton">
            <h2>Have a Feedback?</h2>
            <button style={{background:bg}} onClick={feedback}>We're Listening!</button>
        </div>
    )
}

export default FeedBackButton

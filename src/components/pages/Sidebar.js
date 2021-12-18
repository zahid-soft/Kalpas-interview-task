import React, { useState } from 'react'
import UserReader from './UserReader'
import '../style/Sidebar.css'
import ViewToggle from './ViewToggle'
import FeedBackButton from './FeedBackButton'
import FeedbackForm from './FeedbackForm'

const Sidebar = () => {
    const [feedback, setfeedback] = useState(true)

   const handleFrom = () => {
        setfeedback(!feedback)
    }

    return (
        <div className={feedback ?"sidebar": "feedbackform"}>
        <div >
        <div className='sidebar__form'>
        <UserReader/>
        {
            feedback ? null : <FeedbackForm />
        }
        </div>
        
        {
            feedback ? 
                <div>
                <ViewToggle/>
                <FeedBackButton feedback={handleFrom} bg={'rgb(155,243,204)'} />
                </div>
             : 
             <FeedBackButton feedback={handleFrom} bg={'rgb(236,164,167)'} />
        }
        </div>
           
        </div>
    )
}

export default Sidebar

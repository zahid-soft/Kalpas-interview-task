import React, { useState } from 'react'
import UserReader from './UserReader'
import '../style/Sidebar.css'
import ViewToggle from './ViewToggle'
import FeedBackButton from './FeedBackButton'

const Sidebar = () => {
    const [feedback, setfeedback] = useState(true)

   const handleFrom = () => {
        setfeedback(!feedback)
    }

    return (
        <div className={feedback ?"sidebar": "feedbackform"}>
        <div >
        <UserReader/>
        {
            feedback ? 
                <div>
                <ViewToggle/>
                <FeedBackButton feedback={handleFrom} bg={'rgb(155,243,204)'} />
                </div>
             : 
             <div>
             <FeedBackButton feedback={handleFrom} bg={'rgb(236,164,167)'} />
             </div>
        }
        </div>
           
        </div>
    )
}

export default Sidebar

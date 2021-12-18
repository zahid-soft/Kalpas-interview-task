import React from 'react';
import '../style/UserReader.css'

const UserReader = () => {
    return (
        <div className="UserReader">
        <div className="UserReader__image" >
        <img src= 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=50' alt="user" />
        </div>
        <div className="UserReader__info">
        <h3>Hi, Reader</h3>
        <p>Here's Your News!</p>
        </div>
      

            
        </div>
    )
}

export default UserReader

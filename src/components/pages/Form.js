import React from 'react'
import * as AiIcons from 'react-icons/ai';

const formfield = () => {
    return (
        <div className="feedbackForm__form">
        <form>
          <p>
            <label className="feedbackForm__label">First Name:</label>
          </p>
          <p>
            <input
              type='text'
              name='first name'
              className="feedbackForm__input"
              placeholder='john'
            />
          </p>
          <p>
            <label className="feedbackForm__label">Last Name:</label>
          </p>
          <p>
            <input
              type='text'
              name='last name'
              className="feedbackForm__input"
              placeholder='Doe'
            />
          </p>

          <p>
            <label className="feedbackForm__label">Address:</label>
          </p>
          <p>
            <textarea
              type='text'
              name='address'
              className="feedbackForm__textarea"
              placeholder='Enter your full postal Address'
            />
          </p>

          <p>
            <label className="feedbackForm__label">Country:</label>
          </p>
          <p className="feedbackForm__countryInput">
            <input
              type='text'
              name='country'
              className="feedbackForm__country"
              placeholder='India'
            /><span className="feedback__searchIcon" ><AiIcons.AiOutlineSearch/></span>
          </p>

          <p>
            <label className="feedbackForm__label">Email ID:</label>
          </p>
          <p>
            <input
              type='email'
              name='email'
              className="feedbackForm__input"
              placeholder='example@gmail.com'
            />
          </p>

           
          <p>
            <label className="feedbackForm__label">Phone Number:</label>
          </p>
          <p>
            <input
              type='tel'
              name='phone number'
              className="feedbackForm__input"
              placeholder='123456'
            />
          </p>

          <button className="feedbackForm__btn" type="submit">
            Submit FeedBack
          </button>
        </form>
      </div>
    )
}

export default formfield


























// const content = {
//     inputs: [
//         {
//             lable: 'First Name:',
//             name : 'first name',
//             type : 'text'
//         },
//         {
//             lable : 'Last Name:',
//             name: 'last name',
//             type : 'text'
//         },
//         {
//             lable : 'Address:',
//             name: 'address',
//             type : 'address'
//         },
//         {
//             lable : 'Country:',
//             name: 'country',
//             type : 'text'
//         },
//         {
//             lable : 'Email ID:',
//             name: 'email id',
//             type : 'email'
//         },
//         {
//             lable : 'Phone Number:',
//             name: 'phone number',
//             type : 'tel'
//         },
//     ]
// }

// export default content
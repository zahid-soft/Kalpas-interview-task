import React, { useEffect, useState } from "react";
import axios from "axios";
import * as AiIcons from "react-icons/ai";

const Form = () => {
  const [countries, setCountries] = useState([]);
  const [text, setText] = useState("");
  const [suggestion, setSuggestions] = useState([]);

  const[formData,setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phone: '',
  });




  useEffect(() => {
    const loadCountries = async () => {
      const response = await axios.get("https://restcountries.com/v2/all");
      setCountries(response.data);
    };
    loadCountries();
  }, []);

  const searchCountries = (text) => {
    let matches = [];
    if (text.length <= 0) {
      setSuggestions([]);
      setText("");
    } else {
      matches = countries.filter((country) => {
        const regex = new RegExp(`${text}`, "gi");
        return country.name.match(regex);
      });
      setText(text);
      setSuggestions(matches);
    }
  };

  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
  };

  let name,value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value

    setFormData({...formData, [name]:value})
    console.log(formData)
  }

  return (
    <div className="feedbackForm__form">
      <form method="POST">
        <p>
          <label className="feedbackForm__label">First Name:</label>
        </p>
        <p>
          <input
            type="text"
            name="firstName"
            className="feedbackForm__input"
            placeholder="john"
            value={formData.firstName}
            onChange={postUserData}
          />
        </p>
        <p>
          <label className="feedbackForm__label">Last Name:</label>
        </p>
        <p>
          <input
            type="text"
            name="lastName"
            className="feedbackForm__input"
            placeholder="Doe"
            value={formData.lastName}
            onChange={postUserData}
          />
        </p>

        <p>
          <label className="feedbackForm__label">Address:</label>
        </p>
        <p>
          <textarea
            type="text"
            name="address"
            className="feedbackForm__textarea"
            placeholder="Enter your full postal Address"
            value={formData.address}
            onChange={postUserData}
          />
        </p>

        <p>
          <label className="feedbackForm__label">Country:</label>
        </p>
        <p className="feedbackForm__countryInput">
          <input
            onChange={(e) => searchCountries(e.target.value)}
            type="text"
            name="country"
            className="feedbackForm__country"
            placeholder="India"
            value={text}
          />
          <span className="feedback__searchIcon">
            <AiIcons.AiOutlineSearch />
          </span>
        </p>

        {suggestion &&
          suggestion.map((item, index) => (
            <div
              key={index}
              className="feedbackForm__suggestion"
              onClick={() => onSuggestHandler(item.name)}
            >
              <p> {item.name}</p>
            </div>
          ))}

        <p>
          <label className="feedbackForm__label">Email ID:</label>
        </p>
        <p>
          <input
            type="email"
            name="email"
            className="feedbackForm__input"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={postUserData}
          />
        </p>

        <p>
          <label className="feedbackForm__label">Phone Number:</label>
        </p>
        <p>
          <input
            type="tel"
            name="phone"
            className="feedbackForm__input"
            placeholder="123456"
            value={formData.phone}
            onChange={postUserData}
          />
        </p>

        <button className="feedbackForm__btn" type="submit">
          Submit FeedBack
        </button>
      </form>
    </div>
  );
};

export default Form;

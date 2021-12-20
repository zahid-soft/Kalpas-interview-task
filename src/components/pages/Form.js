import React, { useEffect, useState } from "react";
import axios from "axios";
import * as AiIcons from "react-icons/ai";

const Form = () => {

  const [countries, setCountries] = useState([]);
  const [text, setText] = useState("");
  const [suggestion, setSuggestions] = useState([]);

  useEffect(() => {
    const loadCountries = async () => {
      const response = await axios.get("https://restcountries.com/v2/all");
      setCountries(response.data);
    };
    loadCountries();
  }, []);

  const searchCountries = (text) => {
    let matches = [];
    if (text.length<=0){
      setSuggestions([]);
      setText('')
     
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

  return (
    <div className="feedbackForm__form">
      <form>
        <p>
          <label className="feedbackForm__label">First Name:</label>
        </p>
        <p>
          <input
            type="text"
            name="first name"
            className="feedbackForm__input"
            placeholder="john"
          />
        </p>
        <p>
          <label className="feedbackForm__label">Last Name:</label>
        </p>
        <p>
          <input
            type="text"
            name="last name"
            className="feedbackForm__input"
            placeholder="Doe"
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
          />
        </p>

        <p>
          <label className="feedbackForm__label">Phone Number:</label>
        </p>
        <p>
          <input
            type="tel"
            name="phone number"
            className="feedbackForm__input"
            placeholder="123456"
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

import axios from "axios";
import React, { useState, useEffect } from "react";
import * as AiIcons from "react-icons/ai";
import ReactPaginate from "react-paginate";
import "../style/UserData.css";
import HorizontalData from "./HorizontalData";
import VerticalData from "./VerticalData";

const UserData = ({verticaldata}) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const loaduser = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setUserData(response.data);
    };
    loaduser();
  }, []);

  const delteUser = (id) => {
    const updatedata = userData.filter((item) => item.id !== id)
    setUserData(updatedata)
  };

  return (
    <div className="userdata">
    { verticaldata ? 
      <div>
      {userData.map((item, i) => (
        <div className="userdata__contain_horizontal">
          <div className="userdata__list_horizontal">
            <HorizontalData title={item.title} body={item.body} />
          </div>
          <div className="userdata_button_">
            <AiIcons.AiOutlineClose
              size="1.8em"
              color="rgb(251,142,143)"
              onClick={() => delteUser(item.id)}
            />
          </div>
        </div>
      ))}
      </div> :
      <div>
      {userData.map((item, i) => (
        <div className="userdata__contain">
          <div className="userdata__list">
            <VerticalData title={item.title} body={item.body} />
          </div>
          <div className="userdata_button">
            <AiIcons.AiOutlineClose
              size="1.8em"
              color="rgb(251,142,143)"
              onClick={() => delteUser(item.id)}
            />
          </div>
        </div>
      ))}

     
      </div>
      }
    </div>
  );
};

export default UserData;

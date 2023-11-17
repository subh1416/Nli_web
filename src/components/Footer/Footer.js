import React from "react";
import facebook from "../../assets/images/facebook.svg";
import linkedin from "../../assets/images/linkedin.svg";
import github from "../../assets/images/github.svg";
import twitter from "../../assets/images/twitter.svg";
import "./Footer.css";

export default function Footer() {
  return (

    <div className="foot">

      <div className="add">
        <span className="tur"> New Leap Initiative</span>
        <span className="addres">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
          minima corporis aut alias magni soluta veniam dolorem at velit nisi?
        </span>
      </div>
      <div className="ico">
        <ul>
          <li>
            <img src={facebook} style={{ width: "20px", height: "20px" }} />
          </li>
          <li>
            <img src={linkedin} style={{ width: "20px", height: "20px" }} />
          </li>
          <li>
            <img src={github} style={{ width: "20px", height: "20px" }} />
          </li>
          <li>
            <img src={twitter} style={{ width: "20px", height: "20px" }} />
          </li>
        </ul>

      </div>
      
    </div>
  );
}

import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./Summary.css";

function Summary() {
  return (
    <div className="summary">
      <div className="or-city ">
        <CiLocationOn style={{background:"white"}} /> Origin,Port,City
      </div>
      <div className="des-city">
        <CiLocationOn style={{background:"white"}}/>
        Destination, Port, City
      </div>
      <div className="date">
        <MdDateRange style={{background:"white"}}/>
        13 April 2023
      </div>
      <div className="">Load</div>
      <div className="">
        <AiOutlineArrowRight style={{backgroundColor:"#6F57E9"}} />
      </div>
    </div>
  );
}

export default Summary;

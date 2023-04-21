import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { AiOutlineEdit} from "react-icons/ai";
import {GiWeight} from 'react-icons/gi'

import "./Summary.css";

function City() {
  return (
    <div className="summary">
      <div className="or-city">
        <CiLocationOn /> Delhi, 110003
      </div>
      <div className="des-city">
        <CiLocationOn />
        Shanghai 200080
      </div>
      <div className="date">
        <MdDateRange />
        13 April 2023
      </div>
      <div className=""><GiWeight/>114.21KG - AIR</div>
      <div className="">
        <AiOutlineEdit style={{color:"blue"}}/>
      </div>
    </div>
  );
}

export default City;

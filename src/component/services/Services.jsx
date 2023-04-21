import React from "react";
import './Services.css'
import {BsTrainFreightFrontFill} from "react-icons/bs"
import {TfiWorld} from "react-icons/tfi"
import {RiHandbagFill} from 'react-icons/ri'

function Services() {
  return (
    <div className="services">
      <h6>Services</h6>
      <div className="service-detail">
        <div className="freight card">
          <h6><BsTrainFreightFrontFill/> Freight Services</h6>
          <hr className="hr"/>
          <p className="para">
            Open new Opportunites to grow your busniess. Enter new markets and
            discover new contitnents, We are with you, door-to-door.
          </p>
        </div>
        <div className="business card">
          <h6><RiHandbagFill/> Services</h6>
          <hr className="hr"/>
          <p className="para">
            We support your goals for growth with cargo insurance, online
            payments and paperless workflow. Take your business to the next
            level.
          </p>
        </div>
        <div className="shipping card">
          <h6><TfiWorld/> Shipping & Logistics</h6>
          <hr className="hr"/>
          <p className="para">
            Find powerful solutions to meet your diverse transportation needs.
            Agile solutions to handle all your supply chain needs.
          </p>
        </div>
        <div className="support card">
          <h6>24/7 Support</h6>
          <hr className="hr"/>
          <p className="para">
            Receive support from our experts all over the world at every stage
            of the process, 24/7.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;

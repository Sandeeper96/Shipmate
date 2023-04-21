import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { GiCommercialAirplane } from "react-icons/gi";
import { GiWeightScale } from "react-icons/gi";
import { MdPallet } from "react-icons/md";
import "./BookingSummary.css";
import { AiFillStar } from "react-icons/ai";

function BookingSummary() {
  return (
    <div className="allDetail">
      <div className="booking">
        <div className="booking-summary">
          Booking summary
          <div className="cities">
            <div className="delhi">
              <AiTwotoneHome />
              Delhi,
              <br /> 110003 india
            </div>
            <div className="express">
              express
              <GiCommercialAirplane />
            </div>
            <div className="shanghai">
              <AiTwotoneHome />
              Shanghai,
              <br /> 200080 chine
            </div>
          </div>
        </div>
        <div className="weight-load">
          <div className="weight">
            Total Weight/Volume
            <div className="logo">
              <GiWeightScale />
            </div>
          </div>
          <div className="load">
            Load
            <div className="logo">
              <MdPallet />
            </div>
          </div>
        </div>
        <div className="site">
          <div className="seller">Seller: Primetime Worldwide</div>
          <div className="insurance">Insurance:Xcover.com</div>
        </div>
      </div>
      <div className="payment">
        <div className="payment-head">
          <h4>
            Price details
            <span>
              <AiFillStar />
              Known shipper
            </span>
          </h4>
        </div>

        <div className="seller-detail">
          <p>Seller's Quote &nbsp; &nbsp; &nbsp; $ 3,659.25</p>
          <hr />
        </div>
        <div className="tax">
          <p>Duties and Taxes &nbsp;&nbsp;&nbsp; Not Included</p>
          <p>Insurance &nbsp;&nbsp;&nbsp; $ 323.40</p>
          <p>Based on the items cost</p>
          <hr />
        </div>
        <div className="promo">
          <p>Add a promo code</p>
          <p>Platform fee &nbsp;&nbsp;&nbsp;$ 119.48</p>
          <hr />
        </div>
        <div className="total-price">
          <h1>Total:&nbsp;&nbsp;&nbsp;$ 4,102.13</h1>
        </div>
        <button type="button" className="check">Checkout</button>
      </div>
    </div>
  );
}

export default BookingSummary;

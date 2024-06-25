import React from "react";
import "./BusinessDetails.css";
import ServiceList from "../ServiceList/ServiceList";

function BusinessDetails() {
  return (
    <div className="general-container">
      <div className="top-info">
        <h1>Vaine Beauty</h1>
        <div>
          <p>Budapest, Hungary</p>
          <p>4.9 (3.8k)</p>
          <hr />
        </div>
      </div>
      <div className="mid-info">
        <p>
          Welcome to "Vaine Beauty", An Upscale Nail Salon Located in The Heart
          of Budapest, Hungary.
        </p>
        <hr></hr>
      </div>

      <div className="lower-info">
        <ServiceList />
      </div>

      <div className="emails-input">
        <h4>Emails Area</h4>
        <form className="email-form">
          <input type="email" placeholder="Your Email" />
          <button type="submit">Submit!</button>
        </form>
        <form className="email-form">
          <input type="email" placeholder="Your Email" />
          <button type="submit">Submit!</button>
        </form>
      </div>
    </div>
  );
}

export default BusinessDetails;

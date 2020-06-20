import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.835228513008!2d80.2169764!3d12.9904673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdb3a29009036c251!2sPhoenix%20Marketcity!5e0!3m2!1sen!2sin!4v1592349539571!5m2!1sen!2sin"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
        title="Venue"
      ></iframe>
      <div className="location_tag">
        <div className="">Location</div>
      </div>
    </div>
  );
};
export default Location;

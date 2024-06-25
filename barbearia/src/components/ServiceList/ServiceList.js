import React, { useState } from "react";
import "./ServiceList.css";

function ServiceList() {
  const [selectedServices, setSelectedServices] = useState({
    manicure: false,
    pedicure: false,
  });

  const handleServiceChange = (service) => {
    setSelectedServices({
      ...selectedServices,
      [service]: !selectedServices[service],
    });
  };

  return (
    <div className="service-list">
      <h3>Want a Service? </h3>
      <p>We Can Help You!</p>
      <label className="service-item">
        <input
          type="checkbox"
          name="manicure"
          checked={selectedServices.manicure}
          onChange={() => handleServiceChange("manicure")}
        />
        Manicure Services
      </label>
      <label className="service-item">
        <input
          type="checkbox"
          name="pedicure"
          checked={selectedServices.pedicure}
          onChange={() => handleServiceChange("pedicure")}
        />
        Pedicure Services
      </label>
    </div>
  );
}

export default ServiceList;

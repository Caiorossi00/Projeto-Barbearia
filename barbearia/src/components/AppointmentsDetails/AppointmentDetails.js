import React from "react";
import "./AppointmentDetails.css";

const AppointmentDetails = () => {
  const haircuts = [
    {
      name: "Pixie Cut",
      rating: 4.4,
      imageUrl:
        "https://images.unsplash.com/photo-1618049049816-43a00d5b0c3d?q=80&w=1880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Bob Haircut",
      rating: 4.9,
      imageUrl:
        "https://images.unsplash.com/photo-1568339434343-2a640a1a9946?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Long Layers",
      rating: 4.5,
      imageUrl:
        "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Balayage",
      rating: 4.8,
      imageUrl:
        "https://images.unsplash.com/photo-1456327102063-fb5054efe647?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="appointments-container">
      <div className="ap-top-info">
        <h1>Appointment Details</h1>
        <hr></hr>
        <button>Check Info</button>
      </div>
      <div className="ap-mid-info">
        <h2>Salon</h2>
        <div className="located-display">
          <div className="located-text">
            <h4>Vaine Beauty</h4>
            <p>Budapest, Hungary</p>
            <p>9:00AM</p>
          </div>
          <div className="img-appointment">
            <img
              src="https://images.unsplash.com/photo-1719150016704-270c5a0deee4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="imagem"
            />
          </div>
        </div>
      </div>

      <div className="ap-lower-info">
        <h1>Find Your Hairstyle</h1>
        <div className="hairstyles-display">
          {haircuts.map((haircut) => (
            <div key={haircut.name} className="hairstyle">
              <img src={haircut.imageUrl} alt={haircut.name} />
              <p>{haircut.name}</p>
              <p>{haircut.rating}</p>
            </div>
          ))}
        </div>
        <button>Book Now</button>
      </div>
    </div>
  );
};

export default AppointmentDetails;

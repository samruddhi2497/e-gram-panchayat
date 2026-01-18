import React from "react";
import "../../Modules/Citizen/Citizen.css";

const CitizenProfile = () => {
  return (
    <>
      <h2>My Profile</h2>

      <div className="profile-card">
        <p><strong>Name:</strong> Samruddhi Chougale</p>
        <p><strong>Mobile:</strong> 9876543210</p>
        <p><strong>Aadhaar:</strong> XXXX-XXXX-1234</p>
        <p><strong>DOB:</strong> 01-01-1998</p>
        <p><strong>Address:</strong> Village Pune</p>

        <button>Edit Profile</button>
      </div>
    </>
  );
};

export default CitizenProfile;

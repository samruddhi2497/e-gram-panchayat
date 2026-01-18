// import React, { useState } from "react";
// import { services } from "../../mockdata/mockdata";
// import { useNavigate } from "react-router-dom";
// import "../../Modules/Citizen/Citizen.css";

// const CitizenService= () => {
//   const [search, setSearch] = useState("");
//   const navigate = useNavigate();

//   const filtered = services.filter((s) =>
//     s.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <>
//       <h2>All Services</h2>
//       <input
//         className="search-bar"
//         placeholder="Search service..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <div className="service-grid">
//         {filtered.map((s) => (
//           <div className="service-card" key={s.id}>
//             <h3>{s.name}</h3>
//             <p>{s.description}</p>
//             <button onClick={() => navigate(`/citizen/services/apply/${s.id}`)}>
//               Apply Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default CitizenService;
import React from 'react'

export default function CitizenService() {
  return (
    <div>CitizenService</div>
  )
}

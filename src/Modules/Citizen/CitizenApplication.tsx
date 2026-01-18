// import React from "react";
// import { applications } from "../../mockdata/mockdata";
// import "../../Modules/Citizen/Citizen.css";

// const CitizenApplications = () => {
//   return (
//     <>
//       <h2>My Applications</h2>

//       <table className="app-table">
//         <thead>
//           <tr>
//             <th>Application ID</th>
//             <th>Service</th>
//             <th>Date</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {applications.map((app) => (
//             <tr key={app.id}>
//               <td>{app.id}</td>
//               <td>{app.service}</td>
//               <td>{app.date}</td>
//               <td className={app.status.toLowerCase()}>{app.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default CitizenApplications;
import React from 'react'

export default function CitizenApplication() {
  return (
    <div>CitizenApplication</div>
  )
}

// import { Table, Button, Tag } from "antd";
// // import CitizenLayout if you want layout wrapping

// const approvedData = [
//   {
//     key: "1",
//     service: "Birth Certificate",
//     approvedDate: "05-01-2026",
//   },
//   {
//     key: "2",
//     service: "Residence Certificate",
//     approvedDate: "02-01-2026",
//   },
// ];

// const CitizenApprovedServices = () => {
//   return (
//     <div className="dashboard">
//       <h2>Approved Services</h2>

//       <Table
//         dataSource={approvedData}
//         pagination={false}
//         columns={[
//           {
//             title: "Service Name",
//             dataIndex: "service",
//           },
//           {
//             title: "Approved Date",
//             dataIndex: "approvedDate",
//           },
//           {
//             title: "Status",
//             render: () => <Tag color="green">Approved</Tag>,
//           },
//           {
//             title: "Action",
//             render: () => <Button type="link">Download Certificate</Button>,
//           },
//         ]}
//       />
//     </div>
//   );
// };

// export default CitizenApprovedServices;
import React from 'react'

export default function CitizenApprovedServices() {
  return (
    <div>CitizenApprovedServices</div>
  )
}

// import { Avatar, Dropdown, Menu } from "antd";
// import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";
// import { citizenMockData } from "../../../mockdata/mockdata";

// const CitizenTopbar = () => {
//   const navigate = useNavigate();
//   const user = citizenMockData.user;

//   const menu = (
//     <Menu>
//       <Menu.Item icon={<UserOutlined />} onClick={() => navigate("/citizen/profile")}>
//         My Profile
//       </Menu.Item>
//       <Menu.Divider />
//       <Menu.Item icon={<LogoutOutlined />}>Logout</Menu.Item>
//     </Menu>
//   );

//   return (
//     <div className="citizen-topbar">
//       <div>
//         <h4>Welcome, {user.name} 👋</h4>
//         <div className="quote">Digital India – Transparent Governance</div>
//       </div>

//       <Dropdown overlay={menu}>
//         <div className="profile-area">
//           <Avatar icon={<UserOutlined />} style={{ background: "#f97316" }} />
//           <strong>{user.name}</strong>
//         </div>
//       </Dropdown>
//     </div>
//   );
// };

// export default CitizenTopbar;
import React from 'react'

export default function CitizenTopbar() {
  return (
    <div>CitizenTopbar</div>
  )
}

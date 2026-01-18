// ================================
// Citizen Module – Mock Data
// ================================

// Logged-in Citizen
export const citizen = {
  id: 1,
  name:"Samruddhi Chougale",
  mobile: "9876543210",
  village: "Kolhapur",
  profilePhoto: "https://i.pravatar.cc/150?img=12",
};

// Services
export const services = [
  {
    id: 1,
    name: "Income Certificate",
    department: "Revenue",
    days: "7 Days",
  },
  {
    id: 2,
    name: "Birth Certificate",
    department: "Health",
    days: "5 Days",
  },
  {
    id: 3,
    name: "Residence Certificate",
    department: "Revenue",
    days: "10 Days",
  },
  {
    id: 4,
    name: "Property Tax",
    department: "Tax",
    days: "Immediate",
  },
];

// Applications
export const applications = [
  {
    id: 1001,
    serviceName: "Income Certificate",
    appliedDate: "12 Jan 2026",
    status: "Pending",
    certificate: false,
  },
  {
    id: 1002,
    serviceName: "Birth Certificate",
    appliedDate: "05 Jan 2026",
    status: "Approved",
    certificate: true,
  },
  {
    id: 1003,
    serviceName: "Residence Certificate",
    appliedDate: "01 Jan 2026",
    status: "Rejected",
    certificate: false,
    remark: "Document mismatch",
  },
];

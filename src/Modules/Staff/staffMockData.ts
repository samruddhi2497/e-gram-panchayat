// src/Modules/Staff/staffMockData.ts

export const pieData = [
  { name: "Approved", value: 40 },
  { name: "Pending", value: 30 },
  { name: "Rejected", value: 30 },
];

export const barData = [
  { month: "Jan", approved: 10, rejected: 4, pending: 3 },
  { month: "Feb", approved: 8, rejected: 6, pending: 2 },
  { month: "Mar", approved: 15, rejected: 2, pending: 5 },
];

export const COLORS = ["#16a34a", "#d97706", "#ef4444"];


// export const staffApplications = [
//   { id: "APP101", citizen: "Ravi Patil", service: "Income Certificate", status: "Pending" },
//   { id: "APP102", citizen: "Sneha More", service: "Residence Certificate", status: "Approved" },
//   { id: "APP103", citizen: "Amit Kale", service: "Water Connection", status: "Rejected" },
// ];
// src/mockdata/mockStaffData.ts

const services = [
  "Income Certificate",
  "Residence Certificate",
  "Water Connection",
  "Birth Certificate",
  "Caste Certificate",
  "Agriculture Subsidy",
  "Old Age Pension",
  "School Scholarship"
];

const citizens = [
  "Ravi Patil", "Sneha More", "Amit Kale", "Suman Jadhav", "Pooja Deshmukh", 
  "Rahul Patil", "Anita Wagh", "Soham Rane"
];

export const staffApplications = Array.from({length: 1000}, (_, i) => {
  const randomService = services[Math.floor(Math.random() * services.length)];
  const randomCitizen = citizens[Math.floor(Math.random() * citizens.length)];
  const statusRand = Math.random();
  const status = statusRand < 0.6 ? "Pending" : statusRand < 0.85 ? "Approved" : "Rejected";

  return {
    id: `APP${1000 + i}`,
    citizen: randomCitizen,
    service: randomService,
    status,
    department: ["Revenue","Water","Health","Education","Agriculture"][Math.floor(Math.random() * 5)]
  };
});


// staff mock data complaints 
// Complaint Type
export type PriorityType = "High" | "Medium" | "Low";
export type ComplaintStatus = "Pending" | "In Progress" | "Resolved";

export interface Complaint {
  id: number;
  citizen: string;
  department: string;
  priority: PriorityType;
  status: ComplaintStatus;
  date: string;
  description: string;
  location: string;
}

// Mock Complaints
export const staffComplaints: Complaint[] = [
  {
    id: 23,
    citizen: "Ramesh Patil",
    department: "Water",
    priority: "High",
    status: "Pending",
    date: "2026-01-31T10:30:00",
    description: "Water leakage near main road.",
    location: "Ward 3, Near Temple"
  },
  {
    id: 22,
    citizen: "Sita Jadhav",
    department: "Road",
    priority: "Medium",
    status: "Pending",
    date: "2026-01-30T14:20:00",
    description: "Big potholes on village road.",
    location: "Ward 2"
  },
  {
    id: 21,
    citizen: "Rahul Shinde",
    department: "Electricity",
    priority: "Low",
    status: "In Progress",
    date: "2026-01-29T09:15:00",
    description: "Street light not working.",
    location: "Near Bus Stop"
  },
  {
    id: 20,
    citizen: "Anita More",
    department: "Water",
    priority: "High",
    status: "Pending",
    date: "2026-01-31T12:00:00",
    description: "No water supply since morning.",
    location: "Ward 5"
  }
];

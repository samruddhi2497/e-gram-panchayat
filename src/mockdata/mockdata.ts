// ================================
// Citizen Module – Mock Data
// ================================

import AllServices from "../Modules/Citizen/applications/AllServices";

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
export interface ApprovedService {
  id: string;
  serviceName: string;
  approvalDate: string;
  department: string;
  certificateUrl: string;
}

export const approvedServicesData: ApprovedService[] = [
  {
    id: "GRM1023",
    serviceName: "Birth Certificate",
    approvalDate: "25 Jan 2026",
    department: "Health Department",
    certificateUrl: "#",
  },
  {
    id: "GRM1045",
    serviceName: "Income Certificate",
    approvalDate: "20 Jan 2026",
    department: "Revenue Department",
    certificateUrl: "#",
  },
  {
    id: "GRM1060",
    serviceName: "Caste Certificate",
    approvalDate: "18 Jan 2026",
    department: "Social Welfare",
    certificateUrl: "#",
  },
];
export interface RejectedService {
  id: string;
  serviceName: string;
  rejectionDate: string;
  department: string;
  reason: string;
}

// Mock data for rejected services
export const rejectedServicesData: RejectedService[] = [
  {
    id: "GRM2023",
    serviceName: "Birth Certificate",
    rejectionDate: "27 Jan 2026",
    department: "Health Department",
    reason: "Document missing",
  },
  {
    id: "GRM2045",
    serviceName: "Income Certificate",
    rejectionDate: "25 Jan 2026",
    department: "Revenue Department",
    reason: "Incorrect income details",
  },
  {
    id: "GRM2060",
    serviceName: "Caste Certificate",
    rejectionDate: "24 Jan 2026",
    department: "Social Welfare",
    reason: "Applicant name mismatch",
  },
];
export interface PendingService {
  id: string;
  serviceName: string;
  department: string;
  appliedDate: string;
  stage: string;
}

export const pendingServicesData: PendingService[] = [
  {
    id: "GRM301",
    serviceName: "Birth Certificate",
    department: "Health Department",
    appliedDate: "25 Jan 2026",
    stage: "Under Review",
  },
  {
    id: "GRM302",
    serviceName: "Income Certificate",
    department: "Revenue Department",
    appliedDate: "26 Jan 2026",
    stage: "Waiting for Documents",
  },
  {
    id: "GRM303",
    serviceName: "Caste Certificate",
    department: "Social Welfare",
    appliedDate: "27 Jan 2026",
    stage: "Under Review",
  },
];
export interface Service {
  id: string;
  name: string;
  department: string;
}

export const servicesList: Service[] = [
  { id: "S001", name: "Birth Certificate", department: "Health Department" },
  { id: "S002", name: "Income Certificate", department: "Revenue Department" },
  { id: "S003", name: "Caste Certificate", department: "Social Welfare" },
  { id: "S004", name: "Marriage Certificate", department: "Social Welfare" },
  { id: "S005", name: "Death Certificate", department: "Health Department" },
];


// AllServices 
export interface AllService {
  id: string;
  name: string;
  department: string;
  category: string;
  description: string;
  status: "Available" | "Applied" | "Pending" | "Approved" | "Rejected";
  appliedDate?: string;
  approvedDate?: string;
}

export const AllServicesList: AllService[] = [
  {
    id: "E001",
    name: "Electricity Bill Payment",
    department: "Electricity Dept",
    category: "Electricity",
    description: "Pay electricity bills online",
    status: "Available",
  },
  {
    id: "E002",
    name: "Meter Complaint",
    department: "Electricity Dept",
    category: "Electricity",
    description: "Lodge meter complaints",
    status: "Approved",
    appliedDate: "10 Jan 2026",
    approvedDate: "12 Jan 2026",
  },
  {
    id: "W001",
    name: "Water Bill Payment",
    department: "Water Dept",
    category: "Water",
    description: "Pay water bills online",
    status: "Pending",
    appliedDate: "15 Jan 2026",
  },
  {
    id: "P001",
    name: "Property Tax Payment",
    department: "Tax Dept",
    category: "Property",
    description: "Pay property tax online",
    status: "Rejected",
    appliedDate: "20 Jan 2026",
  },
];

import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Ubaid Sohail",
  initials: "",
  url: "https://google.com",
  location: "Alipur Lehtar Road Islamabad",
  locationLink: "",
  description:
    "IT & Operations Specialist, bringing precision and problem-solving skills into banking and finance.",
  summary:
    "Driven and detail-oriented professional with proven expertise in IT, BPO systems, and team leadership. Skilled in data management, technical support, and operational efficiency, with a developing focus on banking and finance. Seeking to leverage my analytical and organizational strengths in a Bank Accountant role, delivering accuracy, accountability, and insightful reporting.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Dialer Systems",
    "CRM Managment",
    "Data Integrity",
    "IT Support & Issue Resolution",
    "Dialer Metrics Reporting",
    "MS Excel",
    "Google Sheets",
    "Vendor Managment",
    "Operational compliance",
    "Communication",
    "Collaboration",
    "Time Managment",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "ubaidwork78@gmail.com",
    tel: "03165290923",
    social: {
      GitHub: {
        name: "GitHub",
        url: "#",
        icon: Icons.github,
        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ubaid-sohail-8b72502a0/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:ubaidwork78@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Ntelecom",
      href: "https://www.linkedin.com/company/ntelecom/",
      badges: [],
      location: "Rawalpindi, Punjab",
      title: "Dialer Operator",
      logoUrl: "/n-telecom.jpeg",
      start: "March 2025",
      end: "August 2025",
      description:
        "Optimized dialer operations to maximize call connectivity and provided IT support to telemarketing agents. Maintained accurate CRM data, supported lead generation, call routing, and campaign analysis. Collaborated with the team to improve remote work efficiency.",
    },
    {
      company: "Royal tech",
      href: "",
      badges: [],
      location: "Rawalpindi, Punjab",
      title: "Dialer Operator & IT Support",
      logoUrl: "",
      start: "December 2024",
      end: "February 2025",
      description:
        "Managed dialer operations for optimal connectivity and supported telemarketing agents with IT issues. Maintained accurate CRM data, assisted in lead generation, and analyzed campaign performance. Streamlined remote work processes through team collaboration.",
    },
    {
      company: "P-tech People and Technology",
      href: "https://www.linkedin.com/company/ptechcomph/",
      badges: [],
      location: "Rawalpindi, Punjab",
      title: "Dialer Manager",
      logoUrl: "/p-tech.jpeg",
      start: "December 2023",
      end: "November 2024",
      description:
        "Managed IT team and resources while implementing strategies and policies. Oversaw systems, security, backups, and disaster recovery. Coordinated projects, resolved technical issues, and recommended solutions. Ensured compliance and adoption of emerging technologies.",
    },
    {
      company: "Hustler Marketing",
      href: "https://www.hustlermarketing.com/",
      badges: [],
      location: "Rawalpindi, Punjab",
      title: "IT Manager",
      logoUrl: "/hustler.jpeg",
      start: "June 2022",
      end: "November 2022",
      description:
        "Drove technological advancements in the BPO sector through strategic IT leadership. Improved efficiency and client satisfaction by executing targeted IT strategies. Led teams and projects to deliver quality solutions on time and within budget. Managed vendors to secure cost-effective, high-quality services.",
    },

    {
      company: "Satellite BPO",
      href: "https://www.linkedin.com/company/satellitebpo/",
      badges: [],
      location: "Rawalpindi, Punjab",
      title: "IT Specialist",
      logoUrl: "/satellite-bpo.jpeg",
      start: "August 2021",
      end: "April 2022",
      description:
        "Proficient in diverse IT systems, hardware, and software with expertise in troubleshooting, maintenance, and optimization. Skilled in implementing innovative solutions and staying updated on emerging technologies. Experienced in delivering reliable IT support, ensuring prompt issue resolution and high customer satisfaction. Strong analytical skills with a proven ability to solve complex technical problems.",
    },
  ],
  education: [
    {
      school: "Allama Iqbal Open University",
      href: "https://www.linkedin.com/school/allama-iqbal-open-university/",
      degree: "FSC Degree of Computer Science",
      logoUrl: "/university.jpeg",
      start: "2022",
      end: "2023",
    },
    {
      school: "Federal Board of Intermediate and Secondary Education",
      href: "https://www.fbise.edu.pk/",
      degree: "Matriculation, Computer Science",
      logoUrl: "/federal-board.jpeg",
      start: "2020",
      end: "2022",
    },
  ],
} as const;

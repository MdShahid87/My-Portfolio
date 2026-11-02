export const personalInfo = {
  name: "MD SHAHID",
  brandName: "shahid",
  displayName: "MD Shahid",
  role: "Frontend Developer",
  headline: "Frontend Developer • React.js Developer",
  seeking:
    "Frontend Developer, React.js Developer, or Software Engineer Trainee",
  location: "Delhi NCR",
  relocation: "Open to Relocate",
  phone: "+91 9631638622",
  phoneHref: "tel:+919631638622",
  emails: {
    primary: "mdshahidarzoo39@gmail.com",
  },
  resumeUrl: "/MD_Shahid.pdf",
  avatar: "https://avatars.githubusercontent.com/u/233295489?v=4",
  summary:
    "Frontend Developer with hands-on experience building responsive web applications using React.js, JavaScript (ES6+), and Tailwind CSS. Developed three projects featuring REST API integration, reusable components, state management, client-side file processing, and browser storage. Familiar with Redux Toolkit, Git/GitHub, Core Java, and data structures and algorithms.",
};

export const socialLinks = {
  github: "https://github.com/MdShahid87",
  linkedin: "https://www.linkedin.com/in/mdshahid28",
};

export const aboutContent = {
  heading: "FRONTEND DEVELOPER.",
};

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  short: "BCA",
  score: "79.87%",
  years: "2023 – 2026",
  university: "Babasaheb Bhimrao Ambedkar Bihar University",
  universityShort: "Babasaheb Bhimrao Ambedkar Bihar University",
  city: "Muzaffarpur, Bihar",
};

export const internship = {
  title: "Frontend Development Intern",
  company: "Unified Mentor Pvt. Ltd.",
  location: "Gurugram, Haryana",
  period: "Oct 2026 – Jan 2027",
  points: [
    "Selected for a frontend development internship focused on responsive web interfaces using React.js, JavaScript, and modern frontend tools.",
    "Responsibilities include developing reusable UI components, integrating REST APIs, fixing bugs, and collaborating with Git/GitHub.",
  ],
};

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript (ES6+)"],
  },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Redux Toolkit",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "REST API Integration",
      "Axios",
    ],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Version Control & Tools",
    skills: ["Git", "GitHub", "VS Code", "Vite"],
  },
  {
    title: "AI Tools",
    skills: ["Cursor", "ChatGPT", "Claude", "Antigravity"],
  },
];

export const projects = [
  {
    name: "SkyCast — Real-Time Weather Dashboard",
    shortName: "SkyCast",
    tag: "Live Demo",
    liveUrl: "https://my-skycast-weather-app.netlify.app/",
    githubUrl: "https://github.com/MdShahid87/weather-app-react",
    stack: ["React.js", "JavaScript", "Tailwind CSS", "Axios", "REST API"],
    points: [
      "Built a responsive weather dashboard in React.js with city search and 5-day forecasts, pulling live data from a third-party REST API.",
      "Added 2 location modes (manual search + browser Geolocation), dark mode, recent-search history, loading states, and error handling, using reusable components styled with Tailwind CSS.",
    ],
  },
  {
    name: "PDF Editor — Browser-Based PDF Utility",
    shortName: "PDF Editor",
    tag: "GitHub",
    liveUrl: "https://getpdfeditor.netlify.app/",
    githubUrl: "https://github.com/MdShahid87/pdf-editor",
    stack: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "PDF-Lib",
      "PDF.js",
      "jsPDF",
      "JSZip",
    ],
    points: [
      "Built a browser-based PDF toolkit supporting 9 operations — image-to-PDF, PDF-to-image, merge, split, rotate, delete pages, add text, add signature, and compression.",
      "Processed 100% of files client-side (no server) using PDF-Lib, PDF.js, and File/Blob APIs, with drag-and-drop uploads, reusable components, validation, and error handling.",
    ],
  },
  {
    name: "Employee Management System",
    shortName: "EMS",
    tag: "Live Demo",
    liveUrl: "https://employee-management-shahid.netlify.app/",
    githubUrl: "https://github.com/MdShahid87/EmployeeManagement",
    stack: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "SessionStorage"],
    points: [
      "Built an employee management app with login authentication and full CRUD — 4 operations: create, read, update, and delete.",
      "Used 2 browser storage mechanisms — LocalStorage for persistent records and SessionStorage to manage session state.",
    ],
  },
];

export const certificates = {
  viewAllUrl: "https://www.linkedin.com/in/mdshahid28",
  featured: [
    {
      icon: "🎓",
      name: "The Web Developer Bootcamp",
      issuer: "Udemy",
    },
    {
      icon: "☕",
      name: "Data Structures & Algorithms (DSA) with Java",
      issuer: "Apna College",
    },
  ],
};

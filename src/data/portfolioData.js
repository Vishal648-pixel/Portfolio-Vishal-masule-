// ============================================================
// portfolioData.js — Centralized configuration for Vishal Masule's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Vishal Masule",
  firstName: "Vishal",
  brandName: "Vishal Masule",
  title: "Full Stack Software Developer",
  location: "Mumbai, Maharashtra, India",
  phone: "+91 9326168716",
  emails: {
    primary: "vishalmasule903@gmail.com",
    secondary: "vishalmasule903@gmail.com",
  },
  summary:
    "Full Stack Software Developer with an MCA, skilled in React.js, Java, Spring Boot, Hibernate, Python, REST APIs, MySQL, DynamoDB, AWS, and Docker. AWS and Oracle Cloud certified with hands-on experience in application development, cloud deployment, database integration, OOP, DBMS, DSA, and software engineering.",
  resumeUrl: "/Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/Vishal648-pixel",
  linkedin: "https://linkedin.com/in/vishal-masule",
};

export const heroContent = {
  greeting: "Hi, I'm Vishal",
  titleHighlight: "Full Stack Software Developer",
  subtitle:
    "I build fast, scalable applications using React.js, Java, Spring Boot, Python, and AWS cloud infrastructure.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:vishalmasule903@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Vishal,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Vishal Masule</span>, a Full Stack Software Developer based in Mumbai, India, dedicated to crafting clean, functional, and highly scalable web applications using modern cloud and full-stack technologies.`,
  techStack: ["React.js", "Java", "Spring Boot", "AWS"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks like React, Node.js, and AWS cloud services.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to AWS and Oracle Cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data — Vishal Masule
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 88 },
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "SQL", level: 87 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 92 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "Bootstrap & Tailwind", level: 85 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Java & Spring Boot", level: 90 },
        { name: "Hibernate ORM", level: 84 },
        { name: "JUnit5 & Mockito", level: 82 },
        { name: "REST APIs", level: 92 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "Amazon DynamoDB", level: 83 },
        { name: "Query Optimization", level: 83 },
        { name: "Database Design", level: 85 },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS (S3, EC2, CloudFront)", level: 87 },
        { name: "Docker", level: 82 },
        { name: "Git & GitHub", level: 92 },
        { name: "Route 53 & SNS", level: 80 },
      ],
    },
    {
      title: "Computer Science Core",
      skills: [
        { name: "OOP & Design Patterns", level: 90 },
        { name: "Data Structures & Algorithms", level: 87 },
        { name: "DBMS", level: 86 },
        { name: "Web Security & Agile", level: 82 },
      ],
    },
  ],
};

// Cloud & Deployment Expertise (replaces ContentCreator section)
export const contentCreation = {
  badge: "Cloud & Deployment",
  heading: "Cloud Architecture & Engineering",
  description:
    "Beyond web development, I design and deploy production-grade cloud systems on AWS and Oracle Cloud Infrastructure.",
  categories: [
    {
      title: "AWS Infrastructure",
      description:
        "Deployed scalable applications using EC2, S3, Lambda, Beanstalk, CloudWatch, and Cognito on AWS Cloud.",
      stats: "CLF-C02 Certified",
      icon: "☁️",
    },
    {
      title: "Oracle Cloud",
      description:
        "Provisioned and managed cloud resources on Oracle Cloud Infrastructure with hands-on deployment experience.",
      stats: "OCI Certified",
      icon: "🔶",
    },
    {
      title: "REST API Development",
      description:
        "Engineered production REST APIs with validation, error handling, middleware, JWT/OAuth authentication, and logging.",
      stats: "Full Stack",
      icon: "🔌",
    },
    {
      title: "Containerization",
      description:
        "Containerized full-stack applications using Docker, integrating cloud services with backend APIs and databases.",
      stats: "Docker Ready",
      icon: "🐳",
    },
  ],
};

// Internships / Experience Data — Vishal Masule
export const internshipsList = [
  {
    organization: "Magic Bus",
    role: "AWS Cloud Trainee",
    duration: "3 Months",
    type: "Training",
    logo: "/magicbus.jpeg",
    description:
      "Completed 3-month training with Magic Bus, gaining knowledge of AWS and cloud-related technologies.",
    skills: [
      "Improved teamwork and collaboration skills through group exercises and project-based learning",
      "Enhanced problem-solving skills and ability to design efficient cloud-based solutions for real-world scenarios",
      "Gained hands-on experience through practical labs and project-based learning, applying cloud concepts to real-world scenarios",
      "Built a strong foundation in cloud computing best practices, including infrastructure management, security, and deployment strategies",
    ],
    tech: ["AWS", "Cloud Computing", "Infrastructure Management", "Security", "Deployment"],
  },
];

// Leadership / Activities Data — Vishal Masule
export const leadershipList = [
  {
    title: "AWS Certified Cloud Practitioner",
    description:
      "Earned the AWS Certified Cloud Practitioner (CLF-C02) certification, validating foundational knowledge of AWS Cloud services, architecture, security, and billing.",
    role: "AWS Certification",
    badge: "Certified",
  },
  {
    title: "Oracle Cloud Infrastructure 2025",
    description:
      "Certified in Oracle Cloud Infrastructure Fundamentals 2025 by Oracle Academy, demonstrating proficiency in OCI compute, networking, and storage services.",
    role: "OCI Certification",
    badge: "Certified",
  },
  {
    title: "Core Python Certification — G-Tec Keerti Jain Institute",
    description:
      "Completed Core Python certification from G-Tec Keerti Jain Institute, covering Python fundamentals, OOP principles, file handling, and data structures.",
    role: "Python Certification",
    badge: "Certified",
  },
  {
    title: "MCA — Sardar Patel Institute of Technology, Mumbai",
    description:
      "Pursuing Master of Computer Applications at SPIT, Andheri, Mumbai — one of Maharashtra's premier institutions. Building expertise in advanced CS concepts, cloud computing, and software engineering.",
    role: "Currently Pursuing",
    badge: "Pursuing",
  },
  {
    title: "B.Sc CS — KV Pendharkar College, Dombivli",
    description:
      "Completed Bachelor of Science in Computer Science from KV Pendharkar College, Dombivli, Mumbai — laying the foundational knowledge in programming, mathematics, and computer architecture.",
    role: "Graduate",
    badge: "Education",
  },
];

// Soft Skills Data — Vishal Masule
export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Breaking down complex engineering problems into clean, logical, and modular solutions.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Clear, concise, and structured interactions in both business and technical contexts.",
  },
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Working effectively across disciplines to deliver well-engineered, production-ready software.",
  },
  {
    name: "Adaptability",
    icon: "🌟",
    desc: "Quick to pick up new frameworks and technologies like Angular, Docker, and Oracle Cloud.",
  },
  {
    name: "Attention to Detail",
    icon: "🎯",
    desc: "Writing clean, maintainable code with thorough error handling, validation, and documentation.",
  },
  {
    name: "Time Management",
    icon: "⏰",
    desc: "Balancing MCA studies, cloud certifications, and full-stack project development effectively.",
  },
  {
    name: "Creativity",
    icon: "🎨",
    desc: "Designing modern UI/UX with React.js and Tailwind that blend aesthetics with engineering.",
  },
  {
    name: "Continuous Learning",
    icon: "📚",
    desc: "Staying ahead with AWS, Oracle Cloud, Docker, and the latest full-stack development trends.",
  },
];

export const projects = [
  {
    id: "java-fullstack-webapp",
    number: "01",
    badge: "☕ Java Full Stack",
    title: "Java Full Stack Web Application",
    description:
      "Built responsive applications using React.js with modular architecture for frontend and Spring Boot for backend. Developed REST APIs with validation, error handling, middleware, and comprehensive logging. Integrated MySQL database with Hibernate ORM, implemented JWT authentication and security best practices. Wrote unit tests using JUnit5 and Mockito for robust code coverage.",
    techTags: [
      "React.js",
      "Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "JWT",
      "JUnit5",
      "Mockito",
      "REST API",
    ],
    links: {
      github: "https://github.com/Vishal648-pixel",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "cloudvault",
    number: "02",
    badge: "☁️ Cloud Storage",
    title: "CloudVault — Cloud Storage Application",
    description:
      "Developed a secure cloud-based file storage application with React.js frontend and Python backend for file upload, storage, and management. Integrated AWS S3 for primary object storage, CloudFront for content delivery, and Route 53 for custom domain management. Implemented SNS-based storage alerts and configured storage quotas. Built real-time storage usage monitoring dashboard with DynamoDB for quota tracking and analytics.",
    techTags: [
      "React.js",
      "Python",
      "AWS S3",
      "CloudFront",
      "Route 53",
      "DynamoDB",
      "SNS",
      "Docker",
      "REST API",
    ],
    links: {
      github: "https://github.com/Vishal648-pixel/CloudVault-A-storage-application-",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "AWS Certified Cloud Practitioner (CLF-C02)",
      issuer: "Amazon Web Services",
      icon: "☁️",
      badge: "/cert-aws-badge.jpeg",
      certUrl: "/cert-aws.pdf",
      description:
        "Validates foundational knowledge of AWS Cloud services, architecture, security, and billing models.",
      verifyUrl: "https://www.credly.com/badges/12b9a263-0c50-4397-9f0e-25eef3af5efe/public_url",
      year: "2024",
    },
    {
      name: "Oracle Cloud Infrastructure Fundamentals 2025",
      issuer: "Oracle Academy",
      icon: "🔶",
      badge: "/cert-oracle-badge.jpeg",
      certUrl: "/cert-oracle.pdf",
      description:
        "Demonstrates proficiency in OCI compute, networking, storage services, and cloud architecture.",
      verifyUrl:
        "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1AA05BFDFFDBCC553BDE7DE7EE32D59A9494464C7596329F792DF99B14354AD5",
      year: "2025",
    },
    {
      name: "Google AI Essentials",
      issuer: "Google / Coursera",
      icon: "🤖",
      badge: "/cert-google-badge.png",
      certUrl: "/cert-google-ai-full.jpeg",
      description:
        "Covers foundational AI and machine learning concepts, prompt engineering, and responsible AI use in the workplace.",
      verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/YZ8PTV43HYY4",
      year: "2024",
    },
    {
      name: "Core Python Certification",
      issuer: "G-Tec Keerti Jain Institute",
      icon: "🐍",
      badge: "/cert-gtec-badge.jpg",
      certUrl: "/cert-gtec-full.jpeg",
      description:
        "Covers Python fundamentals, OOP principles, file handling, and core data structures.",
      verifyUrl: null,
      year: "2023",
    },
  ],
  viewAllUrl: null,
};

export const education = {
  degree: "MCA — Master of Computer Applications",
  institution: "Sardar Patel Institute of Technology (SPIT), Mumbai",
  cgpa: "",
  graduation: "Present",
  twelfth: "B.Sc CS — KV Pendharkar College, Dombivli",
  tenth: "Mumbai, Maharashtra, India",
};

export const footerContent = {
  taglines: [
    "Full Stack Software Development",
    "React.js · Java · Spring Boot · AWS",
    "Cloud-Native Applications",
  ],
  credential: "MCA · SPIT Mumbai",
  copyright: `© ${new Date().getFullYear()} Vishal Masule | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

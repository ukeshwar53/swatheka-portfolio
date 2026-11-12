/**
 * Swatheka R. - Portfolio Data
 * 
 * Strictly contains Swatheka R.'s authentic student profile,
 * verified contact information, academic presentations, skills,
 * areas of interest, and signed declaration.
 */

export const personalInfo = {
  name: "Swatheka R.",
  shortName: "Swatheka",
  title: "First-Year Computer Science and Engineering Student",
  degree: "Bachelor of Engineering / Bachelor of Technology (B.E./B.Tech)",
  department: "Computer Science and Engineering",
  year: "First Year",
  institution: "R.M.D. Engineering College",
  location: "Kavaraipettai, Tamil Nadu, India",
  email: "26cs235@rmd.ac.in",
  github: "https://github.com/swatheka-placeholder",
  linkedin: "https://linkedin.com/in/swatheka-placeholder",
  resumePath: "/resume.pdf",

  // Official Career Objective
  careerObjective:
    "To build a successful career in the field of Computer Science by improving my technical knowledge, developing programming skills and learning new technologies.",

  // Official Declaration
  declaration: {
    text: "I hereby declare that the information provided above is true to the best of my knowledge.",
    signature: "Swatheka R."
  }
};

// Educational Qualification
export const educationData = [
  {
    id: "be-cse",
    degree: "Bachelor of Engineering / Bachelor of Technology (B.E./B.Tech)",
    department: "Computer Science and Engineering",
    year: "First Year",
    institution: "R.M.D. Engineering College",
    location: "Kavaraipettai, Tamil Nadu",
    description: "Currently undertaking foundational first-year engineering coursework in computer science, computational logic, C programming, and mathematics."
  }
];

// Academic Presentations (Strictly the two presentations provided)
export const academicPresentations = [
  {
    id: "ai-in-agriculture",
    number: "1",
    title: "AI in Agriculture",
    category: "Artificial Intelligence",
    badgeColor: "#8B5CF6",
    summary: "Explored how modern artificial intelligence applications can transform agricultural practices and empower farmers.",
    points: [
      "Explored the applications of Artificial Intelligence in modern agriculture.",
      "Studied how AI can help improve farming practices."
    ]
  },
  {
    id: "the-dark-web",
    number: "2",
    title: "The Dark Web",
    category: "Cybersecurity",
    badgeColor: "#06B6D4",
    summary: "A technical study on the architecture of the web, cybersecurity threats, and essential online safety practices.",
    points: [
      "Studied the three layers of the web.",
      "Explored cybersecurity risks, online safety and prevention methods."
    ]
  }
];

// Aliased for backwards compatibility if needed
export const projectsData = academicPresentations;

// Technical Skills (Strictly the 5 technical skills provided)
export const technicalSkills = [
  { 
    name: "C Programming", 
    icon: "Code2", 
    levelBadge: "Foundational",
    description: "Core procedural programming, structured logic, loops, functions, and algorithmic problem-solving."
  },
  { 
    name: "HTML5", 
    icon: "FileCode", 
    levelBadge: "Markup",
    description: "Semantic page structuring, web accessibility standards, forms, and responsive document hierarchy."
  },
  { 
    name: "Python", 
    icon: "Binary", 
    levelBadge: "Programming",
    description: "Basic programming constructs, readable syntax, data types, and scripting logic."
  },
  { 
    name: "Microsoft PowerPoint", 
    icon: "Presentation", 
    levelBadge: "Presentation",
    description: "Designing visual academic presentations, technical slide decks, and project showcases."
  },
  { 
    name: "Microsoft Word", 
    icon: "FileText", 
    levelBadge: "Documentation",
    description: "Document structuring, academic report writing, technical formatting, and formal communication."
  }
];

// Soft Skills (Strictly the 5 soft skills provided)
export const softSkills = [
  { 
    name: "Communication", 
    icon: "MessageSquare", 
    description: "Articulating ideas clearly in presentations, discussions, and technical writeups."
  },
  { 
    name: "Teamwork", 
    icon: "Users", 
    description: "Active collaboration with peers during lab sessions, seminars, and study groups."
  },
  { 
    name: "Time Management", 
    icon: "Clock", 
    description: "Organizing study routines, balancing assignment deadlines, and practicing programming."
  },
  { 
    name: "Problem-Solving", 
    icon: "Lightbulb", 
    description: "Approaching challenges logically, debugging code errors, and evaluating solutions."
  },
  { 
    name: "Quick Learning", 
    icon: "Zap", 
    description: "Fast comprehension of new technological concepts and eagerness to acquire new skills."
  }
];

export const skillsData = {
  technical: technicalSkills,
  soft: softSkills
};

// Areas of Interest (Strictly the 4 areas provided)
export const areasOfInterest = [
  {
    id: "web-dev",
    title: "Web Development",
    icon: "Globe",
    description: "Creating modern, responsive user interfaces and learning modern web standards."
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    icon: "Brain",
    description: "Understanding intelligent systems, machine learning potential, and smart technology solutions."
  },
  {
    id: "software-dev",
    title: "Software Development",
    icon: "Terminal",
    description: "Building robust, efficient computer software through structured programming and algorithms."
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    icon: "ShieldAlert",
    description: "Exploring web layers, defensive security practices, online privacy, and vulnerability mitigation."
  }
];

// Navigation Links
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Presentations", href: "#presentations" },
  { name: "Skills", href: "#skills" },
  { name: "Interests", href: "#interests" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" }
];

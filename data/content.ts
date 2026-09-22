import {
  FaServer,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaTachometerAlt,
  FaLayerGroup,
} from "react-icons/fa";


export const SKILLS = {
  "Frontend — Core": [
    "Angular",
    "React",
    "TypeScript",
    "JavaScript",
    "RxJS",
    "HTML",
    "CSS",
  ],
  "Backend — Core": [
    "Node.js",
    "Express.js",
    "REST APIs",
    "Authentication",
    "JWT",
    "Refresh Tokens",
  ],
  Data: [
    "PostgreSQL",
    "MongoDB",
    "Dataverse",
    "SQL",
    "Database Design",
  ],
  "Cloud & Delivery": [
    "Azure",
    "Azure Blob Storage",
    "GitHub Actions",
    "CI/CD",
  ],
};

export const EXPERTISE = [
  {
    icon: FaLayerGroup,
    title: "Frontend Architecture",
    text: "Component-driven Angular and React applications with TypeScript, RxJS, state management and maintainable UI architecture.",
  },
  {
    icon: FaServer,
    title: "Backend Engineering",
    text: "REST APIs with Node.js and Express, validation, error handling, pagination and service design.",
  },
  {
    icon: FaShieldAlt,
    title: "Security",
    text: "JWT access tokens, refresh-token rotation, token revocation, password hashing and authorization.",
  },
  {
    icon: FaDatabase,
    title: "Data & APIs",
    text: "PostgreSQL, MongoDB and Dataverse with a focus on query design, indexing and reliable integrations.",
  },
  {
    icon: FaCloud,
    title: "Cloud & Delivery",
    text: "Azure services, private blob access, SAS URLs, GitHub workflows and deployment practices.",
  },
  {
    icon: FaTachometerAlt,
    title: "Performance",
    text: "API optimization, caching strategies, database tuning, pagination and reducing unnecessary network work.",
  },
];

export const PRINCIPLES = [
  "Prefer simple architecture that can evolve.",
  "Make security part of the design, not an afterthought.",
  "Measure performance before optimizing it.",
  "Keep business logic testable and isolated.",
];

export const PROJECTS = [
  {
    title: "Enterprise Member Portal Re-architecture",
    tech: ["Angular 18", "Node.js", "Express.js", "Microsoft Dataverse", "Azure AD B2C", "Authorize.net"],
    summary:
      "Re-architected a legacy enterprise member portal by separating business and application layers, with the business layer communicating directly with Dataverse — delivering a 6x performance improvement alongside a full UI/UX redesign.",
    bullets: [
      "Integrated Dataverse REST APIs and Azure AD B2C for secure auth, RBAC, and real-time data sync",
      "Optimized OData queries and API workflows, cutting backend processing overhead",
      "Integrated Authorize.Net (Accept.js) with JWT auth, authorization middleware, and CORS policies",
      "Designed reusable RESTful APIs and middleware supporting CRM integrations across teams",
    ],
  },
  {
    title: "Multi-District Admin & Voting Platform",
    tech: ["Angular 14", "Nebular", "Node.js", "Express.js", "PostgreSQL", "Sequelize", "Moneris", "WebSockets"],
    summary:
      "Built an admin-controlled platform with real-time content management, secure voting, and role-based access serving 1,000+ users across multiple districts.",
    bullets: [
      "Implemented role-based authorization for admin dashboards across districts",
      "Built an end-to-end nominee submission and secure voting system with export/reporting",
      "Created a multi-layered ticketing system for profile-change approvals with automated notifications",
      "Added WebSocket-based real-time updates, reducing latency across the platform",
    ],
  },
  {
    title: "Loyalty & Checkout Experience (Mobile)",
    tech: ["React", "Ionic 5", "Cordova"],
    summary:
      "Designed and built key parts of a mobile ordering and rewards experience, focused on reducing friction in the checkout and reorder flow.",
    bullets: [
      "Built a personalized rewards page integrated with checkout, based on user activity",
      "Designed a post-checkout confirmation page for clear purchase summaries",
      "Introduced a streamlined reordering feature, cutting steps to repeat an order",
    ],
  },
  {
    title: "Fitness Tracking App",
    tech: ["React", "Cordova", "MongoDB", "Node.js", "Express.js"],
    summary:
      "Contributed to a cross-platform fitness app focused on engagement and activity visualization.",
    bullets: [
      "Implemented push notifications for fitness challenges to drive re-engagement",
      "Built interactive 7-day progress charts for clearer activity trends",
      "Optimized responsive design across devices for UI consistency",
    ],
  },
];

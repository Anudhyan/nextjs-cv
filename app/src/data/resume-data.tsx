import {
 Logo
} from "../images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "../components/icons";



export const RESUME_DATA = {
  name: "Anudhyan",
  about: "Aspiring Software Engineer | Open Source Enthusiast",
  summary: "Passionate about building scalable applications and contributing to open source projects...",
  personalWebsiteUrl: "https://anudhyan.dev",

  contact: {
    email: "anudhyan@email.com",
    social: [
      { name: "GitHub", url: "https://github.com/Anudhyan" },
      { name: "LinkedIn", url: "https://linkedin.com/in/anudhyan" },
    ],
  },

  work: [
    {
      company: "Airbyte",
      title: "Open Source Contributor",
      start: "2024",
      end: "Present",
      description: "Contributed connectors and bug fixes to Airbyte’s data integration platform.",
    },
    {
      company: "TiDB Hackathon",
      title: "Participant",
      start: "2024",
      end: "2024",
      description: "Built an AI-driven Excel sheet generator for social causes.",
    },
  ],

  education: [
    {
      school: "Government College of Engineering and Leather Technology",
      degree: "B.Tech in Computer Science",
      start: "2021",
      end: "2025",
    },
  ],

  skills: [
    "C", "Java", "TypeScript", "Next.js", "TailwindCSS",
    "Google Cloud", "Docker", "Git",
  ],

  projects: [
    {
      name: "Cross-Chain Token Transfer",
      url: "https://github.com/Anudhyan/Cross-Chain-Token-Transfer",
      description: "A project for cross-chain token swaps using Wormhole and Polygon.",
    },
  ],
};

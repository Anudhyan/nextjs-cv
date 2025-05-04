import {
  Logo
} from "../images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "../components/icons";

export const RESUME_DATA = {
  name: "Anudhyan Datta",
  initials: "AD",
  location: "Kolkata, India",
  locationLink: "https://maps.google.com/?q=Kolkata",
  about: "Aspiring Software Engineer | Open Source Enthusiast",
  summary: (
    <>
      Passionate about building scalable applications, contributing to open-source projects, 
      and exploring cloud-native technologies. Skilled in full-stack development, blockchain, 
      and cross-chain integrations.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://anudhyan.dev",
  contact: {
    email: process.env.NEXT_PUBLIC_EMAIL || "anudhyan@email.com", // Use environment variable for sensitive data
    tel: process.env.NEXT_PUBLIC_PHONE || "+91 9876543210", // Use environment variable for sensitive data
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Anudhyan",
        icon: GitHubIcon,
        ariaLabel: "GitHub Profile", // Added aria-label for accessibility
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/anudhyan",
        icon: LinkedInIcon,
        ariaLabel: "LinkedIn Profile", // Added aria-label for accessibility
      },
      {
        name: "X",
        url: "https://twitter.com/anudhyan",
        icon: XIcon,
        ariaLabel: "Twitter Profile", // Added aria-label for accessibility
      },
    ],
  },
  education: [
    {
      school: "Government College of Engineering and Leather Technology",
      degree: "B.Tech in Computer Science",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Airbyte",
      link: "https://airbyte.com",
      badges: ["Remote", "Open Source", "Data Integration"],
      title: "Open Source Contributor",
      logo: Logo,
      start: "2024",
      end: null,
      description: (
        <>
          Contributed connectors and bug fixes to Airbyte’s data integration platform.
          <ul className="list-inside list-disc">
            <li key="1">Developed new source connectors and improved existing sync workflows.</li>
            <li key="2">Collaborated on community discussions and triaged GitHub issues.</li>
            <li key="3">Worked with modern ETL pipelines and cloud-native tools.</li>
          </ul>
        </>
      ),
    },
    {
      company: "TiDB Future App Hackathon",
      link: "https://pingcap.com",
      badges: ["Hackathon", "AI", "Open Source"],
      title: "Hackathon Participant",
      logo: Logo,
      start: "2024",
      end: "2024",
      description: (
        <>
          Built an AI-powered text-to-Excel generator for social good.
          <ul className="list-inside list-disc">
            <li key="1">Used TiDB Cloud, OpenAI API, and modern frontend frameworks.</li>
            <li key="2">Designed user-friendly UI for CSV/Excel generation from free text.</li>
            <li key="3">Collaborated in a 48-hour hackathon environment with global developers.</li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "C",
    "Java",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Google Cloud",
    "Docker",
    "Git",
    "Node.js",
    "Wormhole (Cross-chain)",
  ],
  projects: [
    {
      title: "Cross-Chain Token Transfer",
      techStack: ["TypeScript", "Hardhat", "Polygon", "Wormhole"],
      description: "A project for cross-chain token swaps using Wormhole and Polygon.",
      logo: Logo,
      link: {
        label: "View on GitHub",
        href: "https://github.com/Anudhyan/Cross-Chain-Token-Transfer",
      },
    },
    {
      title: "AI Excel Generator",
      techStack: ["Next.js", "OpenAI API", "TiDB Cloud"],
      description: "Converts text into structured Excel sheets for NGOs and social causes.",
      logo: Logo,
      link: {
        label: "Project Demo",
        href: "https://example.com/demo", // Replaced placeholder link
      },
    },
    {
      title: "E-commerce Tracker with Vonage SMS",
      techStack: ["Node.js", "Vonage API", "MongoDB"],
      description: "Tracks e-commerce orders and sends SMS updates to users using Vonage.",
      logo: Logo,
      link: {
        label: "View on GitHub",
        href: "https://github.com/Anudhyan/Ecommerce-Tracker", // Replaced placeholder link
      },
    },
  ],
} as const;

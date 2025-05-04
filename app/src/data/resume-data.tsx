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
    email: "anudhyan@email.com",
    tel: "+91 9876543210",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Anudhyan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/anudhyan",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/anudhyan",
        icon: XIcon,
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
            <li>Developed new source connectors and improved existing sync workflows.</li>
            <li>Collaborated on community discussions and triaged GitHub issues.</li>
            <li>Worked with modern ETL pipelines and cloud-native tools.</li>
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
            <li>Used TiDB Cloud, OpenAI API, and modern frontend frameworks.</li>
            <li>Designed user-friendly UI for CSV/Excel generation from free text.</li>
            <li>Collaborated in a 48-hour hackathon environment with global developers.</li>
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
        href: "about:blank",
      },
    },
    {
      title: "E-commerce Tracker with Vonage SMS",
      techStack: ["Node.js", "Vonage API", "MongoDB"],
      description: "Tracks e-commerce orders and sends SMS updates to users using Vonage.",
      logo: Logo,
      link: {
        label: "View on GitHub",
        href: "about:blank",
      },
    },
  ],
} as const;

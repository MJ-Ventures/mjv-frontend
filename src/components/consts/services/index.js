const {
  BulbIcon,
  PuzzleIcon,
  PenToolIcon,
  LayerGroupIcon,
  SearchIcon,
  MobileIcon,
} = require("@/assets/svgs");

export const services = [
  {
    title: "CustomGPTs",
    description:
      "Build a CustomGPT army and automate 100s of functions to 10x your team’s output. Turn a team of 2 into a team of 20. A team of 5 into a team of 50. Extend your team’s capacity and outcomes.",
    icon: <BulbIcon />,
  },
  {
    title: "Low-Code Agents",
    description:
      "Design and build complex AI agents, chains, dashboards, and SaaS prototypes quickly and on-budget using the latest in data science technology to create data-powered CX.",
    icon: <PuzzleIcon />,
  },
  {
    title: "Custom GenAI UI/UX & Development",
    description:
      "You know what you want your product to look and feel like and you need an expert design and development team to bring it to life - fast and on-budget. We’ll work with you to fill-in the gaps and bring your vision to life.",
    icon: <PenToolIcon />,
  },
  {
    title: "AI Security",
    description:
      "Expert AI and LLM security strategy and implementation. We use and select tools that follow robust data encryption protocols, have stringent access controls, mask data for any user facing applications and set-up continuous monitoring alerts",
    icon: <LayerGroupIcon />,
  },
  {
    title: "Cloud Hosted Chatbots",
    description:
      "Work with our small team to create a free cloud hosted chatbot set-up for your unique business. Schedule a call here to talk through your specific use-case and how we can set build it for you.",
    icon: <SearchIcon />,
  },
  {
    title: "Growth CoPilots",
    description:
      "Browse our extensive library of AI Growth Agents that can 10x your organizations productivity. Our agents are secure, fast, can be self-hosted, and white-labeled. ",
    icon: <MobileIcon />,
  },
];

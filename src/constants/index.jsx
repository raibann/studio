import { SocialMediaProfiles } from "@/components/SocialMedia";
import { BsGithub, BsTelegram } from "react-icons/bs";
import { getAllWork } from "@/lib/work";

function generateWorkLinks() {
  const projects = getAllWork();
  return projects.map((project) => ({
    title: project.title,
    href: `/work/${project.slug}`,
  }));
}

export const navigation = [
  {
    title: "Work",
    links: [
      ...generateWorkLinks(),
      { title: "See all", href: "/work" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Process", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];

export const teams = [
  {
    name: "Raibann",
    role: "CEO & CO-Founder",
    image: "/images/teams/raibann.png",
    social: [
      {
        title: "GitHub",
        href: "https://github.com/midvortex-labs-kh",
        icon: BsGithub,
      },
      {
        title: "Telegram",
        href: "https://t.me/maraibann",
        icon: BsTelegram,
      },
    ],
  },
  {
    name: "Minea",
    role: "CTO & Manager",
    image: "/images/teams/minea.png",
    social: [
      {
        title: "GitHub",
        href: "https://github.com/midvortex-labs-kh",
        icon: BsGithub,
      },
      {
        title: "Telegram",
        href: "https://t.me/meassaominea",
        icon: BsTelegram,
      },
    ],
  },
  {
    name: "Rotha",
    role: "Senior Web Developer",
    image: "/images/teams/rotha.png",
    social: [
      {
        title: "GitHub",
        href: "https://github.com/midvortex-labs-kh",
        icon: BsGithub,
      },
      {
        title: "Telegram",
        href: "https://t.me/BrandoWeaverD9K2",
        icon: BsTelegram,
      },
    ],
  },
  {
    name: "Chhay",
    role: "Senior App Developer",
    image: "/images/teams/chhay.png",
    social: [
      {
        title: "GitHub",
        href: "https://github.com/midvortex-labs-kh",
        icon: BsGithub,
      },
      {
        title: "Telegram",
        href: "https://t.me/Loeurng_Chhay",
        icon: BsTelegram,
      },
    ],
  },
];

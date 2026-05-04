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

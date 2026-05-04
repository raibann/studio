import Link from "next/link";
import { getTranslations } from 'next-intl/server';
import { SocialMediaProfiles } from "@/components/SocialMedia";

const FooterNavigation = async () => {
  const t = await getTranslations('navigation');

  const navLinks = [
    {
      title: t('work'),
      links: [
        { title: "MKS Catering", href: "/work/mks-catering" },
        { title: "TL Dashboard", href: "/work/tl-dashboard" },
        { title: t('seeAll'), href: "/work" },
      ],
    },
    {
      title: t('company'),
      links: [
        { title: t('about'), href: "/about" },
        { title: t('process'), href: "/process" },
        { title: t('blog'), href: "/blog" },
        { title: t('contactUs'), href: "/contact" },
      ],
    },
    {
      title: t('connect'),
      links: SocialMediaProfiles,
    },
  ];

  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navLinks.map((item) => (
          <li key={item.title}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {item.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {item.links.map((link, index) => (
                <li key={index} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNavigation;

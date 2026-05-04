"use client";

import React from "react";
import FadeIn from "./FadeIn";
import Offices from "./Offices";
import Border from "./Border";
import Link from "next/link";
import SocialMedia from "./SocialMedia";
import { useTranslations } from "next-intl";

const ContactDetails = () => {
  const t = useTranslations("contact");

  return (
    <FadeIn>
      <h2 className="text-base font-semibold text-neutral-950">
        {t("ourOffices")}
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        {t("officeDescription")}
      </p>
      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />
      <Border className="mt-16 pt-16">
        <h2 className="text-base font-semibold text-neutral-950">
          {t("emailUs")}
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            [t("careers"), "raibann.rb@gmail.com"],
            [t("press"), "undefined.2dev@gmail.com"],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>
      <Border className="mt-16 pt-16">
        <h2 className="text-base font-semibold text-neutral-950">
          {t("followUs")}
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  );
};

export default ContactDetails;

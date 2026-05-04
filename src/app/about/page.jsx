"use client";

import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";
import Team from "@/components/Team";
import { useTranslations } from "next-intl";
import { teams } from "@/constants/teams";

const AboutPage = () => {
  const t = useTranslations("about");

  return (
    <>
      <PageIntro eyebrow={t("eyebrow")} title={t("title")}>
        <p>{t("description1")}</p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>{t("description2")}</p>
          <p>{t("description3")}</p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="2" label={t("stats.underpaidEmployees")} />
          <StatListItem value="2" label={t("stats.placatedClients")} />
          <StatListItem value="$2k" label={t("stats.invoicesBilled")} />
        </StatList>
      </Container>
      <Team
        teams={teams}
        subtitle="Meet the people behind the magic"
        title="Our Team"
      />
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;

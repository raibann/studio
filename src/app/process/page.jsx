import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import React from "react";
import { getTranslations } from 'next-intl/server';

const ProcessPage = async () => {
  const t = await getTranslations('process');

  return (
    <>
      <PageIntro eyebrow={t('eyebrow')} title={t('title')}>
        <p>
          {t('description')}
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>
      <Values />
      <ContactSection />
    </>
  );
};

export default ProcessPage;

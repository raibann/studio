import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";
import { getTranslations } from 'next-intl/server';

const Build = async () => {
  const t = await getTranslations('build');

  return (
    <Section title={t('title')} image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          {t('description1')}
        </p>
        <p>
          {t('description2')}
        </p>
        <p>
          {t('description3')}
        </p>
      </div>
      <Blockquote
        author={{ name: t('quoteAuthor'), role: t('quoteRole') }}
        className="mt-12"
      >
        {t('quote')}
      </Blockquote>
    </Section>
  );
};

export default Build;

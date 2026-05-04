import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";
import { getTranslations } from 'next-intl/server';

const Cultures = async () => {
  const t = await getTranslations('cultures');

  return (
    <div className="mt-24 bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow={t('eyebrow')}
        title={t('title')}
        invert
      >
        <p>
          {t('description')}
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title={t('loyalty.title')} invert>
            {t('loyalty.description')}
          </GridListItem>
          <GridListItem title={t('trust.title')} invert>
            {t('trust.description')}
          </GridListItem>
          <GridListItem title={t('compassion.title')} invert>
            {t('compassion.description')}
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;

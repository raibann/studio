"use client";

import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";
import { useTranslations } from 'next-intl';

const Values = () => {
  const t = useTranslations('values');

  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow={t('eyebrow')}
        title={t('title')}
      >
        <p>
          {t('description')}
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title={t('meticulous.title')}>
            {t('meticulous.description')}
          </GridListItem>
          <GridListItem title={t('efficient.title')}>
            {t('efficient.description')}
          </GridListItem>
          <GridListItem title={t('adaptable.title')}>
            {t('adaptable.description')}
          </GridListItem>
          <GridListItem title={t('honest.title')}>
            {t('honest.description')}
          </GridListItem>
          <GridListItem title={t('loyal.title')}>
            {t('loyal.description')}
          </GridListItem>
          <GridListItem title={t('innovative.title')}>
            {t('innovative.description')}
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;

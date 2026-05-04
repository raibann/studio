"use client";

import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";
import { useTranslations } from 'next-intl';

const Services = () => {
  const t = useTranslations('services');

  return (
    <>
      <SectionIntro
        eyebrow={t('eyebrow')}
        title={t('title')}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          {t('description')}
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title={t('webDevelopment.title')}>
              {t('webDevelopment.description')}
            </ListItem>
            <ListItem title={t('applicationDevelopment.title')}>
              {t('applicationDevelopment.description')}
            </ListItem>
            <ListItem title={t('ecommerce.title')}>
              {t('ecommerce.description')}
            </ListItem>
            <ListItem title={t('cms.title')}>
              {t('cms.description')}
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;

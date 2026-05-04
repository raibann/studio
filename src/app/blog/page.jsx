"use client";

import PageIntro from "@/components/PageIntro";
import { useTranslations } from 'next-intl';

const BlogPage = () => {
  const t = useTranslations('blog');

  return (
    <>
      <PageIntro eyebrow={t('eyebrow')} title={t('title')}>
        <p>
          {t('description')}
        </p>
      </PageIntro>
    </>
  );
};

export default BlogPage;

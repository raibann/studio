import PageIntro from "@/components/PageIntro";
import { getTranslations } from 'next-intl/server';

const BlogPage = async () => {
  const t = await getTranslations('blog');

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

import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import { getTranslations } from 'next-intl/server';

const ContactPage = async () => {
  const t = await getTranslations('contact');

  return (
    <>
      <PageIntro eyebrow={t('eyebrow')} title={t('title')}>
        <p>{t('description')}</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>
    </>
  );
};

export default ContactPage;

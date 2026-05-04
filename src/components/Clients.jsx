import Image from "next/image";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import { getTranslations } from 'next-intl/server';

const clients = [
  ["Mungkol Serey Catering", "/images/clients/mungkol-serey-catering.png"],
  ["Tenglay Group", "/images/clients/tenglay-group.png"],
];

const Clients = async () => {
  const t = await getTranslations('clients');

  return (
    <div className="mt-24 bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="font-display text-sm font-semibold tracking-wider text-white text-left">
            {t('title')}
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-3 gap-x-8 gap-y-10 sm:grid-cols-4 lg:grid-cols-6"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image
                    src={logo}
                    alt={client}
                    unoptimized
                    width={100}
                    height={100}
                    className="mx-auto"
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;

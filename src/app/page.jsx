"use client";

import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");

  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="text-5xl font-medium tracking-tight text-neutral-950 text-balance sm:text-7xl">
            {t("title")}
          </h1>
          <p className="mt-6 text-xl text-neutral-600">{t("description")}</p>
        </FadeIn>
      </Container>
      <Clients />
      <Services />
      <ContactSection />
    </main>
  );
}

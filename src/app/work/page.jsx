"use client";

import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";
import Link from "next/link";
import Image from "next/image";
import { getAllWork } from "@/lib/work";
import { useTranslations } from "next-intl";

const WorkPage = () => {
  const t = useTranslations("work");
  const projects = getAllWork();

  return (
    <>
      <PageIntro eyebrow={t("eyebrow")} title={t("title")}>
        <p>{t("description")}</p>
      </PageIntro>

      <Container className="mt-16">
        <FadeInStagger>
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {projects.map((project) => (
              <li key={project.slug}>
                <FadeIn>
                  <Link href={`/work/${project.slug}`} className="group block">
                    <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-neutral-100 mb-6">
                      {project.coverImage ? (
                        <Image
                          src={project.coverImage}
                          alt={project.title}
                          fill
                          className="object-cover transition duration-500 motion-safe:group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                          No image
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-neutral-500 mb-2">
                      <span>{project.year}</span>
                      <span className="w-1 h-1 rounded-full bg-neutral-300" />
                      <span>{project.services.slice(0, 2).join(", ")}</span>
                    </div>
                    <h3 className="text-xl font-medium text-neutral-950 group-hover:text-neutral-700">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-base text-neutral-600 line-clamp-2">
                      {project.description}
                    </p>
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </>
  );
};

export default WorkPage;

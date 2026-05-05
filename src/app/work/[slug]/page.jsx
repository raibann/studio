import { notFound } from "next/navigation";
import { getAllWorkSlugs, getWorkBySlug } from "@/lib/work";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import MdxRemote from "@/components/MdxRemote";
import Image from "next/image";
import { getLocale } from "next-intl/server";

export async function generateStaticParams() {
  const slugs = getAllWorkSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const locale = await getLocale();
  const work = getWorkBySlug(slug, locale);

  if (!work) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: work.title,
    description: work.description,
    openGraph: {
      title: work.title,
      description: work.description,
      images: work.coverImage ? [work.coverImage] : [],
    },
  };
}

export default async function WorkProjectPage({ params }) {
  const { slug } = await params;
  const locale = await getLocale();
  const work = getWorkBySlug(slug, locale);

  if (!work) {
    notFound();
  }

  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          {work.coverImage && (
            <div className="relative w-full aspect-16/9 rounded-3xl overflow-hidden mb-12">
              <Image
                src={work.coverImage}
                alt={work.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-sm text-neutral-500 mb-6">
              <span>{work.year}</span>
              <span className="w-1 h-1 rounded-full bg-neutral-300" />
              <span>{work.services.join(", ")}</span>
            </div>
            <h1 className="text-4xl font-medium text-neutral-950 sm:text-5xl">
              {work.title}
            </h1>
            <p className="mt-6 text-xl text-neutral-600">{work.description}</p>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-16 max-w-3xl">
        <FadeIn>
          <MdxRemote source={work.mdxContent} />
        </FadeIn>
      </Container>
    </main>
  );
}

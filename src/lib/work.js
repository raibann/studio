import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const workDirectory = path.join(process.cwd(), 'src/work');

function getMdxFiles(locale = 'en') {
  const files = fs.readdirSync(workDirectory).filter((file) => {
    if (locale === 'en') {
      return file.endsWith('.mdx') && !file.includes('.km.mdx');
    }
    return file.endsWith(`.${locale}.mdx`);
  });
  return files.map((file) => {
    if (file.endsWith(`.${locale}.mdx`)) {
      return file.replace(`.${locale}.mdx`, '');
    }
    return file.replace('.mdx', '');
  });
}

function getMdxFile(slug, locale = 'en') {
  const localePath = path.join(workDirectory, `${slug}.${locale}.mdx`);
  const defaultPath = path.join(workDirectory, `${slug}.mdx`);

  if (fs.existsSync(localePath)) {
    return fs.readFileSync(localePath, 'utf-8');
  }
  if (fs.existsSync(defaultPath)) {
    return fs.readFileSync(defaultPath, 'utf-8');
  }
  return null;
}

export function getAllWorkSlugs(locale = 'en') {
  return getMdxFiles(locale);
}

export function getAllWork(locale = 'en') {
  const slugs = getMdxFiles(locale);
  return slugs
    .map((slug) => {
      const content = getMdxFile(slug, locale);
      if (!content) return null;
      const { data } = matter(content);
      return {
        slug,
        title: data.title,
        description: data.description,
        coverImage: data.coverImage,
        year: data.year,
        services: data.services || [],
      };
    })
    .filter(Boolean);
}

export function getWorkBySlug(slug, locale = 'en') {
  const content = getMdxFile(slug, locale);
  if (!content) return null;

  const { data, content: mdxContent } = matter(content);

  return {
    slug,
    title: data.title,
    description: data.description,
    coverImage: data.coverImage,
    year: data.year,
    services: data.services || [],
    mdxContent,
  };
}

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const workDirectory = path.join(process.cwd(), 'src/work');

function getMdxFiles() {
  const files = fs.readdirSync(workDirectory).filter((file) => file.endsWith('.mdx'));
  return files.map((file) => file.replace('.mdx', ''));
}

function getMdxFile(slug) {
  const fullPath = path.join(workDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  return fs.readFileSync(fullPath, 'utf-8');
}

export function getAllWorkSlugs() {
  return getMdxFiles();
}

export function getAllWork() {
  const slugs = getMdxFiles();
  return slugs
    .map((slug) => {
      const content = getMdxFile(slug);
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

export function getWorkBySlug(slug) {
  const content = getMdxFile(slug);
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

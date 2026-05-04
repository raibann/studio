import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

const mdxComponents = {
  h1: (props) => (
    <h1 className="font-display text-3xl font-medium text-neutral-950 mt-12 mb-6 sm:text-4xl" {...props} />
  ),
  h2: (props) => (
    <h2 className="font-display text-2xl font-medium text-neutral-950 mt-10 mb-4 sm:text-3xl" {...props} />
  ),
  h3: (props) => (
    <h3 className="font-display text-xl font-semibold text-neutral-950 mt-8 mb-3" {...props} />
  ),
  p: (props) => (
    <p className="text-base text-neutral-600 leading-relaxed mb-4" {...props} />
  ),
  ul: (props) => (
    <ul className="list-disc pl-6 mb-6 text-neutral-600 space-y-2" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal pl-6 mb-6 text-neutral-600 space-y-2" {...props} />
  ),
  li: (props) => (
    <li className="text-base text-neutral-600" {...props} />
  ),
  strong: (props) => (
    <strong className="font-semibold text-neutral-950" {...props} />
  ),
  a: (props) => (
    <a className="text-blue-600 hover:text-blue-800 underline" {...props} />
  ),
  blockquote: (props) => (
    <blockquote className="border-l-4 border-neutral-300 pl-4 italic text-neutral-600 mb-6" {...props} />
  ),
  code: (props) => (
    <code className="bg-neutral-100 rounded px-1 py-0.5 text-sm font-mono" {...props} />
  ),
  pre: (props) => (
    <pre className="bg-neutral-950 text-neutral-100 p-4 rounded-lg overflow-x-auto mb-6" {...props} />
  ),
  hr: (props) => (
    <hr className="border-neutral-200 my-8" {...props} />
  ),
};

export default function MdxRemote({ source }) {
  return (
    <div className="prose prose-neutral max-w-none">
      <MDXRemote
        source={source}
        components={mdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </div>
  );
}

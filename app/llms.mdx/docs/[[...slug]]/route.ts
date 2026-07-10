import { getLLMText, getPageMarkdownUrl, source } from '@/lib/source';
import { notFound } from 'next/navigation';

export const revalidate = false;

export async function GET(_req: Request, { params }: RouteContext<'/llms.mdx/docs/[[...slug]]'>) {
  const { slug } = await params;
  // remove the appended "content.md"
  const page = source.getPage(slug?.slice(0, -1), 'en');
  if (!page) notFound();

  return new Response(await getLLMText(page), {
    headers: {
      'Content-Type': 'text/markdown',
    },
  });
}

// English only — the Chinese page set shares the same slugs, which would
// collide with these paths since this route has no locale segment.
export function generateStaticParams() {
  return source.getPages('en').map((page) => ({
    slug: getPageMarkdownUrl(page).segments,
  }));
}

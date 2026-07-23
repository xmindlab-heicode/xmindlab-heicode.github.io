'use client';
import SearchDialog from '@/components/search';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { usePathname, useRouter } from 'next/navigation';
import { type ReactNode } from 'react';

const locales = [
  { locale: 'en', name: 'English' },
  { locale: 'zh', name: '中文' },
];

// Chinese overrides for Fumadocs built-in UI labels (English is the default).
// Keys are fumadocs-ui's composed translation keys (label + "(note)"); the
// per-page "last updated" line uses "Last updated on(page footer)".
const zhTranslations: Record<string, string> = {
  'Last updated on(page footer)': '最后更新于',
  'On this page(table of contents)': '本页内容',
  'No Headings(table of contents)': '暂无标题',
  'Search(search dialog)': '搜索',
  'Search(search trigger)': '搜索',
  'No results found(search dialog)': '没有找到结果',
  'Next Page(pagination)': '下一页',
  'Previous Page(pagination)': '上一页',
};

// English lives unprefixed (/docs/..., /), Chinese lives under /zh (/zh/docs/...,
// /zh). These are two separate static route trees (see lib/i18n.ts), so
// switching locale just maps the current pathname to its counterpart.
function targetPathForLocale(pathname: string, locale: string): string {
  const isZh = pathname === '/zh' || pathname.startsWith('/zh/');
  const withoutZh = isZh ? pathname.replace(/^\/zh/, '') || '/' : pathname;

  if (locale === 'zh') {
    return withoutZh === '/' ? '/zh' : `/zh${withoutZh}`;
  }
  return withoutZh;
}

export function Provider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const locale = pathname === '/zh' || pathname.startsWith('/zh/') ? 'zh' : 'en';

  return (
    <RootProvider
      search={{ SearchDialog }}
      i18n={{
        locale,
        locales,
        translations: locale === 'zh' ? zhTranslations : undefined,
        onLocaleChange: (next) => {
          router.push(targetPathForLocale(pathname, next));
        },
      }}
    >
      {children}
    </RootProvider>
  );
}

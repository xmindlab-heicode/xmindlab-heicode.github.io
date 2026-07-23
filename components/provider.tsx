'use client';
import SearchDialog from '@/components/search';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { usePathname, useRouter } from 'next/navigation';
import { type ReactNode } from 'react';

const locales = [
  { locale: 'en', name: 'English' },
  { locale: 'zh', name: '中文' },
];

// Chinese UI strings for Fumadocs built-in labels (English is the default).
// `lastUpdate` is the label shown by the per-page "last updated" line.
const zhTranslations = {
  search: '搜索',
  searchNoResult: '没有找到结果',
  toc: '本页内容',
  tocNoHeadings: '本页暂无标题',
  lastUpdate: '最后更新于',
  chooseLanguage: '选择语言',
  nextPage: '下一页',
  previousPage: '上一页',
  chooseTheme: '主题',
  editOnGithub: '在 GitHub 上编辑',
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

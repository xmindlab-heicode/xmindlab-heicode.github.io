'use client';
import SearchDialog from '@/components/search';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { usePathname, useRouter } from 'next/navigation';
import { type ReactNode } from 'react';

const locales = [
  { locale: 'en', name: 'English' },
  { locale: 'zh', name: '中文' },
];

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
        onLocaleChange: (next) => {
          router.push(targetPathForLocale(pathname, next));
        },
      }}
    >
      {children}
    </RootProvider>
  );
}

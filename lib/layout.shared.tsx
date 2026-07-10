import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName } from './shared';

export function baseOptions(locale: 'en' | 'zh' = 'en'): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: appName,
      url: locale === 'zh' ? '/zh' : '/',
    },
    links: [
      {
        text: locale === 'zh' ? '文档' : 'Docs',
        url: locale === 'zh' ? '/zh/docs' : '/docs',
      },
    ],
  };
}

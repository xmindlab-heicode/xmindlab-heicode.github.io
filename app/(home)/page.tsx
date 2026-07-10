import Link from 'next/link';

const links: { href: string; label: string }[] = [
  { href: '/docs/introduction', label: '介绍' },
  { href: '/docs/platform-guide', label: '登录平台和使用平台指南' },
  { href: '/docs/security-credentials', label: '安全与凭证管理说明' },
  { href: '/docs/changelog', label: '版本更新' },
  { href: '/docs/agent-building/quickstart', label: 'Agent 构建' },
  { href: '/docs/team-usage/quickstart', label: '团队使用' },
  { href: '/docs/billing/personal-and-team', label: '计费' },
  { href: '/docs/privacy-and-legal/privacy-policy', label: '隐私及法规' },
];

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 gap-6 py-16">
      <h1 className="text-2xl font-bold">Heicode 文档</h1>
      <p>欢迎使用 Heicode 产品文档。</p>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="font-medium underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

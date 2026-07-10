import Link from 'next/link';
import {
  BookOpen,
  Compass,
  ShieldCheck,
  Bot,
  Users,
  CreditCard,
  Scale,
  History,
  ArrowRight,
} from 'lucide-react';

const sections: {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    href: '/docs/introduction',
    title: '介绍',
    description: 'Heicode 是什么，能帮你做什么。',
    icon: <BookOpen className="size-5" />,
  },
  {
    href: '/docs/platform-guide',
    title: '登录平台和使用平台指南',
    description: '注册登录、平台功能与客户端下载。',
    icon: <Compass className="size-5" />,
  },
  {
    href: '/docs/security-credentials',
    title: '安全与凭证管理说明',
    description: '密钥、凭证与权限的安全边界。',
    icon: <ShieldCheck className="size-5" />,
  },
  {
    href: '/docs/agent-building/quickstart',
    title: 'Agent 构建',
    description: '创建、配置并运行你的第一个 Agent。',
    icon: <Bot className="size-5" />,
  },
  {
    href: '/docs/team-usage/quickstart',
    title: '团队使用',
    description: '团队协作、审批、角色与权限管理。',
    icon: <Users className="size-5" />,
  },
  {
    href: '/docs/billing/personal-and-team',
    title: '计费',
    description: '个人、团队与企业版的套餐与定价。',
    icon: <CreditCard className="size-5" />,
  },
  {
    href: '/docs/privacy-and-legal/privacy-policy',
    title: '隐私及法规',
    description: '隐私政策与法律声明。',
    icon: <Scale className="size-5" />,
  },
  {
    href: '/docs/changelog',
    title: '版本更新',
    description: '最新功能与变更记录。',
    icon: <History className="size-5" />,
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative overflow-hidden border-b border-fd-border">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.15] dark:opacity-[0.25]"
          style={{ background: 'var(--gradient-brand)' }}
        />
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-24 text-center">
          <span
            className="rounded-full px-3 py-1 text-xs font-medium text-white shadow-sm"
            style={{ background: 'var(--gradient-brand)' }}
          >
            Heicode 官方文档
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            从想法到上线的
            <br />
            智能开发平台
          </h1>
          <p className="max-w-xl text-fd-muted-foreground">
            了解如何在 Heicode 中构建 Agent、协作团队、管理计费与安全，
            覆盖软件生命周期的每一步。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/docs/introduction"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.02]"
              style={{ background: 'var(--gradient-brand)' }}
            >
              开始阅读
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="https://github.com/xmindlab-heicode/xmindlab-heicode.github.io"
              className="inline-flex items-center gap-2 rounded-lg border border-fd-border px-5 py-2.5 text-sm font-semibold text-fd-foreground transition-colors hover:bg-fd-accent"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group flex flex-col gap-3 rounded-xl border border-fd-border bg-fd-card p-5 transition-colors hover:border-fd-primary/50 hover:bg-fd-accent"
            >
              <div
                className="flex size-9 items-center justify-center rounded-lg text-white"
                style={{ background: 'var(--gradient-brand)' }}
              >
                {section.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-semibold text-fd-card-foreground">
                  {section.title}
                </h2>
                <p className="text-sm text-fd-muted-foreground">
                  {section.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

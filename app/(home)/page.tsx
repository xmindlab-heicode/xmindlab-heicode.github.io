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
    title: 'Introduction',
    description: 'What Heicode is, and how it can help you.',
    icon: <BookOpen className="size-5" />,
  },
  {
    href: '/docs/platform-guide',
    title: 'Login & Platform Guide',
    description: 'Signing in, platform features, and client downloads.',
    icon: <Compass className="size-5" />,
  },
  {
    href: '/docs/security-credentials',
    title: 'Security & Credentials',
    description: 'Security boundaries for keys, credentials, and permissions.',
    icon: <ShieldCheck className="size-5" />,
  },
  {
    href: '/docs/agent-building/quickstart',
    title: 'Building Agents',
    description: 'Create, configure, and run your first Agent.',
    icon: <Bot className="size-5" />,
  },
  {
    href: '/docs/team-usage/quickstart',
    title: 'Team Usage',
    description: 'Team collaboration, approvals, roles, and permissions.',
    icon: <Users className="size-5" />,
  },
  {
    href: '/docs/billing/personal-and-team',
    title: 'Billing',
    description: 'Personal, team, and enterprise plans and pricing.',
    icon: <CreditCard className="size-5" />,
  },
  {
    href: '/docs/privacy-and-legal/privacy-policy',
    title: 'Privacy & Legal',
    description: 'Privacy policy and legal notices.',
    icon: <Scale className="size-5" />,
  },
  {
    href: '/docs/changelog',
    title: 'Changelog',
    description: 'Latest features and changes.',
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
            Heicode Official Docs
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            The intelligent dev platform
            <br />
            from idea to production
          </h1>
          <p className="max-w-xl text-fd-muted-foreground">
            Learn how to build Agents, collaborate as a team, and manage
            billing and security in Heicode — covering every step of the
            software lifecycle.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/docs/introduction"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.02]"
              style={{ background: 'var(--gradient-brand)' }}
            >
              Start Reading
              <ArrowRight className="size-4" />
            </Link>
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

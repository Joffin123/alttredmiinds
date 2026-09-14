import Image from 'next/image';
import Link from 'next/link';
import { footerColumns, site } from '@/data/site';

const socials = [
  {
    label: 'Instagram',
    href: site.socials.instagram,
    icon: (
      <path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.2.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2Zm0-2.2C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.2 4.4 2.6 6.8 7 7 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.2-4.4-2.6-6.8-7-7C15.7 0 15.3 0 12 0Zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.8a1.4 1.4 0 1 0 0 2.9 1.4 1.4 0 0 0 0-2.9Z" />
    ),
  },
  {
    label: 'LinkedIn',
    href: site.socials.linkedin,
    icon: (
      <path d="M22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2ZM7.1 20.5H3.6V9h3.5v11.5ZM5.3 7.4a2 2 0 1 1 0-4.1 2 2 0 0 1 0 4.1Zm15.2 13.1H17v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.5V9h3.4v1.6c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.2 2.4 4.2 5.5v6.3Z" />
    ),
  },
  {
    label: 'YouTube',
    href: site.socials.youtube,
    icon: (
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#070707]">
      <div className="mx-auto max-w-[1440px] px-5 pt-14 sm:px-8 lg:px-[43px]">
        <div className="grid gap-10 border-b border-[#ececec]/80 pb-12 sm:grid-cols-2 lg:grid-cols-[312px_repeat(4,1fr)] lg:gap-0 lg:pb-[58px]">
          <div className="flex flex-col gap-10 sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Alttred Miinds home" className="w-fit">
              <Image src="/images/logo.png" alt="Alttred Miinds" width={289} height={71} className="h-[40px] w-auto" />
            </Link>
            <ul className="flex items-center gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-lg text-white transition duration-300 hover:-translate-y-1 hover:text-brand"
                  >
                    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
                      {s.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title} className="lg:pl-10">
              <h3 className="mb-4 text-[13px] font-bold uppercase tracking-[0.06em] text-[#999]">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[14.5px] text-[#666] transition-colors hover:text-cream">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 py-6 text-[13px] text-[#aaa] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Alttred Miinds. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/legal" className="transition-colors hover:text-cream">
              Legal &amp; Disclaimer
            </Link>
            <Link href="/social-policy" className="transition-colors hover:text-cream">
              Social Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

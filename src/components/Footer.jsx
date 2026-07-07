import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-ink/[0.09]">
      <div className="flex flex-col gap-10 px-4 pt-12 pb-8 sm:px-8 sm:pt-14 md:flex-row md:flex-wrap md:gap-8 lg:flex-nowrap lg:gap-0 lg:px-[99px] lg:pt-[54px] lg:pb-10">
        <div className="w-full md:w-auto lg:w-[351px]">
          <a href="#" className="flex items-center gap-2.5">
            <svg width="34" height="34" viewBox="0 0 30 30" fill="none">
              <rect x="15" y="1" width="19.8" height="19.8" rx="4" transform="rotate(45 15 1)" stroke="#13120f" strokeWidth="2" />
              <rect x="15" y="8" width="9.9" height="9.9" rx="2" transform="rotate(45 15 8)" fill="#1f6f4a" />
            </svg>
            <span className="logo-mark leading-none">
              <span className="block text-[22px] font-extrabold text-ink">Alttred</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.35em] text-muted">Miinds</span>
            </span>
          </a>
        </div>

        <div className="w-1/2 md:w-[220px] lg:w-[283px]">
          <p className="text-[13px] font-bold text-ink">Services</p>
          <ul className="mt-4 space-y-[11px] text-sm text-muted">
            <li><a href="#services" className="transition hover:text-ink">Performance Marketing</a></li>
            <li><a href="#services" className="transition hover:text-ink">SEO • AIO • GEO</a></li>
            <li><a href="#services" className="transition hover:text-ink">Conversion Rate Optimization</a></li>
            <li><a href="#services" className="transition hover:text-ink">Web Development</a></li>
            <li><a href="#services" className="transition hover:text-ink">Creative Strategy</a></li>
          </ul>
        </div>

        <div className="w-1/2 md:w-[280px] lg:w-[360px]">
          <p className="text-[13px] font-bold text-ink">Industries</p>
          <div className="mt-4 grid grid-cols-2 gap-x-4">
            <ul className="space-y-[11px] text-sm text-muted">
              <li>Healthcare</li>
              <li>D2C &amp; eCommerce</li>
              <li>SaaS</li>
              <li>Real Estate</li>
              <li>Education</li>
            </ul>
            <ul className="space-y-[11px] text-sm text-muted">
              <li>Manufacturing</li>
              <li>Professional Services</li>
              <li>Finance</li>
              <li>Hospitality</li>
            </ul>
          </div>
        </div>

        <div className="w-full md:flex-1">
          <p className="text-[13px] text-ink"><span className="font-bold">Contact</span> Prashant V. Joshi</p>
          <ul className="mt-4 space-y-[11px] text-sm text-muted">
            <li><a href="mailto:prashant@alttredmiinds.com" className="transition hover:text-ink">prashant@alttredmiinds.com</a></li>
            <li><a href="tel:+19082856359" className="transition hover:text-ink">+1 (908) 285-6359</a></li>
            <li><a href="#" className="transition hover:text-ink">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-4 flex flex-col items-center gap-2 border-t border-ink/[0.09] py-6 text-center sm:mx-8 sm:flex-row sm:justify-between sm:py-0 lg:mx-[99px] lg:h-[70px] lg:px-[55px]">
        <p className="text-[13px] text-muted">&copy; 2026 Alttred Miinds. All rights reserved.</p>
        <p className="text-[13px] text-muted">Privacy Policy &middot; Terms of Service</p>
      </div>
    </footer>
  );
}

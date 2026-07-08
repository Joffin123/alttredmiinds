import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-ink/[0.09]">
      <div className="flex flex-col items-center gap-10 px-4 pt-12 pb-8 text-center sm:px-8 sm:pt-14 md:flex-row md:flex-wrap md:items-start md:gap-8 md:text-left lg:flex-nowrap lg:gap-0 lg:px-[96px] lg:pt-[54px] lg:pb-10">
        <div className="w-full md:w-auto lg:w-[351px] lg:pl-[40px]">
          <a href="#" className="flex items-center justify-center md:justify-start">
            <Image src="/images/header-logo.png" alt="Alttred Miinds" width={300} height={74} className="h-10 w-auto sm:h-12 lg:h-[63px]" />
          </a>
        </div>

        <div className="w-full md:w-[220px] lg:w-[283px]">
          <p className="text-[13px] font-bold text-ink">Services</p>
          <ul className="mt-4 space-y-[11px] whitespace-nowrap text-sm text-muted">
            <li><a href="#services" className="transition hover:text-ink">Performance Marketing</a></li>
            <li><a href="#services" className="transition hover:text-ink">SEO • AIO • GEO</a></li>
            <li><a href="#services" className="transition hover:text-ink">Conversion Rate Optimization</a></li>
            <li><a href="#services" className="transition hover:text-ink">Web Development</a></li>
            <li><a href="#services" className="transition hover:text-ink">Creative Strategy</a></li>
          </ul>
        </div>

        <div className="w-full md:w-[280px] lg:w-[360px]">
          <p className="text-[13px] font-bold text-ink">Industries</p>
          <div className="mt-4 grid grid-cols-1 gap-x-4 sm:grid-cols-2">
            <ul className="space-y-[11px] whitespace-nowrap text-sm text-muted">
              <li>Healthcare</li>
              <li>D2C &amp; eCommerce</li>
              <li>SaaS</li>
              <li>Real Estate</li>
              <li>Education</li>
            </ul>
            <ul className="space-y-[11px] whitespace-nowrap text-sm text-muted">
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
            <li><a href="tel:+91 8971816166" className="transition hover:text-ink">+91 8971816166</a></li>
            <li><a href="https://www.linkedin.com/in/prashantjoshionlinkedin/" className="transition hover:text-ink">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-4 border-t border-ink/[0.09] sm:mx-8 lg:mx-[96px]">
        <div className="flex flex-col items-center gap-2 py-6 text-center sm:flex-row sm:justify-between sm:py-5 sm:text-left lg:h-[75px] lg:px-[58px] lg:py-0">
          <p className="text-[13px] text-muted">&copy; 2026 Alttred Miinds. All rights reserved.</p>
          <p className="text-[13px] text-muted">Privacy Policy &middot; Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}

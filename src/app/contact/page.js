import ContactForm from '@/components/ContactForm';
import { Reveal, WordReveal } from '@/components/motion';
import { site } from '@/data/site';

export const metadata = {
  title: 'Contact Us',
  description: 'Request a strategy call with Alttred Miinds. Data-backed, creative-led growth for brands who want profit.',
};

const steps = [
  { title: 'Discovery call', body: '30 minutes on your numbers, channels and ceiling. No pitch deck.' },
  { title: 'Growth audit', body: 'We dig into your accounts and funnel to find where profit is leaking.' },
  { title: 'Your growth plan', body: 'A clear, costed roadmap. Run it with us, or take it and run.' },
];

export default function ContactPage() {
  return (
    <section className="container-site grid gap-14 pb-24 pt-[130px] lg:grid-cols-[1fr_560px] lg:gap-20 lg:pb-32 lg:pt-[190px]">
      <div>
        <Reveal as="p" className="mb-4 text-[12px] uppercase tracking-[0.14em] text-brand">
          Contact us
        </Reveal>
        <WordReveal
          as="h1"
          immediate
          lines={['Let’s Build Your', 'Growth Engine.']}
          className="heading-xl text-[44px] sm:text-[56px] lg:text-[66px]"
        />
        <Reveal as="p" delay={0.3} className="mt-6 max-w-[460px] text-[18px] leading-[1.45] text-muted">
          Strategy, creative, media buying, and optimization, all focused on one thing: measurable growth.
        </Reveal>

        <ol className="mt-12 space-y-0 border-t border-line">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={0.35 + i * 0.1} className="grid grid-cols-[48px_1fr] border-b border-line py-5">
              <span className="pt-1 text-[14px] text-muted">/0{i + 1}</span>
              <div>
                <h2 className="font-serif text-[26px] font-light leading-tight">{s.title}</h2>
                <p className="mt-1 text-[15px] text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal as="p" delay={0.6} className="mt-8 text-[15px] text-muted">
          Prefer email?{' '}
          <a href={`mailto:${site.email}`} className="text-cream underline decoration-line underline-offset-4 transition hover:decoration-brand">
            {site.email}
          </a>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="h-fit rounded-3xl border border-line bg-panel/80 p-6 backdrop-blur sm:p-9">
        <h2 className="heading-xl mb-2 text-[32px]">Request a strategy call</h2>
        <p className="mb-7 text-[15px] text-muted">We reply within one business day.</p>
        <ContactForm />
      </Reveal>
    </section>
  );
}

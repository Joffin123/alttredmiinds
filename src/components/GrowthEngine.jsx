'use client';

import { useState } from 'react';
import Reveal from './Reveal';

const TABS = [
  { id: 'acquire', label: 'Acquire', content: 'Reach high-intent customers through Google, Meta, LinkedIn and other performance channels.' },
  { id: 'rank', label: 'Rank', content: 'Get discovered on search engines and AI platforms with SEO, AIO and GEO strategies.' },
  { id: 'convert', label: 'Convert', content: 'Turn traffic into revenue with high-converting landing pages, funnels and CRO.' },
  { id: 'scale', label: 'Scale', content: 'Double down on what works with data-driven budgets, creative and reporting.' },
];

export default function GrowthEngine() {
  const [activeTab, setActiveTab] = useState('rank');
  const active = TABS.find((tab) => tab.id === activeTab);

  return (
    <section className="pt-10 sm:pt-12 lg:px-[96px] lg:pt-[49px]">
      <Reveal className="bg-deep px-5 py-12 sm:px-10 lg:px-[90px] lg:pb-[48px] lg:pt-[62px]">
        <p className="max-w-[910px] text-lg font-light leading-[1.6] text-white sm:text-xl lg:text-[24px]">
          At{' '}
          <span className="relative -top-[2px] inline-block rounded-lg bg-gold/[0.18] px-2.5 py-0.5 text-base font-medium text-white lg:text-lg">
            Alttred Miinds
          </span>
          , we connect paid media, organic search, conversion optimization, creative, and web
          experiences into one measurable growth engine.
        </p>

        <div className="mt-8 flex flex-col gap-6 sm:mt-10 lg:mt-[40px] lg:flex-row lg:items-stretch lg:gap-[54px]">
          {/* Left: Tab List Card */}
          <div
            className="flex shrink-0 flex-wrap gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3 sm:p-4 lg:w-[447px] lg:flex-col lg:justify-center lg:gap-2 lg:px-5 lg:py-6"
            role="tablist"
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={tab.id === activeTab}
                onClick={() => setActiveTab(tab.id)}
                className={`h-[42px] rounded-xl px-5 text-left text-sm font-medium transition-all duration-300 sm:h-[46px] lg:h-[43px] ${
                  tab.id === activeTab
                    ? 'bg-white text-ink shadow-lg scale-[1.02]'
                    : 'text-white/[0.6] hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Right: Content Card */}
          <div className="flex min-h-[220px] flex-1 items-center justify-center rounded-2xl bg-white p-6 shadow-2xl sm:p-10 lg:min-h-0 lg:h-[180px] lg:max-w-[505px] lg:self-center lg:p-8">
            <p
              key={activeTab}
              className="max-w-[420px] animate-[fade-in_0.5s_ease-out] text-center text-lg font-medium leading-[1.5] text-ink sm:text-xl lg:text-[22px]"
            >
              {active.content}
            </p>
          </div>
        </div>

        <p className="mt-8 text-lg font-normal text-white sm:text-xl lg:mt-6 lg:text-[24px]">
          One strategy. One team. Sustainable growth.
        </p>
      </Reveal>
    </section>
  );
}

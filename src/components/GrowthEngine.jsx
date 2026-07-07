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
    <section className="mt-10 px-4 sm:px-8 lg:mt-12 lg:px-[99px]">
      <Reveal className="rounded-2xl bg-deep px-6 py-10 sm:px-10 lg:rounded-none lg:px-[91px] lg:py-16">
        <p className="max-w-[910px] text-lg font-light leading-[1.5] text-white sm:text-xl lg:w-[910px] lg:text-2xl">
          At{' '}
          <span className="relative inline-block font-semibold">
            <span className="absolute -inset-x-1 inset-y-0 rounded-md bg-gold opacity-[0.19]"></span>
            <span className="relative">Alttred Miinds</span>
          </span>
          , we connect paid media, organic search, conversion optimization, creative, and web
          experiences into one measurable growth engine.
        </p>

        <div className="mt-8 flex flex-col overflow-hidden rounded-2xl sm:mt-10 lg:mt-[52px] lg:h-[239px] lg:w-[1086px] lg:flex-row">
          <div
            className="flex shrink-0 flex-wrap gap-1.5 bg-white/[0.04] p-3 sm:gap-2 sm:p-4 lg:w-[447px] lg:flex-col lg:justify-center lg:gap-1 lg:px-[18px] lg:py-4"
            role="tablist"
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={tab.id === activeTab}
                onClick={() => setActiveTab(tab.id)}
                className={`h-[38px] rounded-[10px] px-4 text-left text-sm transition-all duration-300 sm:h-[43px] sm:px-[18px] ${
                  tab.id === activeTab ? 'bg-white font-semibold text-ink' : 'text-white/[0.65] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="flex flex-1 items-center justify-center px-3 py-6 sm:px-8 sm:py-8 lg:px-[53px] lg:py-[39px]">
            <div className="flex min-h-[140px] w-full items-center justify-center rounded-[10px] bg-white px-6 py-8 sm:min-h-[160px] lg:h-[180px] lg:px-14 lg:py-0">
              <p key={activeTab} className="max-w-[393px] animate-[fade-in_0.5s_ease-out] text-center text-lg leading-[1.4] text-black sm:text-xl lg:w-[393px] lg:text-2xl">
                {active.content}
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-lg font-light text-white sm:text-xl lg:mt-[46px] lg:text-2xl">One strategy. One team. Sustainable growth.</p>
      </Reveal>
    </section>
  );
}

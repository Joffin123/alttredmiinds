'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { team } from '@/data/site';
import { WordReveal, ease } from './motion';

export default function Team() {
  return (
    <section id="team" aria-labelledby="team-title" className="container-site pb-[70px] pt-24 lg:pt-[92px]">
      <WordReveal lines={['Meet the team']} className="heading-xl text-[40px] sm:text-[48px] lg:pl-[9px] lg:text-[56px]" />
      <span id="team-title" className="sr-only">
        Meet the team
      </span>

      <ul className="mt-12 grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 lg:mt-[58px] lg:grid-cols-4 lg:gap-[44px] lg:px-[19px]">
        {team.map((person, i) => (
          <motion.li
            key={`${person.role}-${i}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: i * 0.1, ease }}
          >
            <article className="group overflow-hidden bg-white transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-2 hover:shadow-[0_30px_60px_-25px_rgba(255,255,255,0.25)]">
              <div className="relative aspect-[277/304] overflow-hidden bg-stone">
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1.12 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 1.5, delay: i * 0.1, ease }}
                >
                  <Image
                    src={person.image}
                    alt={`${person.name}, ${person.role}`}
                    fill
                    sizes="(min-width: 1024px) 277px, (min-width: 480px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
                  />
                </motion.div>
              </div>
              <div className="flex items-start justify-between px-[18px] pb-[24px] pt-[18px]">
                <div>
                  <h3 className="text-[15.3px] leading-tight text-[#121212]">{person.name}</h3>
                  <p className="mt-1.5 text-[12.2px] leading-tight text-black">{person.role}</p>
                </div>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${person.name} (${person.role}) on LinkedIn`}
                  className="text-black transition-colors duration-300 hover:text-[#0a66c2]"
                >
                  <svg viewBox="0 0 19 19" className="h-[18px] w-[18px]" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="currentColor"
                      d="M3.913 2.746c-.608 0-1.1.493-1.1 1.1v11.008c0 .608.492 1.1 1.1 1.1h11.007c.608 0 1.101-.492 1.101-1.1V3.847c0-.608-.493-1.1-1.1-1.1H3.912Zm2.95 2.937c.005.702-.52 1.134-1.144 1.131-.587-.003-1.099-.47-1.096-1.13.003-.62.493-1.118 1.13-1.104.646.015 1.115.488 1.11 1.103Zm2.759 2.025H7.772v6.281h1.954v-.146l-.001-.837c0-.744-.001-1.489.003-2.232 0-.18.009-.368.055-.54.175-.644.754-1.06 1.4-.958.415.065.689.306.805.697.071.244.103.508.106.762.008.769.007 1.538.006 2.306v.948h1.96v-.15l-.001-.995c0-.829 0-1.658.002-2.487a3.93 3.93 0 0 0-.13-1.106c-.138-.539-.422-.985-.883-1.307a2.101 2.101 0 0 0-1.088-.393l-.138-.007c-.205-.011-.414-.023-.61.017-.561.112-1.055.37-1.427.822l-.149.183-.014.018v-.876ZM4.78 13.991h1.945V7.712H4.78v6.28Z"
                    />
                  </svg>
                </a>
              </div>
            </article>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

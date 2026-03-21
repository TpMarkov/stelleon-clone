import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-[100dvh] min-h-[600px] flex flex-col justify-center overflow-hidden bg-white pt-16 lg:pt-20 pb-6">
      <div className="container flex flex-col justify-center h-full" data-typewriter-words="scalable architectures,complex systems,high performance">
        <div className="horizontal-content justify-left flex flex-col flex-wrap gap-x-12 gap-y-3 text-neutral-600 md:flex-row md:items-center leading-none [&_h1]:mb-[.15em] [&_h1]:w-full [&_h1]:text-[min(11vw,10vh,6.5rem)] [&_h1]:font-light [&_h1]:text-[#2F3033] xl:[&_h1]:leading-[0.85] xxl:[&_h1]:text-[min(13vw,150px)] [&_h1_i]:not-italic [&_h1_i]:text-brand-primary [&_h2]:mb-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:mb-4 [&_h3]:text-xl [&_h3]:font-medium [&_p]:m-0 [&_p]:inline-block [&_p]:max-w-[28em] [&_p]:font-normal [&_p]:leading-[130%] [&_p]:tracking-[0.01em] [&_p]:text-neutral-600 lg:[&_p]:text-[min(2.2vh,17px)] [&_h1_b]:font-inherit [&_h1_b]:align-center [&_h1_b]:inline-block [&_h1_b]:whitespace-nowrap [&_h1_b]:bg-neutral-200 [&_h1_b]:pr-[.05em] [&_h1_b]:align-bottom [&_h1_b]:font-black [&_h1_b]:!text-black [&_h1_b]:text-inherit [&_h1_b]:shadow-[-.05em_.05em_0_.05em_#EAEAEB]">
          <h1>
            Creating<br />
            <i>software</i> for<br />
            <b>complex systems</b>
          </h1>
          <p>
            From startups to global scaleups, we design, engineer, and scale reliable digital products built on clean architecture, robust infrastructure, and long-term maintainability.
          </p>
          <a
            href="/portfolio/"
            className="contact-button group/link inline-flex w-fit items-center gap-4 rounded bg-brand-primary-500 px-6 py-2.5 text-center text-base font-bold leading-relaxed text-white transition-colors duration-300 hover:bg-brand-primary-600 focus-visible:bg-brand-primary-600 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-600 disabled:opacity-30 xs:w-fit lg:px-8 lg:py-3 lg:text-md [&_svg]:inline-block [&_svg]:transition-all"
          >
            See our work
            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
              <path d="M2 12H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M25 7L30 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M25 17L30 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </a>
        </div>
        <div className="mt-4 flex flex-row flex-wrap items-center gap-4 sm:mt-8 lg:mt-6">
          <span className="whitespace-nowrap text-center text-sm text-neutral-400 sm:mr-6 lg:text-left">Trusted by:</span>
          <ul className="contents flex-wrap items-center justify-center gap-6 opacity-60 sm:flex lg:justify-start lg:gap-10">
            <li className="flex items-center justify-center">
              <img
                src="https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F176x52%2Fc203eef352%2Falyne-dark.webp&w=88&h=26&dpl=69bd7828c00f6d00087cef7c"
                alt="Brand logo"
                style={{ aspectRatio: '88/26' }}
                loading="eager"
                decoding="async"
                fetchPriority="auto"
                width={88}
                height={26}
                className="max-h-12 w-auto object-contain grayscale filter"
              />
            </li>
            <li className="flex items-center justify-center">
              <img
                src="https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F128x56%2F85633b799f%2Fhumly-dark.webp&w=64&h=28&dpl=69bd7828c00f6d00087cef7c"
                alt="Brand logo"
                style={{ aspectRatio: '64/28' }}
                loading="eager"
                decoding="async"
                fetchPriority="auto"
                width={64}
                height={28}
                className="max-h-12 w-auto object-contain grayscale filter"
              />
            </li>
            <li className="flex items-center justify-center">
              <img
                src="https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F256x41%2F55090e2181%2Fdefined-learning-dark.webp&w=128&h=20&dpl=69bd7828c00f6d00087cef7c"
                alt="Brand logo"
                style={{ aspectRatio: '128/20' }}
                loading="eager"
                decoding="async"
                fetchPriority="auto"
                width={128}
                height={20}
                className="max-h-12 w-auto object-contain grayscale filter"
              />
            </li>
            <li className="flex items-center justify-center">
              <img
                src="https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F176x38%2F623bf40901%2Fbrand-actif-dark.webp&w=88&h=19&dpl=69bd7828c00f6d00087cef7c"
                alt="Brand logo"
                style={{ aspectRatio: '88/19' }}
                loading="eager"
                decoding="async"
                fetchPriority="auto"
                width={88}
                height={19}
                className="max-h-12 w-auto object-contain grayscale filter"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};


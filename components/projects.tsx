"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { PROJECTS_DATA } from "@/constants";
import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

type ProjectProps = (typeof PROJECTS_DATA)[number];

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
}: ProjectProps) => {
  const projectRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.article
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      ref={projectRef}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <div className="bg-gray-100 max-w-[42rem] sm:group-even:pl-8 border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] rounded-lg hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-6 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] overflow-y-auto overflow-x-hidden custom-scroll">
          <h3 className="text-2xl font-semibold">{title}</h3>

          <p className="my-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>

          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, i) => (
              <li
                key={`${title}-tags-${i}`}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={projectUrl}
          target="_blank"
          rel="noreferrer noopener"
          title={`Visit Project: ${title}`}
          className="group/project"
        >
          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem]
            rounded-t-lg shadow-2xl group-even:right-[initial] 
            group-even:-left-40 group-hover:-translate-x-3
            group-hover:translate-y-3 group-hover:-rotate-2

            group-focus/project:-translate-x-3
            group-focus/project:translate-y-3 group-focus/project:-rotate-2
            group-even:group-focus/project:translate-x-3
            group-even:group-focus/project:translate-y-3 group-even:group-focus/project:rotate-2
            
            group-focus/project:scale-[1.04]
            
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2
            
            group-hover:scale-[1.04] transition"
          />
        </Link>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  const [showAll, setShowAll] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const visibleProjects = showAll ? PROJECTS_DATA : PROJECTS_DATA.slice(0, 3);

  const handleButtonClick = () => {
    setShowAll((prevShowAll) => {
      const newShowAll = !prevShowAll;
      if (buttonRef.current) {
        buttonRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return newShowAll;
    });
  };

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {visibleProjects.map((project, i) => (
          <Project key={`project-${i}`} {...project} />
        ))}
      </div>
      {PROJECTS_DATA.length > 3 && (
        <button
          onClick={handleButtonClick}
          ref={buttonRef}
          className="group mt-10 flex self-center sm:self-start items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
        >
          {showAll ? 'Show less' : 'Show more'}
        </button>
      )}
    </section>
  );
};

export default Projects;

"use client";

import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        I'm a web developer with <b className="font-medium">over 3 years</b> of experience in creating <b className="font-medium">modern</b> and <b className="font-medium">scalable</b> applications.
        I have a strong background in building <b className="font-medium">secure, high-performing </b> apps and <b className="font-medium"> user-friendly </b> interfaces. I'm skilled at solving problems, adding new features, and making sure everything runs smoothly.
        I always strive to meet people's needs, which is how I achieve my <b className="font-medium"> success and goals. </b>
      </p>
    </motion.section>
  );
};

export default About;

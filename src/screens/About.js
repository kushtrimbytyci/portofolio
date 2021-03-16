import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import ScrollToTop from "../components/ScrollToTop";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const About = () => {
  return (
    <motion.div variants={pageAnimation} initial='initial' animate='animate' exit='exit'>
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollToTop />
    </motion.div>
  );
};

export default About;

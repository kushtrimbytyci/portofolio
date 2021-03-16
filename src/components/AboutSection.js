import React from "react";
import Wave from "./Wave";
import { About, Description, Image, Hide } from "../styles/styles";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
// Animation
import { titleAnimation, fade, photoAnimation } from "../animation";
const AboutSection = () => {
  const { push } = useHistory();
  return (
    <About>
      <Description>
        <div>
          <Hide>
            <motion.h2 variants={titleAnimation}>Hello, I'm </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              <span>Kushtrim Bytyqi</span>
            </motion.h2>
          </Hide>
          {/* <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide> */}
        </div>
        <motion.p variants={fade}>
          I'm a full-stack web developer from Kosovo who loves building user-friendly websites and
          web apps.
        </motion.p>

        <motion.button variants={fade} onClick={() => push("/contact")}>
          Contact me
        </motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnimation} src='./images/personal.jpg' alt='guy with a camera' />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;

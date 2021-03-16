import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useScroll } from "../components/useScroll";
import ScrollToTop from "../components/ScrollToTop";

// Animation
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  sliderAnimation,
  sliderContainer,
} from "../animation";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();

  return (
    <>
      <Work variants={pageAnimation} initial='initial' animate='animate' exit='exit'>
        <motion.div variants={sliderContainer}>
          <Frame1 variants={sliderAnimation} />
          <Frame2 variants={sliderAnimation} />
          <Frame3 variants={sliderAnimation} />
          <Frame4 variants={sliderAnimation} />
        </motion.div>
        <App>
          <motion.h2 variants={fade}>Kujdestarja</motion.h2>
          <motion.div className='line' variants={lineAnimation}></motion.div>
          <Link to='/appdetails/0'>
            <Hide>
              <motion.img variants={photoAnimation} src='/images/kujdestarja1.png' alt='athlete' />
            </Hide>
          </Link>
        </App>
        <App ref={element} variants={fade} animate={controls}>
          <h2>GoMovie</h2>
          <motion.div
            className='line'
            variants={lineAnimation}
            ref={element}
            animate={controls}
          ></motion.div>
          <Link to='/appdetails/1'>
            <img src='/images/gomovie.png' alt='theracer' />
          </Link>
        </App>

        <App ref={element2} variants={fade} animate={controls2}>
          <h2>Yummi Pizza</h2>
          <motion.div
            className='line'
            variants={lineAnimation}
            ref={element2}
            animate={controls2}
          ></motion.div>
          <Link to='/appdetails/2'>
            <img src='/images/yummiPizza.png' alt='goodtimes' />
          </Link>
        </App>
        {/* <App ref={element3} variants={fade} animate={controls3}>
          <h2>AMshop</h2>
          <motion.div
            className='line'
            variants={lineAnimation}
            ref={element3}
            animate={controls3}
          ></motion.div>
          <Link to='/appdetails/2'>
            <img src='/images/yummiPizza.png' alt='goodtimes' />
          </Link>
        </App> */}
      </Work>

      <ScrollToTop />
    </>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background-color: white;

  h2 {
    padding: 1rem 0rem;
  }
`;
const App = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

// Frame animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWork;

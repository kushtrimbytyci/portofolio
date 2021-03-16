import React from "react";
import styled from "styled-components";
import { About, Description, Image } from "../styles/styles";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services ref={element} variants={scrollReveal} animate={controls}>
      <Description>
        <h2 style={{ textAlign: "center" }}>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className='icon'>
              <img src='/images/clock.svg' alt='clock' />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src='/images/diaphragm.svg' alt='diaphragm' />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src='/images/money.svg' alt='money' />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src='/images/teamwork.svg' alt='teamwork' />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src='/images/developer.jpg' alt='' />
      </Image>
    </Services>
  );
};

// Copy About styles and add some more styles to it.
const Services = styled(About)`
  h2 {
    padding-bottom: 3rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    justify-content: center;
  }
  justify-content: space-around;
`;
const Card = styled.div`
  flex-basis: 10rem;
  .icon {
    display: flex;
    align-items: center;
    margin: 1rem;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;
export default ServicesSection;

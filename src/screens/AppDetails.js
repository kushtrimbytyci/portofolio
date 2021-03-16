import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { MovieState } from "../movieState";
import ScrollToTop from "../components/ScrollToTop";

// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = MovieState[id];
  return (
    <>
      {movie && (
        <Details variants={pageAnimation} initial='initial' animate='animate' exit='exit'>
          <HeadLine>
            <h2>{movie.title}</h2>
            <ImageDisplay>
              <img src={movie.mainImg} alt='movie' />
            </ImageDisplay>
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award title={award.title} description={award.description} key={award.title} />
            ))}
          </Awards>
        </Details>
      )}
      <ScrollToTop />
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;
const AwardStyle = styled.div`
  padding: 5rem;
  height: 10rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 0;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: top;
  }
`;

//Award Component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3 style={{ height: "100px", padding: 0 }}>{title}</h3>
      <div className='line'></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetails;

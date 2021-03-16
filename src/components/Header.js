import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id='logo' to='/'>
          MyPortofolio
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>
            Me
            <motion.div className='nav-line'></motion.div>
            <Line
              initial={{ width: "0%" }}
              animate={{
                width: pathname === "/" ? "100%" : 0,
                transition: { duration: 0.3, ease: "easeIn" },
              }}
            />
          </Link>
        </li>
        <li>
          <Link to='/mywork'>
            My Work
            <motion.div className='nav-line'></motion.div>
            <Line
              initial={{ width: "0%" }}
              animate={{
                width: pathname === "/mywork" ? "100%" : 0,
                transition: { duration: 0.3, ease: "easeIn" },
              }}
            />
          </Link>
        </li>
        <li>
          <Link to='/contact'>
            Contact
            <motion.div className='nav-line'></motion.div>
            <Line
              initial={{ width: "0%" }}
              animate={{
                width: pathname === "/contact" ? "100%" : 0,
                transition: { duration: 0.3, ease: "easeIn" },
              }}
            />
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 2rem;
    a {
      position: relative;
    }
    &:hover .boo {
      width: 100%;
    }
  }
`;

const Line = styled(motion.div)`
  position: absolute;
  bottom: -30%;
  left: 1%;
  width: 0;
  height: 0.2rem;
  background-color: #23d997;
  transition: all 0.3s ease-in;
`;

export default Header;

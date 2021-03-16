import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./screens/About";
import OurWork from "./screens/OurWork";
import Contact from "./screens/Contact";
import GlobalStyle from "./styles/GlobalStyle";
import AppDetails from "./screens/AppDetails";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const Router = () => {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' component={About} />
          <Route exact path='/mywork' component={OurWork} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/appdetails/:id' component={AppDetails} />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default Router;

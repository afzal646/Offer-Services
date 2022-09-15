import React from "react";
import Navbar from "./navbar";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import StillThinkingAboutProcess from "./StillThinkingAboutProcess";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks />
      <Aboutus />
      <Services />
      <StillThinkingAboutProcess/>
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

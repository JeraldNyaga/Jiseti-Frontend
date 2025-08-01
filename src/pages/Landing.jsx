import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import About from "../components/About";
import Working from "../components/Working";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <>
    <div id ="home" className="min-h-[0px]"></div>
      <Header />
      <Container />
      <About />
      <Working />
      <Footer />
    </>
  );
};

export default Landing;

import React from "react";
import Hero from "../components/hero/Hero";
import Gallary from "../components/gallary/Gallary";

const gallery = () => {
  return (
    <>
      <Hero pageName="GALLERY" title="Gallery" />
      <Gallary />
    </>
  );
};

export default gallery;

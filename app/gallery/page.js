import React from "react";
import Hero from "../components/hero/Hero";
import Gallary from "../components/gallary/Gallary";

const gallery = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero pageName="GALLERY" title="Gallery" />
      {/* Gallary Section */}
      <Gallary />
    </>
  );
};

export default gallery;

"use client";
import React from "react";
import Hero from "../components/hero/Hero";
import WeAwesome from "../components/weAwesome/WeAwesome";
import WhyChooseUs from "../components/whyChooseUs/WhyChooseUs";
import Testimonial from "../components/testimonial/Testimonial";

const whyus = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero pageName="WHY US" title="Benifits of using Stodeo" />
      {/* We Awesome Section */}
      <WeAwesome />
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      {/* Testimonial Section */}
      <Testimonial />
    </>
  );
};

export default whyus;

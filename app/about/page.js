"use client";
import React from "react";
import Hero from "../components/hero/Hero";
import Counter from "../components/counter/Counter";
import WeAwesome from "../components/weAwesome/WeAwesome";
import WhyChooseUs from "../components/whyChooseUs/WhyChooseUs";
import Testimonial from "../components/testimonial/Testimonial";

const about = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero pageName="ABOUT" title="About Us" />
      {/* Counter Section */}
      <Counter />
      {/* We Awesome Section */}
      <WeAwesome />
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      {/* Testimonial Section */}
      <Testimonial />
    </>
  );
};

export default about;

import React from "react";
import Hero from "../components/hero/Hero";
import ContactForm from "../components/contact/Contact";

const contact = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero pageName="CONTACT" title="Contact Us" />
      {/* Contact Section */}
      <ContactForm />
    </>
  );
};

export default contact;

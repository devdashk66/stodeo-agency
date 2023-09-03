"use client";

// Importing various components used in the Home component
import Hero from "./components/hero/Hero";
import RecentBlog from "./components/recentBlog/RecentBlog";
import WelcomeSection from "./components/welcomeSection/WelcomeSection";
import WhyChooseUs from "./components/whyChooseUs/WhyChooseUs";
import WhyStodeo from "./components/whyStodeo/WhyStodeo";

// Defining the Home component as a default export
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        pageName="WELCOME TO OUR SITE"
        title="We have the best solution for your business to grow."
        bgColor="#ffffff"
      />

      {/* Welcome Section */}
      <WelcomeSection />

      {/* Why Stodeo Section */}
      <WhyStodeo />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Recent Blog Section */}
      <RecentBlog />
    </>
  );
}

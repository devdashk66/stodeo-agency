"use client";
import Hero from "./components/hero/Hero";
import WelcomeSection from "./components/welcomeSection/WelcomeSection";
import WhyStodeo from "./components/whyStodeo/WhyStodeo";

export default function Home() {
  return (
    <>
      {/*////////////////////////////////////////////
        ——————————————— Hero Section ———————————————
      ///////////////////////////////////////////////*/}
      <Hero
        pageName="WELCOME TO OUR SITE"
        title="We have the best solution for your business to grow."
        bgColor="#ffffff"
      />
      {/*////////////////////////////////////////////
        —————————————— Welcome Section ——————————————
      ///////////////////////////////////////////////*/}
      <WelcomeSection />
      {/*////////////////////////////////////////////
        ———————————— Why Stodeo Section ————————————
      ///////////////////////////////////////////////*/}
      <WhyStodeo />
    </>
  );
}

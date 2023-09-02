import Hero from "./components/hero/Hero";

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
    </>
  );
}

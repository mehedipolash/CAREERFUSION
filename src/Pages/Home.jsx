import React, { Suspense } from "react";
import Companies from "../Components/Companies";
import Hero from "../Components/Hero";
import FAQA from "../Components/FAQA.jsx";
import CareerTips from "../Components/CareerTips.jsx";

const Home = () => {
  return (
    <div>
      
      <section>
        <Hero></Hero>
      </section>
      <section>
        <Suspense
          fallback={<span className="loading loading-bars loading-sm"></span>}
        >
          <Companies></Companies>
        </Suspense>
      </section>
      <section>
        <FAQA></FAQA>
      </section>
      <section>
        <CareerTips></CareerTips>
      </section>
    </div>
  );
};

export default Home;

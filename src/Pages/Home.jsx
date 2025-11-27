import React, { Suspense } from "react";
import Companies from "../Components/Companies";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <div>
      <h2 className="text-center">Home page</h2>
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
      <section></section>
      <section></section>
    </div>
  );
};

export default Home;

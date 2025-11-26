import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-3">
            <Navbar></Navbar>
        </nav>
      </header>

      <main>
        <button className="btn btn-primary">ggggggg</button>
        <button className="btn btn-secondary">ggggggg</button>
        <Outlet></Outlet>
        <section>
          <h2 className="text-accent">custom section</h2>
        </section>
        <section>
          <h2>custom section</h2>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;

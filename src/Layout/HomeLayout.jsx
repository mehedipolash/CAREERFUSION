import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const HomeLayout = () => {
  return (
    <div className="min-h-screen">
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>

      <main className="w-11/12 mx-auto my-3">
        <Outlet>
          
        </Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;

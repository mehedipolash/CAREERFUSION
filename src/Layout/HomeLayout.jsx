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
        <Outlet></Outlet>
        <section>
          <h2 className="text-accent">custom section</h2>
        </section>
        <section>
          <h2>custom section</h2>
        </section>
      </main>
      
      <footer className="fixed bottom-0 left-0 right-0">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
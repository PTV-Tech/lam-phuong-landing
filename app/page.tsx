"use client";
import {Fragment, Suspense} from "react";
import Header from "./components/header";
import Banner from "./components/banner";
import About from "./components//about";
import Services from "./components/services";
import Parallax from "./components/parallax";
import Studies from "./components/studies";
import Careers from "./components/careers";
import Partners from "./components/partners";
import Footer from "./components/footer";
import { RouterRoot } from "@/app/contants";

const page = () => {
  return (
    <Fragment>
      <Header />

      <main>
        <section id={RouterRoot.Home} className="section">
          <Suspense>
            <Banner />
          </Suspense>
        </section>

        <section id={RouterRoot.About} className="section">
          <About />
        </section>

        <section id={RouterRoot.Service} className="section">
          <Services />
        </section>

        <Parallax />

        <section id={RouterRoot.Studies} className="section">
          <Studies />
        </section>

        <section id={RouterRoot.Career} className="section">
          <Careers />
        </section>

        <section id={RouterRoot.Partner} className="section">
          <Partners />
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default page;

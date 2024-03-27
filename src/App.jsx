import React from "react";
// import {
//   Hero,
//   PopularProduct,
//   SuperQuality,
//   Services,
//   SpeicalOffter,
//   CustumerReviews,
//   Subcribe,
//   Footer,
//   Nav,
// } from "./sections/index";
import Hero from "./sections/Hero";
import PopularProduct from "./sections/PopularProduct";
import SuperQuality from "./sections/superQuality";
import Services from "./sections/Services";
import CustumerReviews from "./sections/CustumerReviews";
import SpeicalOffter from "./sections/speicalOffter";
import Subcribe from "./sections/Subcribe";
import Footer from "./sections/Footer";
import Nav from "./components/Nav";
const App = () => (
  <main className="">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProduct />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpeicalOffter />
    </section>
    <section className="padding  bg-pale-blue">
      <CustumerReviews />
    </section>
    <section className="padding-x sm:py32 py16 w-full">
      <Subcribe />
    </section>
    <section className="padding bg-black text-white">
      <Footer />
    </section>
  </main>
);

export default App;

import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Freebook></Freebook>
      <Footer></Footer>
    </>
  );
}

export default Home;

import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Featured from "../components/Featured";
import PropertyList from "../components/PropertyList";
import FeaturedProperties from "../components/FeaturedProperties";
import MaiList from "../components/MaiList";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type </h1>
        <PropertyList/>
       
        <h1 className="homeTitle">Homes guests love </h1>
        <FeaturedProperties/>
        <MaiList/>
        <Footer/>
       
      </div>
    
    </div>
  );
};

export default Home;

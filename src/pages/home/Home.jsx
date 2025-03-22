import React from "react";
import Hero from "../../components/hero/Hero";
import SearchSection from "../../components/searchSection/SearchSection";
import TravelLocations from "../../components/travelLocations/TravelLocations";
import TripCard from "./components/TripCard";

const Home = () => {
  return (
    <div>
      <Hero />
      <SearchSection />
      <TripCard />
      <TravelLocations />
      <TravelLocations />
    </div>
  );
};

export default Home;

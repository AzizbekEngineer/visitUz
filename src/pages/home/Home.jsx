import React from "react";
import Hero from "../../components/hero/Hero";
import SearchSection from "../../components/searchSection/SearchSection";
import TravelLocations from "../../components/travelLocations/TravelLocations";
import TripCard from "./components/TripCard";
import { travelDataLoc } from "../../static";
import { travelDataFood } from "../../static";

const Home = () => {
  return (
    <div>
      <Hero />
      <SearchSection />
      <TripCard />
      <TravelLocations
        data={travelDataLoc}
        title={" THE BEST LOKATIONS IN UZBEKISTAN"}
        subtitle={" TUR: Your Trusted Travel Partners"}
        desc={
          "we believe that travel is more than just visiting new places — it’s about creating lasting memories and meaningful experiences. With years of experience in the travel industry, we specialize in crafting personalized travel itineraries that cater to individual needs, family vacations, and group adventures."
        }
      />
      <TravelLocations
        data={travelDataFood}
        title={"THE BEST FOODS IN UZBEKISTAN"}
        subtitle={" TUR: Your Trusted Travel Partners"}
        desc={
          "we believe that travel is more than just visiting new places — it’s about creating lasting memories and meaningful experiences. With years of experience in the travel industry, we specialize in crafting personalized travel itineraries that cater to individual needs, family vacations, and group adventures."
        }
      />
    </div>
  );
};

export default Home;

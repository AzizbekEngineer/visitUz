import React from "react";
import "./tours.scss";
import SearchSection from "../../components/searchSection/SearchSection";
import TravelLocations from "../../components/travelLocations/TravelLocations";
import Card from "../../components/card/Card";

const Tours = () => {
  return (
    <div className="container">
      <SearchSection />
      <Card count={6} />
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

export default Tours;

import React from "react";
import "./tours.scss";
import SearchSection from "../../components/searchSection/SearchSection";
import TravelLocations from "../../components/travelLocations/TravelLocations";
import Card from "../../components/card/Card";

const Tours = () => {
  return (
    <div className="container">
      <SearchSection />
      <Card />
      <TravelLocations />
    </div>
  );
};

export default Tours;

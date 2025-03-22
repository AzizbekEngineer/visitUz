import React from "react";
import SearchSection from "../../components/searchSection/SearchSection";
import { Outlet } from "react-router-dom";

const Destinations = () => {
  return (
    <div>
      <SearchSection />
      <Outlet />
      <h3>salom</h3>
    </div>
  );
};

export default Destinations;

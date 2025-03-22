import React from "react";
import SearchSection from "../../components/searchSection/SearchSection";

const Destinations = ({ children }) => {
  return (
    <div>
      <SearchSection />
      {children}
      <h3>salom</h3>
    </div>
  );
};

export default Destinations;

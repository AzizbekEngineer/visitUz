import React, { Fragment } from "react";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Tours from "./pages/tours/Tours";
import Destinations from "./pages/destinations/Destinations";
import DestinationOtel from "./pages/destinations/unit/otel/DestinationOtel";

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="tours" element={<Tours />} />
          <Route path="destination/" element={<Destinations />}>
            <Route path="otel" element={<DestinationOtel />} />
          </Route>
        </Routes>
      </Layout>
    </Fragment>
  );
};

export default App;

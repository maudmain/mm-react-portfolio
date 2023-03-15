// Importing the necessary packages from React
import React from "react";

import Navbar from "../Components/Navbar/Navbar";
import Jumbotron from "../Components/Jumbotron/Jumbotron";
import Footer from "../Components/Footer/Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Footer />
    </div>
  );
};

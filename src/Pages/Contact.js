// Importing the necessary packages from React
import React from 'react';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Form from "../Components/Form/Form";
import HeroImg from "../Components/Hero/HeroBg";
import ContactDetails from "../Components/ContactDetails/ContactDetails";

export const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="CONTACT" text="Use the form or see details below." />
      <Form />
      <ContactDetails />
      <Footer />
    </div>
  );
};

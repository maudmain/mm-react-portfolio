import React from 'react';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Form from '../Components/Form/Form';
import HeroImg from '../Components/Hero/HeroBg';


export const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="CONTACT" text="" />
      <Form />
      <Footer />
    </div>
  );
}

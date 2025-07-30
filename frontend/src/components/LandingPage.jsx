import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import CourseContent from "./CourseContent";
import Instructor from "./Instructor";
import Pricing from "./Pricing";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <Hero />
      <CourseContent />
      <Instructor />
      <Pricing />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default LandingPage;
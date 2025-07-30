import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-slate-900">DropshipMaster</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("course")}
              className="text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              Course
            </button>
            <button
              onClick={() => scrollToSection("instructor")}
              className="text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              Instructor
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection("pricing")}
              className="bg-slate-900 hover:bg-slate-800 text-white transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
              <button
                onClick={() => scrollToSection("course")}
                className="block px-3 py-2 text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                Course
              </button>
              <button
                onClick={() => scrollToSection("instructor")}
                className="block px-3 py-2 text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                Instructor
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="block px-3 py-2 text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button 
                  onClick={() => scrollToSection("pricing")}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white transition-all duration-200"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
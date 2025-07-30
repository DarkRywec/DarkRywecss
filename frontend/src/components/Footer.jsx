import React from "react";
import { Mail, MessageSquare, Shield, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">DropshipMaster</h3>
            <p className="text-slate-300 mb-6 max-w-md">
              Learn how to build a profitable dropshipping business with proven strategies 
              and expert guidance from Jacob Rasel.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-slate-300">
                <Mail size={16} />
                <span className="text-sm">jacob@dropshipmaster.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("course")}
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Course Content
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("instructor")}
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  About Jacob
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Guarantees */}
          <div>
            <h4 className="font-semibold mb-4">Our Promise</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Shield size={16} className="text-slate-400" />
                <span className="text-slate-300 text-sm">30-Day Guarantee</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock size={16} className="text-slate-400" />
                <span className="text-slate-300 text-sm">Instant Access</span>
              </li>
              <li className="flex items-center space-x-2">
                <MessageSquare size={16} className="text-slate-400" />
                <span className="text-slate-300 text-sm">Email Support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} DropshipMaster. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
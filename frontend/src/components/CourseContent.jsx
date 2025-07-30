import React from "react";
import { CheckCircle, Target, Zap, ShoppingCart, Globe, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const CourseContent = () => {
  const modules = [
    {
      icon: <Target className="text-slate-600" size={24} />,
      title: "Finding Winning Products",
      description: "Discover the exact criteria for selecting products that sell like crazy. Learn advanced research techniques and tools."
    },
    {
      icon: <Globe className="text-slate-600" size={24} />,
      title: "Supplier Mastery",
      description: "Build relationships with reliable suppliers, negotiate better prices, and ensure quality control for your products."
    },
    {
      icon: <ShoppingCart className="text-slate-600" size={24} />,
      title: "Store Setup & Optimization",
      description: "Create a high-converting online store that builds trust and maximizes sales with proven design principles."
    },
    {
      icon: <Zap className="text-slate-600" size={24} />,
      title: "Marketing That Converts",
      description: "Master Facebook ads, Google ads, and organic marketing strategies that generate consistent traffic and sales."
    },
    {
      icon: <BarChart3 className="text-slate-600" size={24} />,
      title: "Scaling to €10k/Month",
      description: "Advanced strategies for scaling your business, automating processes, and building a sustainable income stream."
    },
    {
      icon: <CheckCircle className="text-slate-600" size={24} />,
      title: "Legal & Tax Optimization",
      description: "Protect your business and maximize profits with proper legal structure and tax strategies."
    }
  ];

  const benefits = [
    "Complete step-by-step video tutorials",
    "Real-world case studies and examples", 
    "Supplier contact list and resources",
    "Marketing templates and swipe files",
    "Legal documents and contracts",
    "Lifetime access to course updates",
    "Private community access",
    "Email support from Jacob Rasel"
  ];

  return (
    <section id="course" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Complete Dropshipping Mastery
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to build, launch, and scale a profitable dropshipping business 
            from zero to €10k/month in record time.
          </p>
        </div>

        {/* Course Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {modules.map((module, index) => (
            <Card key={index} className="border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    {module.icon}
                  </div>
                  <CardTitle className="text-lg text-slate-900">{module.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{module.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What You Get */}
        <div className="bg-slate-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            What You Get Inside
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                <span className="text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
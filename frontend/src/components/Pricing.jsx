import React from "react";
import { CheckCircle, Clock, Shield, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Pricing = () => {
  const features = [
    "Complete 6-module video course",
    "Step-by-step implementation guides", 
    "Supplier contact database",
    "Marketing templates & swipe files",
    "Legal documents & contracts",
    "Private student community access",
    "Email support from Jacob",
    "Lifetime access to updates"
  ];

  const bonuses = [
    {
      icon: <Zap className="text-slate-600" size={20} />,
      title: "Fast-Track Launch Kit",
      value: "€97 Value",
      description: "Ready-to-use store templates and product research tools"
    },
    {
      icon: <Shield className="text-slate-600" size={20} />,
      title: "Legal Protection Bundle", 
      value: "€147 Value",
      description: "Terms of service, privacy policy, and supplier contracts"
    },
    {
      icon: <Clock className="text-slate-600" size={20} />,
      title: "30-Day Action Plan",
      value: "€67 Value", 
      description: "Day-by-day roadmap to your first €1000 in sales"
    }
  ];

  const handleBuyNow = () => {
    window.open("https://paypal.me/SamuelTuron843", "_blank");
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get instant access to everything you need to build a profitable dropshipping business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bonuses */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Free Bonuses Included:</h3>
            {bonuses.map((bonus, index) => (
              <Card key={index} className="border-slate-200">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-slate-100 rounded-lg mt-1">
                      {bonus.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">{bonus.title}</h4>
                      <p className="text-xs text-green-600 font-medium">{bonus.value}</p>
                      <p className="text-xs text-slate-600 mt-1">{bonus.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Pricing Card */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-slate-900 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bg-slate-900 text-white text-center py-2">
                <span className="text-sm font-medium">🔥 Limited Time Offer</span>
              </div>
              
              <CardHeader className="text-center pt-12 pb-6">
                <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                  Dropshipping Mastery Course
                </CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl text-slate-400 line-through">€311</div>
                  <div className="text-5xl font-bold text-slate-900">€15</div>
                  <p className="text-slate-600">One-time payment • Lifetime access</p>
                </div>
              </CardHeader>

              <CardContent className="px-8 pb-8">
                <div className="space-y-3 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={handleBuyNow}
                  size="lg"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Instant Access - Pay €15
                </Button>

                <div className="mt-6 text-center space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-sm text-slate-600">
                    <Shield size={16} />
                    <span>Secure PayPal Payment</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    30-day money-back guarantee • Instant access after payment
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-slate-600">
              <Shield size={20} />
              <span className="text-sm">Secure Payment</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-slate-600">
              <Clock size={20} />
              <span className="text-sm">Instant Access</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-slate-600">
              <CheckCircle size={20} />
              <span className="text-sm">Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
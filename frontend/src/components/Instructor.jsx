import React from "react";
import { Star, Award, Users2, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Instructor = () => {
  const achievements = [
    {
      icon: <TrendingUp className="text-slate-600" size={20} />,
      stat: "€50k+/month",
      label: "Personal Revenue"
    },
    {
      icon: <Users2 className="text-slate-600" size={20} />,
      stat: "5,000+",
      label: "Students Taught"
    },
    {
      icon: <Award className="text-slate-600" size={20} />,
      stat: "5 Years",
      label: "Experience"
    },
    {
      icon: <Star className="text-slate-600" size={20} />,
      stat: "4.9/5",
      label: "Student Rating"
    }
  ];

  return (
    <section id="instructor" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Meet Your Instructor
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Learn from someone who has actually done it and continues to scale multiple 
            dropshipping businesses to six-figure revenues.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Instructor Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Jacob Rasel</h3>
              <p className="text-lg text-slate-600 mb-4">Dropshipping Expert & Business Coach</p>
              
              <div className="space-y-4 text-slate-700">
                <p>
                  Jacob started his first dropshipping business while in college with just €200. 
                  Within 18 months, he was generating over €30k/month in revenue and decided 
                  to turn his passion into a full-time business.
                </p>
                
                <p>
                  Today, Jacob runs multiple 6-figure dropshipping stores and has helped 
                  thousands of students build their own successful online businesses. His 
                  systematic approach focuses on sustainable growth and long-term profitability.
                </p>
                
                <p>
                  When he's not scaling businesses, Jacob loves sharing his knowledge through 
                  practical courses that deliver real results for his students.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg border border-slate-200">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-slate-100 rounded-lg mb-2">
                    {achievement.icon}
                  </div>
                  <div className="font-bold text-slate-900">{achievement.stat}</div>
                  <div className="text-sm text-slate-600">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Instructor Image/Card */}
          <div className="flex justify-center lg:justify-end">
            <Card className="max-w-md border-slate-200 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto flex items-center justify-center">
                    <Users2 size={48} className="text-slate-400" />
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">Jacob Rasel</h4>
                    <p className="text-slate-600">Dropshipping Expert</p>
                  </div>
                  
                  <div className="flex justify-center space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        size={20} 
                        className="fill-yellow-400 text-yellow-400" 
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-slate-700 italic">
                    "My mission is to help you build a profitable dropshipping business 
                    using the exact same strategies I use in my own stores."
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
import React, { useState } from "react";
import { Send, Mail, User, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useToast } from "../hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission - in real implementation this would send to backend
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. Jacob will get back to you within 24 hours.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Have questions about the course? Need help getting started? 
            Send Jacob a message and get personalized guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Why Choose This Course?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <User className="text-slate-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Personal Support</h4>
                    <p className="text-slate-600">Direct email access to Jacob for questions and guidance</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <MessageSquare className="text-slate-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Active Community</h4>
                    <p className="text-slate-600">Join thousands of successful dropshipping entrepreneurs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <Mail className="text-slate-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Regular Updates</h4>
                    <p className="text-slate-600">Course content updated with latest strategies and tools</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-slate-200 bg-white">
              <CardContent className="p-6">
                <h4 className="font-semibold text-slate-900 mb-2">Quick Response Guarantee</h4>
                <p className="text-slate-600 text-sm">
                  All messages are answered within 24 hours. Get the support you need to succeed 
                  in your dropshipping journey.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-slate-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address  
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What would you like to know about the course?"
                    className="border-slate-300 focus:border-slate-500 focus:ring-slate-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Send size={16} />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
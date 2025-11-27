import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      description: "We'll respond within 24 hours",
      details: "hello@careerfusion.com",
      action: "mailto:hello@careerfusion.com"
    },
    {
      icon: "📞",
      title: "Call Us",
      description: "Mon-Fri from 9am to 6pm",
      details: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Instant support",
      details: "Start chatting now",
      action: "#chat"
    },
    {
      icon: "📍",
      title: "Visit Us",
      description: "Come say hello",
      details: "123 Career Street, Tech City, TC 10101",
      action: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: "🐦", url: "#", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: "💼", url: "#", color: "hover:text-blue-600" },
    { name: "Facebook", icon: "👥", url: "#", color: "hover:text-blue-500" },
    { name: "Instagram", icon: "📸", url: "#", color: "hover:text-pink-500" }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50 py-20">
      {/* Hero Section */}
     

      {/* Main Content */}
      <div ref={ref} className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a message</h2>
            <p className="text-gray-600 mb-8">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(79, 70, 229, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.action}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                  <p className="text-blue-600 font-semibold">{method.details}</p>
                </motion.a>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Quick Answers</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">How do I create an account?</h4>
                  <p className="text-blue-100 text-sm">Click Sign Up and follow the simple steps to create your profile.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Is CareerFusion free for job seekers?</h4>
                  <p className="text-blue-100 text-sm">Yes! Creating a profile and applying for jobs is completely free.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">How do companies post jobs?</h4>
                  <p className="text-blue-100 text-sm">Companies can sign up for employer accounts to post opportunities.</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-xl transition-colors duration-300 ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-linear-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Career Tips Newsletter</h3>
              <p className="text-green-100 text-sm mb-4">Get weekly career advice and job search tips delivered to your inbox.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/20 placeholder-green-200 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold text-sm"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Visit Our Office</h2>
          <div className="bg-linear-to-br from-gray-100 to-gray-200 rounded-xl h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">🗺️</div>
              <p className="text-gray-600 font-semibold">Interactive Map Coming Soon</p>
              <p className="text-gray-500 text-sm mt-2">123 Career Street, Tech City, TC 10101</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
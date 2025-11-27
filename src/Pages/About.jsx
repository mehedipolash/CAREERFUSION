import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const stats = [
    { number: "50K+", label: "Jobs Posted" },
    { number: "10K+", label: "Companies" },
    { number: "2M+", label: "Job Seekers" },
    { number: "95%", label: "Success Rate" },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Our Mission",
      description:
        "To bridge the gap between talented professionals and innovative companies, creating meaningful career connections that drive growth and success.",
    },
    {
      icon: "👁️",
      title: "Our Vision",
      description:
        "A world where everyone finds fulfilling work and every company discovers the perfect talent to achieve their goals.",
    },
    {
      icon: "💎",
      title: "Our Values",
      description:
        "Transparency, innovation, and commitment to excellence guide every interaction on our platform.",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: "👩‍💼",
      bio: "Former HR Director with 10+ years in talent acquisition",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      image: "👨‍💻",
      bio: "Tech innovator passionate about building scalable platforms",
    },
    {
      name: "Emily Watson",
      role: "Head of Product",
      image: "👩‍🎨",
      bio: "Product strategist focused on user experience",
    },
    {
      name: "David Kim",
      role: "Growth Lead",
      image: "👨‍💼",
      bio: "Marketing expert driving platform adoption",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              About CareerFusion
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're revolutionizing the way professionals connect with career
              opportunities. Our AI-powered platform matches talent with dream
              jobs, creating perfect career symphonies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2018, CareerFusion emerged from a simple
                  observation: the job search process was broken. Candidates
                  felt lost in a sea of applications, while companies struggled
                  to find the right talent.
                </p>
                <p>
                  We set out to create a platform that uses cutting-edge
                  technology to understand both job seekers' aspirations and
                  employers' needs, creating meaningful matches that benefit
                  everyone.
                </p>
                <p>
                  Today, we're proud to be the fastest-growing career platform,
                  trusted by professionals and companies worldwide to create
                  career magic.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4">
                  Innovation at Our Core
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  We continuously evolve our platform with AI-driven insights,
                  personalized recommendations, and smart matching algorithms to
                  ensure you always have the competitive edge.
                </p>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core principles shape every feature and interaction on
              CareerFusion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-linear-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind CareerFusion's success
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-blue-600 font-semibold mb-3">
                  {member.role}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>

                {/* Social links */}
                <div className="flex justify-center space-x-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-100">
                    <span className="text-sm">📱</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-100">
                    <span className="text-sm">💼</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join millions of professionals who've found their dream jobs
              through CareerFusion
            </p>
            <Link
              className="btn bg-linear-to-r from-green-400 to-green-600 text-white"
              to="/"
            >
              Home
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

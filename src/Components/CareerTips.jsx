import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const tips = [
  {
    id: 1,
    title: "Optimize Your Resume",
    desc: "Use strong action verbs and tailor your resume for each job to increase your chances of getting shortlisted.",
    icon: "📄",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Build a Strong LinkedIn Profile",
    desc: "Recruiters actively search LinkedIn—keep your profile polished, updated, and engaging.",
    icon: "💼",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Keep Improving Your Skills",
    desc: "Learn in-demand tools and technologies to stay competitive in the career market.",
    icon: "🚀",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Practice Interview Questions",
    desc: "The more you rehearse common technical and behavioral questions, the more confident you'll become.",
    icon: "🎯",
    gradient: "from-orange-500 to-red-500",
  },
];

const CareerTips = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="py-20  relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full blur-xl opacity-30"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-200 rounded-full blur-xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Career Success Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlock your professional potential with expert strategies designed
            to accelerate your career growth and land your dream job.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {tips.map((tip, index) => (
            <TipCard key={tip.id} tip={tip} index={index} />
          ))}
        </motion.div>

        {/* Floating CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="https://www.indeed.com/career-advice"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(79, 70, 229, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg"
            >
              Get Personalized Career Advice
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const TipCard = ({ tip, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, threshold: 0.2 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.8 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      className="relative group"
    >
      {/* Card */}
      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden h-full">
        {/* Gradient border effect on hover */}
        <div
          className={`absolute inset-0 bg-linear-to-r ${tip.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
        ></div>

        {/* Icon with gradient background */}
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className={`w-16 h-16 rounded-2xl bg-linear-to-r ${tip.gradient} flex items-center justify-center text-2xl mb-6 shadow-lg`}
        >
          {tip.icon}
        </motion.div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
          {tip.title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg">{tip.desc}</p>

        {/* Hover arrow */}
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
          className="absolute bottom-6 right-6 text-2xl"
        >
          →
        </motion.div>

        {/* Shine effect on hover */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent translate-x-full group-hover:translate-x-full transition-transform duration-1000 opacity-20"></div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute -top-2 -right-2 w-6 h-6 bg-linear-to-r ${tip.gradient} rounded-full opacity-20`}
      ></motion.div>
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className={`absolute -bottom-2 -left-2 w-4 h-4 bg-linear-to-r ${tip.gradient} rounded-full opacity-20`}
      ></motion.div>
    </motion.div>
  );
};

export default CareerTips;

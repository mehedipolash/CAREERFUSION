import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const messages = [
  "🔥 Google hiring Senior Frontend Developers",
  "💼 Microsoft adds 120+ remote job openings",
  "🚀 Meta opens software engineering roles worldwide",
  "📢 Amazon hiring SDE-II for multiple teams",
];

const typingSpeed = 40;     // typing speed per letter
const deleteSpeed = 25;     // speed when deleting
const delayBetween = 1500;  // pause before removing

const LatestNews = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let current = messages[index];
    let timeout;

    if (!isDeleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => {
          setText(current.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), delayBetween);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(current.slice(0, text.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % messages.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <div className="bg-base-200 p-4 rounded-lg shadow w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mx-auto flex flex-col sm:flex-row items-center gap-4 mt-2">
      <span className="bg-secondary text-white px-4 py-2 rounded font-semibold text-center sm:text-left">
        Latest
      </span>

      <motion.p
        className="text-sm font-medium min-h-[1.25rem] text-center sm:text-left break-words"
        animate={{ opacity: [0.5, 1] }}
        transition={{ duration: 0.4 }}
      >
        {text}
        <span className="animate-pulse">|</span>
      </motion.p>
    </div>
  );
};

export default LatestNews;

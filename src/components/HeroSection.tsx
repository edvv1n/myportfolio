import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Code2, Globe } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [showFinalText, setShowFinalText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFinalText(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
        >
          <Code2 size={14} />
          Frontend Engineer
          <span className="w-1 h-1 rounded-full bg-primary" />
          <Globe size={14} />
          CMS Builder
        </motion.div>

        {/* Animated Header Section */}
        <div className="min-h-[120px] sm:min-h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!showFinalText ? (
              <motion.h1
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight"
              >
                Hi, my name is <span className="text-gradient">Edwin</span>
              </motion.h1>
            ) : (
              <motion.h1
                key="main"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight"
              >
                I build things
                <br />
                for the <span className="text-gradient">web</span>
              </motion.h1>
            )}
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 text-base sm:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed"
        >
          Frontend developer specializing in React, Tailwind, and modern web tech; plus pixel-perfect CMS solutions with WordPress & Wix.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-border text-foreground font-medium hover:bg-secondary transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
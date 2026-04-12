import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle System Theme Detection
  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(systemPrefersDark);
    
    if (systemPrefersDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500"
      >
        {/* Full-width Frosted Glass Background Layer */}
        <div 
          className={`absolute inset-0 transition-all duration-500 -z-10 ${
            scrolled 
              ? "h-20 bg-background/60 backdrop-blur-md border-b border-border/50 opacity-100" 
              : "h-0 opacity-0"
          }`} 
        />

        <div className={`w-full max-w-7xl flex items-center justify-between px-6 transition-all duration-500 ${
          scrolled ? "h-20" : "h-24"
        }`}>
          
          {/* Logo */}
          <div className="flex-1 md:flex-none md:w-32">
            <AnimatePresence>
              {scrolled && (
                <motion.a
                  href="#home"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="text-2xl font-bold tracking-tighter text-foreground"
                >
                  Edwin<span className="text-primary">.</span>
                </motion.a>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Navigation Pill */}
          <div className={`hidden md:flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-500 border ${
            scrolled 
              ? "bg-secondary/30 border-border/50 shadow-sm" 
              : "bg-transparent border-transparent"
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === link.id 
                    ? "text-primary-foreground" 
                    : "text-foreground hover:opacity-70"
                }`}
              >
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.label}
              </a>
            ))}
          </div>

          {/* Controls Group */}
          <div className="flex-1 md:flex-none flex justify-end gap-3">
            <button
              onClick={toggleTheme}
              className={`hidden md:flex rounded-full p-3 transition-all duration-500 border ${
                scrolled 
                  ? "bg-secondary/30 border-border/50 shadow-sm" 
                  : "bg-transparent border-transparent"
              } text-foreground hover:text-primary`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Control Pill */}
            <div className={`flex md:hidden items-center gap-1 rounded-full p-1.5 transition-all duration-500 border shadow-lg ${
              scrolled 
                ? "bg-secondary/50 border-border" 
                : "bg-background/40 backdrop-blur-sm border-border/50"
            }`}>
              <button onClick={toggleTheme} className="p-2.5 rounded-full text-foreground">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <div className="w-[1px] h-4 bg-border mx-0.5" />
              <button onClick={() => setIsOpen(true)} className="p-2.5 rounded-full text-foreground">
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Sidebar remains the same... */}
    </>
  );
};

export default Navbar;
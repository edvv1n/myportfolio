import { useState, useEffect, useRef } from "react";
import { getActiveSection } from "@/lib/active-section";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(systemPrefersDark);
    document.documentElement.classList.toggle("dark", systemPrefersDark);
  }, []);

  // Track section starts instead of visibility ratios: Projects can be several
  // viewports tall, so a percentage-based observer may never activate it.
  useEffect(() => {
    let frame = 0;
    const updateSection = () => {
      frame = 0;
      setScrolled(window.scrollY > 20);
      const sections = navLinks.flatMap(({ id }) => {
        const element = document.getElementById(id);
        return element ? [{ id, top: element.getBoundingClientRect().top }] : [];
      });
      const atBottom = window.scrollY > 0 &&
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      setActiveSection(getActiveSection(sections, Math.min(200, Math.max(96, window.innerHeight * 0.25)), atBottom));
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateSection);
    };
    updateSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(document.body);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const toggleButton = toggleRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const firstLink = panelRef.current?.querySelector<HTMLAnchorElement>("a");
    firstLink?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "Tab") {
        const links = Array.from(panelRef.current?.querySelectorAll<HTMLElement>("a") ?? []);
        const items = [toggleRef.current, ...links].filter(Boolean) as HTMLElement[];
        const index = items.indexOf(document.activeElement as HTMLElement);
        event.preventDefault();
        items[(index + (event.shiftKey ? -1 : 1) + items.length) % items.length]?.focus();
      }
    };
    const closeOnDesktop = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener("keydown", handleKey);
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("resize", closeOnDesktop);
      toggleButton?.focus();
    };
  }, [isOpen]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-[80] flex justify-center transition-all duration-500"
      >
        {/* Full-width Frosted Glass Background Layer */}
        <div 
          className={`absolute inset-0 transition-all duration-500 -z-10 ${
            scrolled 
              ? "h-20 bg-background/60 backdrop-blur-md border-b border-border/50 opacity-100" 
              : "h-0 opacity-0"
          }`} 
        />

        <div className={`w-full max-w-7xl grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center px-6 transition-all duration-500 ${
          scrolled ? "h-20" : "h-24"
        }`}>
          
          {/* Logo (Left) */}
          <div className="justify-self-start">
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

          {/* Desktop Navigation Pill (Center) */}
          <div className={`hidden md:flex justify-self-center items-center gap-1 rounded-full px-2 py-2 transition-all duration-500 border ${
            scrolled 
              ? "bg-secondary/30 border-border/50 shadow-sm" 
              : "bg-transparent border-transparent"
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={activeSection === link.id ? "location" : undefined}
                className={`relative isolate px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
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

          {/* Controls Group (Right) */}
          <div className="justify-self-end flex justify-end gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
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
              <button onClick={toggleTheme} className="p-2.5 rounded-full text-foreground" aria-label="Toggle theme">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <div className="w-[1px] h-4 bg-border mx-0.5" />
              <button ref={toggleRef} onClick={() => setIsOpen(open => !open)} className="p-2.5 rounded-full text-foreground" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} aria-controls="mobile-navigation" data-menu-open={isOpen}>
                <span className={`hamburger ${isOpen ? "is-open" : ""}`} aria-hidden="true"><span /><span /><span /></span>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/15 z-[60] md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              ref={panelRef}
              id="mobile-navigation"
              className="mobile-glass-menu fixed top-0 right-0 h-[100dvh] w-[min(85vw,340px)] border-l border-white/20 z-[70] md:hidden flex flex-col pt-28"
            >
              <nav aria-label="Mobile navigation" className="flex flex-col gap-2 px-4 mt-8">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                aria-current={activeSection === link.id ? "location" : undefined}
                    onClick={() => setIsOpen(false)}
                    className={`px-6 py-4 rounded-2xl text-xl font-semibold transition-colors ${
                      activeSection === link.id 
                        ? "bg-primary text-primary-foreground" 
                        : "text-foreground hover:bg-primary/10"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
import { motion } from "framer-motion";
// Swapped Twitter for X
import { Mail, Github, Linkedin, X, Phone, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-2">
            Contact
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's work together
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
            Got a project in mind? Whether it's a custom React app or a CMS-powered site, I'd love to hear from you.
          </p>

          <div className="flex items-center justify-center gap-3">
            <a
              href="mailto:edvvinudofia@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Mail size={18} />
              Send me an email
            </a>
            
            <a
              href="tel:+2349036254001"
              className="p-3 rounded-full border border-border text-muted-foreground hover:bg-muted hover:text-primary transition-all duration-200"
              aria-label="Call me"
            >
              <Phone size={20} />
            </a>

            <a
              href="https://wa.me/2348183146256"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border text-muted-foreground hover:bg-muted hover:text-green-600 transition-all duration-200"
              aria-label="Message on WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-12">
            {[
              { icon: Github, href: "https://github.com/edvv1n", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/edwinudofia/", label: "LinkedIn" },
              { icon: X, href: "https://www.x.com/edwin_udofia/", label: "X (Twitter)" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <div className="mt-20 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © Edwin Udofia 2026 · Built with React & Tailwind
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
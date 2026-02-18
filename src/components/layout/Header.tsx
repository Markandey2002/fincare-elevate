import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[var(--shadow-md)] border-b border-border/50"
            : "bg-transparent"
          }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16 sm:h-18 md:h-20">
            {/* Logo */}
            <Link to="/" className="z-50 relative h-full flex items-center">
              <Logo size="lg" light={!isScrolled} />
            </Link>


            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg hover:bg-muted ${location.pathname === link.path
                      ? "text-secondary"
                      : "text-foreground/80 hover:text-foreground"
                    }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-secondary to-cyan rounded-full"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="hero" size="default" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Get Started
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button - Touch friendly */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] rounded-lg hover:bg-muted active:bg-muted transition-colors flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 sm:top-18 md:top-20 z-40 lg:hidden"
          >
            <div className="bg-white/95 backdrop-blur-xl border-b border-border shadow-[var(--shadow-lg)] mx-3 sm:mx-4 rounded-2xl overflow-hidden">
              <div className="p-4 sm:p-6 space-y-1 sm:space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3.5 sm:py-3 min-h-[44px] rounded-xl font-medium transition-all duration-300 flex items-center ${location.pathname === link.path
                          ? "bg-secondary/10 text-secondary"
                          : "text-foreground active:bg-muted"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-3 sm:pt-4"
                >
                  <Button variant="hero" size="lg" className="w-full min-h-[48px]" asChild>
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

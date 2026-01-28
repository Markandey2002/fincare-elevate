import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-2xl shadow-[var(--shadow-lg)] border border-border p-4 sm:p-6 w-[calc(100vw-2rem)] sm:w-72 max-w-sm"
              >
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-3 right-3 p-2 min-w-[44px] min-h-[44px] rounded-lg active:bg-muted transition-colors flex items-center justify-center"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
                <h4 className="font-semibold text-foreground mb-2">Need Help?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Let's discuss your financial goals. Book a free consultation with our experts.
                </p>
                <Button variant="hero" size="default" className="w-full" asChild>
                  <Link to="/contact">Book Consultation</Link>
                </Button>
              </motion.div>
            ) : (
              <motion.button
                key="collapsed"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setIsExpanded(true)}
                className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-full bg-gradient-to-r from-secondary to-cyan shadow-[var(--shadow-glow)] active:shadow-[0_0_40px_-8px_hsla(168,76%,36%,0.6)] flex items-center justify-center transition-all duration-300 active:-translate-y-1 animate-pulse-glow"
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

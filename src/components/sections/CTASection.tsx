import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/OptimizedImage";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Background Image - Professional with visible person */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <OptimizedImage
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=800&fit=crop&q=80"
              alt="Professional financial consultant"
              className="w-full h-full"
              objectFit="cover"
            />
            {/* Lighter overlay - more image visible */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/75 via-[hsl(220,50%,20%)]/75 to-[hsl(200,50%,20%)]/75" />
            {/* Animated gradient orbs */}
            <motion.div
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px]"
            />
            <motion.div
              animate={{
                x: [0, -30, 0],
                y: [0, 50, 0],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan/15 rounded-full blur-[80px]"
            />
            <motion.div
              animate={{
                x: [0, 20, 0],
                y: [0, -40, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 w-[200px] h-[200px] bg-gold/10 rounded-full blur-[60px]"
            />
          </div>

          {/* Content */}
          <div className="relative px-4 sm:px-8 py-12 sm:py-16 lg:px-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Text content */}
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                >
                  Ready to Transform Your Financial Future?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-lg text-white/70 mb-8 leading-relaxed"
                >
                  Take the first step towards financial success. Book a free consultation 
                  with our expert team and discover how we can help your business grow.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                >
                  <Button variant="hero" size="lg" className="min-h-[48px] w-full sm:w-auto" asChild>
                    <Link to="/contact" className="flex items-center justify-center gap-2">
                      Get Started Today
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="heroOutline" size="lg" className="min-h-[48px] w-full sm:w-auto" asChild>
                    <Link to="/services">Explore Services</Link>
                  </Button>
                </motion.div>
              </div>

              {/* Contact cards */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-4"
              >
                <a
                  href="tel:+971000000000"
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Call Us</p>
                    <p className="text-white font-semibold text-lg">+971 XX XXX XXXX</p>
                  </div>
                </a>

                <a
                  href="mailto:info@fincaresolutions.ae"
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-cyan/20 flex items-center justify-center group-hover:bg-cyan/30 transition-colors">
                    <Mail className="w-6 h-6 text-cyan" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Email Us</p>
                    <p className="text-white font-semibold text-lg">info@fincaresolutions.ae</p>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Shield, TrendingUp, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/OptimizedImage";

const trustIndicators = [
  { icon: Shield, text: "UAE Registered" },
  { icon: TrendingUp, text: "Expert-Driven Advisory" },
  { icon: Award, text: "Trusted by 100+ Businesses" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-screen flex items-center overflow-hidden pt-16 sm:pt-18 md:pt-20">
      {/* Full-Width Background Image - Professional with tablet */}
      <div className="absolute inset-0">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&q=80"
          alt="Professional financial consultant with tablet"
          className="w-full h-full"
          objectFit="cover"
          priority={true}
        />
        {/* Lighter gradient overlay - more image visible */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/60 to-[hsl(220,50%,25%)]/70" />
        {/* Teal accent overlay - subtle */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-secondary/5 to-cyan/10" />
      </div>
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-cyan/15 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -80, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[80px]"
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container-custom relative z-10 py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 sm:mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
              <span className="text-xs sm:text-sm text-white/90 font-medium">UAE's Trusted Financial Partner</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-4 sm:mb-6"
            >
              Smart Financial{" "}
              <span className="text-gradient">Solutions</span>{" "}
              for Ambitious Businesses
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 px-2 sm:px-0"
            >
              Empowering startups and SMEs across the UAE & GCC with expert funding assistance, 
              strategic advisory, and tailored financial solutions to accelerate your growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12"
            >
              <Button variant="hero" size="lg" className="min-h-[48px] w-full sm:w-auto" asChild>
                <Link to="/contact" className="flex items-center justify-center gap-2">
                  Get Started
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" className="min-h-[48px] w-full sm:w-auto" asChild>
                <Link to="/contact">Book a Consultation</Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6"
            >
              {trustIndicators.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-white/60">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Background Hero Image */}
            <div className="absolute inset-0 -z-10 rounded-3xl overflow-hidden">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80"
                alt="Modern business growth and financial innovation"
                className="rounded-3xl"
                objectFit="cover"
                overlay={true}
                overlayGradient="from-primary/80 via-primary/40 to-transparent"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-cyan/20" />
            </div>

            {/* Abstract visual container */}
            <div className="relative">
              {/* Main card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl"
              >
                <div className="space-y-6">
                  {/* Stats row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-2xl p-4">
                      <p className="text-white/60 text-sm mb-1">Active Clients</p>
                      <p className="text-3xl font-bold text-white">150+</p>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-4">
                      <p className="text-white/60 text-sm mb-1">Success Rate</p>
                      <p className="text-3xl font-bold text-gradient">94%</p>
                    </div>
                  </div>
                  
                  {/* Graph placeholder */}
                  <div className="bg-white/5 rounded-2xl p-4">
                    <div className="flex items-end justify-between h-24 gap-2">
                      {[40, 60, 45, 80, 65, 90, 75].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                          className="flex-1 rounded-t-lg bg-gradient-to-t from-secondary/60 to-cyan/60"
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Bottom stats */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/60 text-xs">Funding Facilitated</p>
                      <p className="text-xl font-bold text-white">AED 50M+</p>
                    </div>
                    <div className="flex items-center gap-1 text-green-400">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-semibold">+24%</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-gold to-[hsl(38,80%,60%)] rounded-2xl p-4 shadow-lg"
              >
                <Award className="w-8 h-8 text-primary" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
              >
                <Shield className="w-8 h-8 text-secondary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

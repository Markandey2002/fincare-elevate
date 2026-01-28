import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Search, FileCheck, Rocket, ArrowRight } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Initial Consultation",
    description: "Share your business goals and financial needs. Our experts listen carefully to understand your unique situation.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop&q=80",
  },
  {
    icon: Search,
    number: "02",
    title: "Analysis & Strategy",
    description: "We conduct thorough analysis and develop a customized financial strategy tailored to your objectives.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&q=80",
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Solution Design",
    description: "Our team crafts detailed proposals with clear action plans, timelines, and expected outcomes.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop&q=80",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Execution & Growth",
    description: "We implement the strategy, provide ongoing support, and help you achieve sustainable growth.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&q=80",
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan/10 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-4"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/70"
          >
            A streamlined process designed to get you from consultation to results 
            quickly and efficiently.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * index }}
                className="relative group"
              >
                {/* Step card */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden relative">
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <OptimizedImage
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full"
                      objectFit="cover"
                    />
                  </div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-cyan/20 opacity-30" />
                  
                  <div className="relative z-10">
                    {/* Number badge */}
                    <div className="absolute -top-4 left-6 w-10 h-10 bg-gradient-to-br from-secondary to-cyan rounded-xl flex items-center justify-center shadow-lg z-20">
                      <span className="text-white font-bold text-sm">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 mt-4 group-hover:bg-white/20 transition-colors">
                      <step.icon className="w-7 h-7 text-secondary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow connector - mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <ArrowRight className="w-6 h-6 text-secondary/50 rotate-90 md:rotate-0" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

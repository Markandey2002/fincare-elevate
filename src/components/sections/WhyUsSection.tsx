import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Target, 
  Users, 
  Zap, 
  Globe, 
  ShieldCheck,
  Clock,
  Award,
  TrendingUp
} from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { OptimizedImage } from "@/components/OptimizedImage";

const features = [
  {
    icon: Target,
    title: "Tailored Solutions",
    description: "Every business is unique. We craft customized strategies aligned with your specific goals.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Seasoned financial professionals with deep expertise in UAE markets.",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description: "Streamlined processes for quick turnaround on funding and advisory services.",
  },
  {
    icon: Globe,
    title: "Regional Expertise",
    description: "In-depth knowledge of UAE and GCC regulatory and business landscape.",
  },
  {
    icon: ShieldCheck,
    title: "Full Compliance",
    description: "100% adherence to UAE financial regulations and international standards.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your financial queries and needs.",
  },
];

const stats = [
  { value: 150, suffix: "+", label: "Happy Clients" },
  { value: 50, prefix: "AED ", suffix: "M+", label: "Funding Facilitated" },
  { value: 94, suffix: "%", label: "Success Rate" },
  { value: 8, suffix: "+", label: "Years Experience" },
];

export function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1200&fit=crop&q=80"
          alt="Abstract fintech and business growth visualization"
          className="w-full h-full"
          objectFit="cover"
        />
        {/* Low opacity + gradient mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-semibold mb-4"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Your Success is Our Priority
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            We combine deep industry expertise with personalized service to deliver 
            exceptional results for businesses across the UAE and GCC region.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group card-premium p-6 hover:border-secondary/30"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0 opacity-10">
            <OptimizedImage
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop&q=80"
              alt="Business growth and success metrics"
              className="w-full h-full"
              objectFit="cover"
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-[hsl(220,50%,15%)] to-primary" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-cyan/20" />
          
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 lg:p-12 z-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-white/60 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { Layout } from "@/components/layout/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { 
  MessageSquare, 
  Search, 
  FileCheck, 
  Rocket, 
  ArrowRight,
  Clock,
  Shield,
  HeartHandshake,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/OptimizedImage";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Initial Consultation",
    description: "Everything starts with a conversation. Schedule a free, no-obligation consultation where we listen to your business goals, challenges, and financial needs. This helps us understand your unique situation.",
    duration: "30-60 minutes",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&q=80",
    details: [
      "Understand your business model",
      "Identify immediate financial needs",
      "Discuss short and long-term goals",
      "Explain our service offerings",
    ],
  },
  {
    icon: Search,
    number: "02",
    title: "Comprehensive Analysis",
    description: "Our team conducts thorough due diligence and analysis of your business. We examine financial statements, market position, growth potential, and identify opportunities for optimization.",
    duration: "3-5 business days",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80",
    details: [
      "Financial health assessment",
      "Market and competitor analysis",
      "Risk evaluation",
      "Opportunity identification",
    ],
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Custom Strategy Design",
    description: "Based on our analysis, we develop a tailored financial strategy. You'll receive detailed proposals with clear action plans, timelines, expected outcomes, and transparent pricing.",
    duration: "5-7 business days",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&q=80",
    details: [
      "Customized solution design",
      "Detailed implementation roadmap",
      "Clear milestone definitions",
      "Transparent cost breakdown",
    ],
  },
  {
    icon: Rocket,
    number: "04",
    title: "Implementation & Growth",
    description: "Once you approve the strategy, we execute with precision. Our team handles the heavy lifting while keeping you informed at every step. We celebrate your wins and adjust strategies as needed.",
    duration: "Ongoing support",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80",
    details: [
      "Expert execution of strategy",
      "Regular progress updates",
      "Adaptive approach to challenges",
      "Continuous optimization",
    ],
  },
];

const values = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "We value your time. Our streamlined processes ensure quick delivery without compromising quality.",
  },
  {
    icon: Shield,
    title: "Full Transparency",
    description: "No hidden fees, no surprises. You'll always know exactly what to expect at every stage.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "A dedicated team member is assigned to your account for personalized attention.",
  },
  {
    icon: Sparkles,
    title: "Results-Driven",
    description: "We measure success by your success. Our reputation is built on client achievements.",
  },
];

export default function HowItWorks() {
  const heroRef = useRef(null);
  const stepsRef = useRef(null);
  const valuesRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const stepsInView = useInView(stepsRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center overflow-hidden pt-20">
        {/* Background Image - Professional visible */}
        <div className="absolute inset-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&q=80"
            alt="Professional financial planning process"
            className="w-full h-full"
            objectFit="cover"
            priority={true}
          />
          {/* Lighter overlay - more image visible */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/65 to-[hsl(220,50%,25%)]/70" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-secondary/5 to-cyan/10" />
        </div>
        
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px]"
          />
        </div>

        <div className="container-custom relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-6">
              Our Process
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Simple Steps to <span className="text-gradient">Financial Success</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              We've designed a clear, efficient process to take you from initial consultation 
              to achieving your financial goals. Here's what to expect.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Steps Section */}
      <section ref={stepsRef} className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1200&fit=crop&q=80"
            alt="Abstract process and workflow"
            className="w-full h-full"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * index }}
                className="relative"
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-[39px] top-24 bottom-0 w-0.5 bg-gradient-to-b from-secondary/50 to-secondary/0" />
                )}

                <div className="grid lg:grid-cols-[80px_1fr] gap-8 pb-16">
                  {/* Step number */}
                  <div className="flex lg:flex-col items-center lg:items-start gap-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={stepsInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 + 0.15 * index }}
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-cyan flex items-center justify-center shadow-[var(--shadow-glow)] relative z-10"
                    >
                      <step.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <span className="text-5xl font-bold text-muted/20 lg:hidden">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="card-glass p-8 lg:p-10 relative overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
                      <OptimizedImage
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full"
                        objectFit="cover"
                      />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="hidden lg:inline text-6xl font-bold text-muted/10">{step.number}</span>
                        <div>
                          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{step.title}</h2>
                          <div className="flex items-center gap-2 mt-2">
                            <Clock className="w-4 h-4 text-secondary" />
                            <span className="text-sm text-muted-foreground">{step.duration}</span>
                          </div>
                        </div>
                      </div>

                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white/50 rounded-xl p-4">
                          <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                          <span className="text-sm text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="section-padding bg-primary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-4"
            >
              Why Our Process Works
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              Built on Trust & Excellence
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="card-glass p-8 lg:p-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take the first step today. Schedule your free consultation and discover 
              how Fincare Solutions can help you achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Start Your Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Banknote, 
  LineChart, 
  Building2, 
  PiggyBank, 
  FileSpreadsheet,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Banknote,
    title: "Business Funding Assistance",
    description: "Access diverse funding options tailored to your business stage and growth objectives. We connect you with the right financial partners.",
    gradient: "from-secondary to-cyan",
  },
  {
    icon: LineChart,
    title: "Financial Advisory",
    description: "Strategic financial guidance from experienced advisors. Make informed decisions with data-driven insights and expert recommendations.",
    gradient: "from-cyan to-blue-500",
  },
  {
    icon: Building2,
    title: "SME Consulting",
    description: "Comprehensive consulting services for small and medium enterprises. Optimize operations, improve efficiency, and scale sustainably.",
    gradient: "from-gold to-orange-400",
  },
  {
    icon: PiggyBank,
    title: "Investment Planning",
    description: "Build wealth with strategic investment planning. Diversified portfolios aligned with your risk tolerance and financial goals.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: FileSpreadsheet,
    title: "Corporate Financial Structuring",
    description: "Optimize your corporate financial structure for tax efficiency and regulatory compliance. Expert guidance for complex financial decisions.",
    gradient: "from-secondary to-teal-400",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Comprehensive Financial Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            From startup funding to corporate restructuring, we provide end-to-end financial 
            services to help your business thrive in the competitive UAE market.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`group card-glass p-8 ${index === 0 ? 'lg:col-span-2' : ''}`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link */}
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-secondary font-semibold group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

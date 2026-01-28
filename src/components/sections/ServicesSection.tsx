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
  ArrowRight,
  Wallet,
  DollarSign,
  Receipt
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/OptimizedImage";

// Services preview - Loan services prioritized with enhanced images
const services = [
  {
    icon: Wallet,
    title: "Working Capital Loan",
    description: "Secure flexible working capital loans from UAE banks, ensuring smooth business operations and cash flow.",
    gradient: "from-secondary to-cyan",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop&q=85",
    imageAlt: "Working capital loan and business financing",
  },
  {
    icon: DollarSign,
    title: "Term Loan",
    description: "Reliable term loans from UAE banks with secure, transparent processes and competitive rates.",
    gradient: "from-cyan to-blue-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=85",
    imageAlt: "Term loan and business financing solutions",
  },
  {
    icon: Banknote,
    title: "Business Funding",
    description: "Comprehensive funding solutions including SME loans, startup funding, and business expansion financing.",
    gradient: "from-gold to-orange-400",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&q=85",
    imageAlt: "Business funding and SME financing",
  },
  {
    icon: Receipt,
    title: "Overdraft Facilities",
    description: "Secure overdraft facilities from UAE banks for flexible cash flow management and financial agility.",
    gradient: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&q=85",
    imageAlt: "Overdraft facilities and flexible banking",
  },
  {
    icon: LineChart,
    title: "Financial Advisory",
    description: "Strategic financial guidance from experienced advisors. Make informed decisions with expert recommendations.",
    gradient: "from-secondary to-teal-400",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=85",
    imageAlt: "Financial advisory and consulting services",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Large Background Image */}
      <div className="absolute inset-0">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1200&fit=crop&q=80"
          alt="Financial services and business consulting"
          className="w-full h-full"
          objectFit="cover"
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/80 to-background/85" />
        <div className="absolute inset-0 bg-muted/40" />
      </div>
      
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

        {/* Services grid - Stack on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`group relative ${index === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
            >
              {/* Enhanced Card with Prominent Image */}
              <div className="relative h-full rounded-2xl overflow-hidden bg-white shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 group">
                {/* Service Image - Top Section */}
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <OptimizedImage
                    src={service.image}
                    alt={service.imageAlt || service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    objectFit="cover"
                    loading="lazy"
                  />
                  {/* Gradient overlay for better visual depth */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent`} />
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 right-4 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-xl backdrop-blur-sm bg-white/10 border border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="relative z-10 p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                    {service.description}
                  </p>

                  {/* Link */}
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-secondary font-semibold group/link hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
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

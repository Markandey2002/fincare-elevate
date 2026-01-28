import { Layout } from "@/components/layout/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Banknote, 
  LineChart, 
  Building2, 
  PiggyBank, 
  FileSpreadsheet,
  ArrowRight,
  CheckCircle2,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/OptimizedImage";

const services = [
  {
    icon: Banknote,
    title: "Business Funding Assistance",
    description: "We connect businesses with the right funding sources, whether you're a startup seeking seed capital or an established company looking to expand.",
    features: [
      "Bank loan facilitation and documentation",
      "Venture capital and angel investor connections",
      "Government grants and subsidies guidance",
      "Trade financing solutions",
      "Invoice factoring and working capital loans",
    ],
    gradient: "from-secondary to-cyan",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: LineChart,
    title: "Financial Advisory",
    description: "Strategic financial guidance to help you make informed decisions. Our advisors bring decades of experience in UAE and regional markets.",
    features: [
      "Financial health assessment and diagnostics",
      "Cash flow optimization strategies",
      "Cost reduction and efficiency programs",
      "Financial risk assessment and mitigation",
      "M&A advisory and due diligence",
    ],
    gradient: "from-cyan to-blue-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Building2,
    title: "SME Consulting",
    description: "Comprehensive consulting services designed specifically for small and medium enterprises looking to scale sustainably.",
    features: [
      "Business model optimization",
      "Operational efficiency improvement",
      "Market entry and expansion strategy",
      "Performance benchmarking",
      "Growth roadmap development",
    ],
    gradient: "from-gold to-orange-400",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: PiggyBank,
    title: "Investment Planning",
    description: "Build and protect your wealth with strategic investment planning aligned with your risk tolerance and financial objectives.",
    features: [
      "Portfolio diversification strategies",
      "Risk assessment and management",
      "Retirement and succession planning",
      "Real estate investment advisory",
      "Alternative investment opportunities",
    ],
    gradient: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: FileSpreadsheet,
    title: "Corporate Financial Structuring",
    description: "Optimize your corporate financial architecture for maximum efficiency, tax benefits, and regulatory compliance.",
    features: [
      "Corporate restructuring advisory",
      "Tax optimization strategies",
      "Regulatory compliance guidance",
      "Capital structure optimization",
      "Transfer pricing strategies",
    ],
    gradient: "from-secondary to-teal-400",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Briefcase,
    title: "Business Setup Services",
    description: "End-to-end support for entrepreneurs looking to establish their business presence in the UAE free zones.",
    features: [
      "Free zone company formation",
      "Trade license acquisition",
      "Bank account opening assistance",
      "Visa and PRO services",
      "Office space solutions",
    ],
    gradient: "from-emerald-500 to-green-400",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80",
  },
];

export default function Services() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center overflow-hidden pt-20">
        {/* Background Image - Professional visible */}
        <div className="absolute inset-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&q=80"
            alt="Professional financial services consultant"
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
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Comprehensive <span className="text-gradient">Financial Solutions</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              From startup funding to corporate restructuring, we offer a full spectrum 
              of financial services tailored to your business needs.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="hero" asChild>
                    <Link to="/contact">
                      Inquire About This Service
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 rounded-3xl blur-2xl`} />
                    <div className="relative card-glass p-8 lg:p-12 overflow-hidden">
                      {/* Service Image */}
                      <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity duration-500">
                        <OptimizedImage
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full"
                          objectFit="cover"
                        />
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5`} />
                      <div className="relative z-10">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/50 rounded-2xl p-6 text-center">
                          <div className="text-3xl font-bold text-primary mb-1">100%</div>
                          <div className="text-sm text-muted-foreground">Compliance</div>
                        </div>
                        <div className="bg-white/50 rounded-2xl p-6 text-center">
                          <div className="text-3xl font-bold text-secondary mb-1">24/7</div>
                          <div className="text-sm text-muted-foreground">Support</div>
                        </div>
                        <div className="bg-white/50 rounded-2xl p-6 text-center col-span-2">
                          <div className="text-3xl font-bold text-gradient mb-1">Expert Team</div>
                          <div className="text-sm text-muted-foreground">Dedicated professionals at your service</div>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free consultation and our experts will help identify the best 
              solutions for your specific business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

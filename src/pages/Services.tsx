import { Layout } from "@/components/layout/Layout";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Banknote, 
  LineChart, 
  Building2, 
  PiggyBank, 
  FileSpreadsheet,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Wallet,
  CreditCard,
  Home,
  User,
  FileText,
  TrendingUp,
  Shield,
  Globe,
  Smartphone,
  BarChart3,
  Handshake,
  DollarSign,
  Receipt,
  Building,
  Lock,
  Network,
  FileCheck,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/OptimizedImage";

// Services ordered with LOAN SERVICES FIRST (Priority)
const services = [
  // ========== LOAN SERVICES (TOP PRIORITY) ==========
  {
    icon: Wallet,
    title: "Working Capital Loan",
    description: "Fundify helps you secure flexible working capital loans from UAE banks, ensuring smooth business operations.",
    features: [
      "Flexible repayment terms",
      "Quick approval process",
      "Competitive interest rates",
      "Support for business operations",
      "Expert guidance throughout the process",
    ],
    gradient: "from-secondary to-cyan",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: DollarSign,
    title: "Term Loan",
    description: "Fundify Financial Services helps you secure reliable term loans from UAE banks with secure, ease and transparency.",
    features: [
      "Short-term and long-term options",
      "Secure and transparent process",
      "Competitive rates",
      "Flexible terms",
      "Professional assistance",
    ],
    gradient: "from-cyan to-blue-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Receipt,
    title: "Overdraft",
    description: "Fundify Financial Services helps you secure overdraft facilities from UAE banks, ensuring smooth cash flow and financial flexibility.",
    features: [
      "Flexible cash flow management",
      "Quick access to funds",
      "Interest only on amount used",
      "Easy application process",
      "Ongoing support",
    ],
    gradient: "from-gold to-orange-400",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: FileText,
    title: "Invoice Discounting",
    description: "Fundify helps you access quick invoice discounting from UAE banks, improving cash flow and business growth.",
    features: [
      "Quick access to cash",
      "Improved cash flow",
      "No need to wait for payment",
      "Competitive rates",
      "Streamlined process",
    ],
    gradient: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: User,
    title: "Personal Loan",
    description: "Fundify helps you secure hassle-free personal loans from UAE banks with quick approval and flexibility.",
    features: [
      "Quick approval process",
      "Flexible repayment options",
      "Competitive interest rates",
      "Simple application",
      "Personalized service",
    ],
    gradient: "from-secondary to-teal-400",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Home,
    title: "Home Loan",
    description: "Fundify helps you secure affordable home loans from UAE banks with simple, fast, and trusted processes.",
    features: [
      "Affordable rates",
      "Simple application process",
      "Fast approval",
      "Trusted service",
      "Expert guidance",
    ],
    gradient: "from-emerald-500 to-green-400",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: CreditCard,
    title: "Credit Card",
    description: "Fundify helps you secure UAE bank credit cards with ease, offering flexibility, convenience, and financial freedom.",
    features: [
      "Easy application process",
      "Flexible credit limits",
      "Convenient payment options",
      "Rewards and benefits",
      "24/7 customer support",
    ],
    gradient: "from-indigo-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Banknote,
    title: "Lending Services",
    description: "Comprehensive lending solutions including term loans, revolving credit facilities, project finance, and syndicated loans for various business needs.",
    features: [
      "Term Loans: short-term and long-term loans for various business needs",
      "Revolving Credit Facilities: flexible credit lines for working capital",
      "Project Finance: financing for specific projects or ventures",
      "Syndicated Loans: large-scale loans from multiple lenders",
    ],
    gradient: "from-amber-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
  },
  // ========== FINANCIAL ADVISORY SERVICES ==========
  {
    icon: Briefcase,
    title: "Business Planning",
    description: "Fundify supports business planning with expert insights, strategic guidance, and financial tools for sustainable growth and success.",
    features: [
      "Strategic business planning",
      "Financial forecasting",
      "Growth strategies",
      "Market analysis",
      "Expert insights",
    ],
    gradient: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: LineChart,
    title: "Financial Guidance",
    description: "Fundify offers expert financial guidance to help individuals and businesses make informed, confident, and growth-driven decisions.",
    features: [
      "Expert financial advice",
      "Informed decision-making",
      "Growth-focused strategies",
      "Personalized guidance",
      "Comprehensive support",
    ],
    gradient: "from-teal-500 to-green-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: BarChart3,
    title: "Portfolio Management",
    description: "Fundify provides expert portfolio management, optimizing returns and reducing risk to help you achieve your long-term financial goals. Our strategies are designed to secure your future by maximizing growth while maintaining stability.",
    features: [
      "Portfolio optimization",
      "Risk reduction strategies",
      "Long-term financial planning",
      "Growth maximization",
      "Stability maintenance",
    ],
    gradient: "from-rose-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Building2,
    title: "Transaction Banking",
    description: "Comprehensive transaction banking services including cash management, trade finance, supply chain finance, and electronic banking solutions.",
    features: [
      "Cash Management: account management, payments, and collections",
      "Trade Finance: letters of credit, guarantees, and factoring",
      "Supply Chain Finance: financing for suppliers and buyers",
      "Electronic Banking: online platforms for transaction management",
    ],
    gradient: "from-violet-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: TrendingUp,
    title: "Treasury Services",
    description: "Expert treasury services including foreign exchange, interest rate risk management, commodities hedging, and investment services.",
    features: [
      "Foreign Exchange: currency exchange and risk management",
      "Interest Rate Risk Management: hedging and swaps",
      "Commodities Hedging: price risk management for commodities",
      "Investment Services: investment products and portfolio management",
    ],
    gradient: "from-sky-500 to-blue-500",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Comprehensive risk management services including credit risk, market risk, operational risk, and compliance and regulatory services.",
    features: [
      "Credit Risk Management: credit insurance and guarantees",
      "Market Risk Management: hedging and risk mitigation strategies",
      "Operational Risk Management: risk assessment and mitigation",
      "Compliance and Regulatory Services: regulatory advisory and compliance",
    ],
    gradient: "from-red-500 to-rose-500",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Globe,
    title: "Trade Services",
    description: "Complete trade services including letters of credit, bills of exchange, collections management, and factoring services.",
    features: [
      "Letters of Credit: documentary credits for international trade",
      "Bills of Exchange: negotiable instruments for trade finance",
      "Collections: management of export and import collections",
      "Factoring: invoice discounting and factoring services",
    ],
    gradient: "from-cyan-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Smartphone,
    title: "Digital Banking",
    description: "Modern digital banking solutions including online platforms, mobile banking apps, API banking, and blockchain technology.",
    features: [
      "Online Banking Platforms: corporate online banking and cash management",
      "Mobile Banking Apps: mobile banking and payment solutions",
      "API Banking: application programming interfaces for integration",
      "Blockchain and Distributed Ledger Technology: innovative solutions for trade finance and supply chain management",
    ],
    gradient: "from-indigo-500 to-violet-500",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Handshake,
    title: "Other Services",
    description: "Additional financial services including M&A advisory, capital markets services, corporate finance advisory, and research and analysis.",
    features: [
      "Mergers and Acquisitions Advisory: strategic advisory for M&A transactions",
      "Equity and Debt Capital Markets: advisory and underwriting services",
      "Corporate Finance Advisory: strategic advisory for corporate finance",
      "Research and Analysis: industry research and analysis reports",
    ],
    gradient: "from-emerald-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80",
  },
];

export default function Services() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

  // Ensure page scrolls to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden pt-16 sm:pt-18 md:pt-20">
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

        <div className="container-custom relative z-10 py-12 sm:py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Our Services
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
              Comprehensive <span className="text-gradient">Financial Solutions</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed px-2 sm:px-0">
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
          <div className="space-y-12 sm:space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.05 * index }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}>
                    <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                    {service.title}
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="hero" size="lg" className="min-h-[48px] w-full sm:w-auto" asChild>
                    <Link to="/contact" className="flex items-center justify-center gap-2">
                      Contact Us
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 rounded-3xl blur-2xl`} />
                    <div className="relative card-glass p-6 sm:p-8 lg:p-12 overflow-hidden">
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
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div className="bg-white/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                          <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">100%</div>
                          <div className="text-xs sm:text-sm text-muted-foreground">Compliance</div>
                        </div>
                        <div className="bg-white/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                          <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1">24/7</div>
                          <div className="text-xs sm:text-sm text-muted-foreground">Support</div>
                        </div>
                        <div className="bg-white/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center col-span-2">
                          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient mb-1">Expert Team</div>
                          <div className="text-xs sm:text-sm text-muted-foreground">Dedicated professionals at your service</div>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
              Book a free consultation and our experts will help identify the best 
              solutions for your specific business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Button variant="hero" size="lg" className="min-h-[48px] w-full sm:w-auto" asChild>
                <Link to="/contact" className="flex items-center justify-center gap-2">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="min-h-[48px] w-full sm:w-auto" asChild>
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

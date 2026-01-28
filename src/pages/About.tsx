import { Layout } from "@/components/layout/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Award, Users, TrendingUp, Globe, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { OptimizedImage } from "@/components/OptimizedImage";

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "We operate with complete transparency and honesty in all our dealings, building trust that lasts.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every service we provide, exceeding expectations consistently.",
  },
  {
    icon: Users,
    title: "Client-First",
    description: "Your success is our success. We prioritize your goals and work tirelessly to achieve them.",
  },
  {
    icon: Globe,
    title: "Innovation",
    description: "We embrace new technologies and methodologies to deliver cutting-edge financial solutions.",
  },
];

const timeline = [
  { year: "2016", title: "Founded", description: "Established in Ajman Free Zone, UAE" },
  { year: "2018", title: "Expansion", description: "Expanded services to include investment planning" },
  { year: "2020", title: "Growth", description: "Reached 100+ satisfied clients milestone" },
  { year: "2022", title: "Recognition", description: "Recognized as leading SME financial advisor" },
  { year: "2024", title: "Innovation", description: "Launched digital-first advisory platform" },
];

const stats = [
  { value: 8, suffix: "+", label: "Years of Excellence" },
  { value: 150, suffix: "+", label: "Clients Served" },
  { value: 50, prefix: "AED ", suffix: "M+", label: "Funding Facilitated" },
  { value: 94, suffix: "%", label: "Client Satisfaction" },
];

export default function About() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const timelineRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop&q=80"
            alt="Professional business team and corporate environment"
            className="w-full h-full"
            objectFit="cover"
            priority={true}
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-[hsl(220,50%,20%)]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-secondary/10 to-cyan/20" />
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
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Building Trust, <span className="text-gradient">Delivering Results</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              We are FINCARE SOLUTIONS FZE LLC, a UAE-registered financial services company 
              dedicated to empowering businesses with smart financial solutions.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats */}
      <section className="relative -mt-16 z-10 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl shadow-[var(--shadow-lg)] p-8 lg:p-12"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                    <AnimatedCounter
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story - Split Layout with Professional Image */}
      <section ref={storyRef} className="section-padding relative overflow-hidden bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Professional Image - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=1000&fit=crop&q=80"
                  alt="Professional business consultant"
                  className="w-full h-full"
                  objectFit="cover"
                  width={600}
                  height={800}
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-cyan/10" />
              </div>
            </motion.div>

            {/* Content - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                A Legacy of Financial Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2016 in Ajman Free Zone, FINCARE SOLUTIONS FZE LLC was born 
                  from a vision to democratize access to quality financial services for 
                  businesses of all sizes in the UAE and GCC region.
                </p>
                <p>
                  Our founders, seasoned financial professionals with decades of combined 
                  experience, recognized that many promising startups and SMEs struggled 
                  to navigate the complex financial landscape. We set out to bridge this gap.
                </p>
                <p>
                  Today, we stand as a trusted partner to over 150 businesses, having 
                  facilitated over AED 50 million in funding and delivered countless 
                  successful financial strategies.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Background Story Image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-10">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&q=80"
                  alt="Business growth and success"
                  className="w-full h-full rounded-3xl"
                  objectFit="cover"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-secondary/10 to-cyan/10 rounded-3xl p-6 h-48 flex flex-col justify-end">
                    <Shield className="w-10 h-10 text-secondary mb-3" />
                    <p className="font-semibold text-foreground">UAE Registered</p>
                    <p className="text-sm text-muted-foreground">Ajman Free Zone</p>
                  </div>
                  <div className="bg-gradient-to-br from-gold/10 to-orange-400/10 rounded-3xl p-6 h-36 flex flex-col justify-end">
                    <TrendingUp className="w-10 h-10 text-gold mb-3" />
                    <p className="font-semibold text-foreground">94% Success Rate</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-primary rounded-3xl p-6 h-36 flex flex-col justify-end">
                    <Users className="w-10 h-10 text-secondary mb-3" />
                    <p className="font-semibold text-white">150+ Clients</p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan/10 to-blue-500/10 rounded-3xl p-6 h-48 flex flex-col justify-end">
                    <Globe className="w-10 h-10 text-cyan mb-3" />
                    <p className="font-semibold text-foreground">GCC Coverage</p>
                    <p className="text-sm text-muted-foreground">Regional expertise</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card-premium p-8 lg:p-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-cyan flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses across the UAE and GCC with accessible, innovative, 
                and tailored financial solutions that drive sustainable growth and success. 
                We are committed to being the trusted partner that helps our clients navigate 
                the complex financial landscape with confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card-premium p-8 lg:p-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold to-orange-400 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the region's most trusted and innovative financial services 
                provider, recognized for our excellence, integrity, and the tangible 
                impact we create for businesses. We envision a future where every 
                ambitious enterprise has access to world-class financial guidance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4"
            >
              Leadership
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
            >
              Meet Our Managing Director
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="card-premium p-8 lg:p-12">
              <div className="grid md:grid-cols-[300px_1fr] gap-8 items-center">
                {/* Professional Portrait */}
                <div className="relative">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden ring-4 ring-secondary/20">
                    <OptimizedImage
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80"
                      alt="Mr. Prateek Choudhary, Managing Director"
                      className="w-full h-full"
                      objectFit="cover"
                      width={300}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-cyan/20" />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-secondary to-cyan rounded-2xl opacity-20 blur-xl" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    Mr. Prateek Choudhary
                  </h3>
                  <p className="text-xl text-secondary font-semibold mb-4">
                    Managing Director
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    With over 15 years of experience in financial services and business advisory, 
                    Mr. Prateek Choudhary leads FINCARE SOLUTIONS FZE LLC with a vision to 
                    democratize access to quality financial services across the UAE and GCC region.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    His expertise spans business funding, financial restructuring, and strategic 
                    advisory, having helped hundreds of businesses achieve their growth objectives. 
                    Under his leadership, the company has facilitated over AED 50 million in 
                    funding and maintained a 94% client satisfaction rate.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section - Real Person Photos */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4"
            >
              Our Team
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
            >
              Expert Financial Professionals
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Meet the experienced professionals dedicated to your financial success
            </motion.p>
          </div>

          {/* Team Grid - Similar to fundify.ae style */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                name: "Mr. Prateek Choudhary",
                role: "Managing Director",
                photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
                description: "15+ years in financial services and strategic advisory"
              },
              {
                name: "Sarah Al-Mansoori",
                role: "Senior Financial Advisor",
                photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80",
                description: "Expert in UAE market regulations and business funding"
              },
              {
                name: "Ahmed Hassan",
                role: "Investment Strategist",
                photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
                description: "Specialized in portfolio management and wealth planning"
              },
              {
                name: "Fatima Al-Zahra",
                role: "SME Consultant",
                photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80",
                description: "Helping small businesses scale with smart financial solutions"
              },
              {
                name: "Mohammed Al-Rashid",
                role: "Corporate Finance Specialist",
                photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
                description: "Expert in corporate restructuring and financial optimization"
              },
              {
                name: "Layla Al-Mazrouei",
                role: "Client Relations Manager",
                photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&q=80",
                description: "Ensuring exceptional client experience and satisfaction"
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group text-center"
              >
                {/* Photo - Similar to fundify.ae alignment */}
                <div className="relative mb-6 mx-auto w-48 h-48 lg:w-56 lg:h-56">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-cyan/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                  <div className="relative w-full h-full rounded-2xl overflow-hidden ring-4 ring-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <OptimizedImage
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full"
                      objectFit="cover"
                      width={224}
                      height={224}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                
                {/* Info */}
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-secondary font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4"
            >
              Our Values
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-foreground"
            >
              The Principles That Guide Us
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="card-glass p-6 text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="section-padding bg-primary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-4"
            >
              Our Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              Milestones That Define Us
            </motion.h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/20 -translate-y-1/2" />

            <div className="grid md:grid-cols-5 gap-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-cyan flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-white font-bold text-sm">{item.year.slice(-2)}</span>
                  </div>
                  <p className="text-white font-bold text-lg mb-1">{item.year}</p>
                  <p className="text-secondary font-semibold mb-1">{item.title}</p>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="card-glass p-8 lg:p-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the 150+ businesses that trust Fincare Solutions for their financial needs.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

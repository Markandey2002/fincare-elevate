import { Layout } from "@/components/layout/Layout";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock,
  Send,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Ajman Free Zone", "United Arab Emirates"],
    action: null,
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@fincaresolutions.ae", "support@fincaresolutions.ae"],
    action: "mailto:info@fincaresolutions.ae",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+971 XX XXX XXXX", "+971 XX XXX XXXX"],
    action: "tel:+971000000000",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Sun - Thu: 9AM - 6PM", "Fri - Sat: Closed"],
    action: null,
  },
];

export default function Contact() {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message sent successfully! We'll get back to you soon.");
    
    // Reset after delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 hero-gradient" />
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
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Start a <span className="text-gradient">Conversation</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Ready to transform your financial future? Get in touch with our team 
              for a free consultation.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Contact Info Cards */}
      <section className="relative -mt-16 z-10 pb-8">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {info.action ? (
                  <a
                    href={info.action}
                    className="block card-premium p-6 hover:border-secondary/30 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </a>
                ) : (
                  <div className="card-premium p-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section ref={formRef} className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                      className="h-12 rounded-xl border-border/50 focus:border-secondary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="h-12 rounded-xl border-border/50 focus:border-secondary"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 XX XXX XXXX"
                      className="h-12 rounded-xl border-border/50 focus:border-secondary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="h-12 rounded-xl border-border/50 focus:border-secondary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-foreground">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-12 rounded-xl border border-border/50 bg-background px-4 text-foreground focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                  >
                    <option value="">Select a service</option>
                    <option value="funding">Business Funding Assistance</option>
                    <option value="advisory">Financial Advisory</option>
                    <option value="sme">SME Consulting</option>
                    <option value="investment">Investment Planning</option>
                    <option value="corporate">Corporate Financial Structuring</option>
                    <option value="setup">Business Setup Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business and how we can help..."
                    required
                    rows={5}
                    className="rounded-xl border-border/50 focus:border-secondary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Map/Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Map placeholder */}
              <div className="relative h-80 rounded-3xl overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
                    <p className="text-lg font-semibold text-foreground">Ajman Free Zone</p>
                    <p className="text-muted-foreground">United Arab Emirates</p>
                  </div>
                </div>
              </div>

              {/* Additional info */}
              <div className="card-glass p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Why Contact Us?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Free initial consultation with no obligations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Response within 24 business hours guaranteed
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Personalized solutions tailored to your needs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Confidential and secure communication
                    </span>
                  </li>
                </ul>
              </div>

              {/* UAE Notice */}
              <div className="bg-secondary/10 rounded-2xl p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">UAE Registered Company:</strong> FINCARE SOLUTIONS 
                  FZE LLC is registered in Ajman Free Zone, United Arab Emirates. All services are 
                  provided in compliance with UAE financial regulations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

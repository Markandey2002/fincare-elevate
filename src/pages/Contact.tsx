import { Layout } from "@/components/layout/Layout";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  MapPin, 
  Mail, 
  Phone, 
  MessageCircle,
  Send,
  CheckCircle2,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { OptimizedImage } from "@/components/OptimizedImage";

// Verified contact details
const contactPerson = {
  name: "Mr. Prateek Choudhary",
  designation: "Managing Director",
  mobile: "+971 58 558 3870",
  whatsapp: "+971 58 558 3870",
  email: "Prateek.choudhary@finanacecare.com",
};

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
        {/* Premium Background Image */}
        <div className="absolute inset-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&h=1080&fit=crop&q=80"
            alt="Contact us for premium financial solutions"
            className="w-full h-full"
            objectFit="cover"
            priority={true}
          />
          {/* Dark overlay for contrast */}
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

      {/* Contact Person Card */}
      <section className="relative -mt-16 z-10 pb-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="card-premium p-8 lg:p-10">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-cyan flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                    {contactPerson.name}
                  </h2>
                  <p className="text-lg text-muted-foreground font-medium">
                    {contactPerson.designation}
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {/* Mobile */}
                <a
                  href={`tel:${contactPerson.mobile.replace(/\s/g, '')}`}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground mb-1">Mobile</p>
                    <p className="text-sm font-semibold text-foreground truncate">{contactPerson.mobile}</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${contactPerson.whatsapp.replace(/\s/g, '').replace('+', '')}?text=Hello%20${encodeURIComponent(contactPerson.name)}%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground mb-1">WhatsApp</p>
                    <p className="text-sm font-semibold text-foreground truncate">{contactPerson.whatsapp}</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contactPerson.email}`}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center group-hover:bg-cyan/20 transition-colors flex-shrink-0">
                    <Mail className="w-6 h-6 text-cyan" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground mb-1">Email</p>
                    <p className="text-sm font-semibold text-foreground truncate">{contactPerson.email}</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section - Split Layout like fundify.ae */}
      <section ref={formRef} className="section-padding relative overflow-hidden bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            {/* Professional Image - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] lg:aspect-auto">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=1000&fit=crop&q=80"
                  alt="Professional financial consultant ready to help"
                  className="w-full h-full"
                  objectFit="cover"
                  width={600}
                  height={800}
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-cyan/10" />
                {/* Decorative element - visible on desktop */}
                <div className="hidden lg:block absolute top-8 left-8 w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30" />
              </div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-premium p-6 sm:p-8 lg:p-10 order-1 lg:order-2"
            >
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
                TO BECOME A CLIENT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Please, fulfill the form to get a consultation. After processing the data, a personal manager will contact you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
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
                    className="h-12 sm:h-12 text-base rounded-xl border-border/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
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
                    className="h-12 sm:h-12 text-base rounded-xl border-border/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                  />
                </div>

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
                    className="h-12 sm:h-12 text-base rounded-xl border-border/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business and how we can help..."
                    required
                    rows={5}
                    className="text-base rounded-xl border-border/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 resize-none transition-all duration-300 min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full min-h-[48px]"
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
                      SEND MESSAGE
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

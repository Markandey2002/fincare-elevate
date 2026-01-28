import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    role: "CEO, TechVentures Dubai",
    content: "Fincare Solutions transformed our funding journey. Their expertise in UAE markets and personalized approach helped us secure the capital we needed to scale. Highly recommended!",
    rating: 5,
    image: "AR",
  },
  {
    name: "Sarah Mohammed",
    role: "Founder, EcoStart MENA",
    content: "The team's understanding of both traditional and innovative financing options was impressive. They found solutions we didn't know existed. True partners in growth.",
    rating: 5,
    image: "SM",
  },
  {
    name: "Michael Chen",
    role: "CFO, Gulf Logistics",
    content: "Professional, responsive, and results-driven. Fincare helped restructure our finances, improving cash flow by 40%. Their advisory services are invaluable.",
    rating: 5,
    image: "MC",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Director, Creative Hub Abu Dhabi",
    content: "As a startup founder, navigating UAE financial regulations was daunting. Fincare made it seamless and helped us focus on what we do best—building our business.",
    rating: 5,
    image: "FA",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Don't just take our word for it. Here's what business leaders across the 
            UAE say about working with Fincare Solutions.
          </motion.p>
        </div>

        {/* Testimonials carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main testimonial card */}
          <div className="card-premium p-8 lg:p-12 relative">
            {/* Quote icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-secondary to-cyan rounded-2xl flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 text-white" />
            </div>

            <div className="pt-6">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Content */}
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8"
              >
                "{testimonials[activeIndex].content}"
              </motion.p>

              {/* Author */}
              <motion.div
                key={`author-${activeIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-cyan flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[activeIndex].image}
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonials[activeIndex].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white border border-border shadow-sm hover:shadow-md flex items-center justify-center transition-all hover:-translate-x-1"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-secondary"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white border border-border shadow-sm hover:shadow-md flex items-center justify-center transition-all hover:translate-x-1"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

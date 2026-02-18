import logo from "@/assets/logo.png";
import { motion } from "framer-motion";

interface LogoProps {
  variant?: "icon" | "full";
  className?: string;
  size?: "sm" | "md" | "lg";
  light?: boolean; // For dark backgrounds
}

export function Logo({ variant = "full", className = "", size = "md", light = false }: LogoProps) {
  const sizeClasses = {
    sm: variant === "icon" ? "w-8 h-8" : "w-24",
    md: variant === "icon" ? "w-10 h-10" : "w-32",
    lg: variant === "icon" ? "w-16 h-16" : "w-40",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl",
  };

  const subtextSizes = {
    sm: "text-[8px]",
    md: "text-[10px]",
    lg: "text-xs",
  };

  if (variant === "icon") {
    return (
      <motion.div
        className={`${sizeClasses[size]} ${className}`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Modern F symbol with growth arrow */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(168, 76%, 36%)" />
              <stop offset="100%" stopColor="hsl(188, 94%, 48%)" />
            </linearGradient>
          </defs>

          {/* Background circle */}
          <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" />

          {/* Stylized F */}
          <path
            d="M 30 25 L 30 75 M 30 30 L 60 30 M 30 50 L 55 50"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Growth arrow integrated */}
          <path
            d="M 65 40 L 75 50 L 65 60"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <img
        src={logo}
        alt="Fincare Solutions Logo"
        className="h-24 sm:h-36 md:h-32 w-auto"
      />
    </motion.div>
  );

}

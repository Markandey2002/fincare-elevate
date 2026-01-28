import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_8px_24px_-8px_hsla(220,60%,10%,0.12)] hover:shadow-[0_16px_48px_-12px_hsla(220,60%,10%,0.16)] hover:-translate-y-0.5 active:translate-y-0",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: 
          "hover:bg-accent hover:text-accent-foreground",
        link: 
          "text-primary underline-offset-4 hover:underline",
        hero: 
          "bg-gradient-to-r from-secondary to-cyan text-white shadow-[0_0_40px_-10px_hsla(168,76%,36%,0.4)] hover:shadow-[0_0_50px_-10px_hsla(168,76%,36%,0.6)] hover:-translate-y-1 active:translate-y-0",
        heroOutline:
          "border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50",
        gold:
          "bg-gradient-to-r from-gold to-[hsl(38,80%,60%)] text-primary shadow-[0_0_30px_-8px_hsla(43,74%,52%,0.3)] hover:shadow-[0_0_40px_-8px_hsla(43,74%,52%,0.5)] hover:-translate-y-1",
        glass:
          "bg-white/80 backdrop-blur-xl border border-white/30 text-primary shadow-[0_8px_24px_-8px_hsla(220,60%,10%,0.12)] hover:bg-white hover:shadow-[0_16px_48px_-12px_hsla(220,60%,10%,0.16)] hover:-translate-y-0.5",
        floating:
          "bg-primary text-primary-foreground shadow-[0_16px_48px_-12px_hsla(220,60%,10%,0.16)] hover:shadow-[0_20px_60px_-15px_hsla(220,60%,10%,0.3)] hover:-translate-y-1 rounded-full",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
        icon: "h-11 w-11",
        floating: "h-14 w-14 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

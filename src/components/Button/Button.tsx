import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import classes from "./Button.module.css";

import { cn } from "~/utils/utils";

const buttonVariants = cva(classes.base, {
  variants: {
    variant: {
      default: classes.default,
      destructive: classes.destructive,
      outline: classes.outline,
      secondary: classes.secondary,
      ghost: classes.ghost,
      link: classes.link,
      inverse: classes.inverse,
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <div className={classes.wrapper}>
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

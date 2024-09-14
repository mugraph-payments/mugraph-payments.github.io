import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/utils/utils";

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

const textVariants = cva("text-paragraph", {
  variants: {
    type: {
      body: "text-lg",
      sub: "text-sub",
      h1: "text-header text-5xl font-bold",
      h2: "text-header text-4xl font-semibold",
      h3: "text-header text-3xl font-medium",
      h4: "text-header text-2xl font-medium",
    },
  },
  defaultVariants: {
    type: "body",
  },
});

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, as, type, ...props }, ref) => {
    const Comp = React.useMemo(() => {
      // Use the "as" prop if defined
      // Otherwise infer the element from type
      if (as) {
        return as;
      }

      switch (type) {
        case "h1":
          return "h1";
        case "h2":
          return "h2";
        case "h3":
          return "h3";
        case "h4":
          return "h4";
        default:
          return "p";
      }
    }, [type]);
    return (
      <Comp
        className={cn(
          textVariants({
            type,
          }),
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Text.displayName = "Text";

export { Text };

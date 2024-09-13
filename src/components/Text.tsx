import * as React from "react";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  asChild?: string;
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, asChild = "p", ...props }, ref) => {
    const Comp = asChild === "p" ? "p" : "h3";
    return <Comp className={className} ref={ref} {...props} />;
  },
);
Text.displayName = "Text";

export { Text };

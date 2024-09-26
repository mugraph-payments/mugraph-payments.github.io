import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/utils/utils";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  newTab?: boolean;
}

const linkVariants = cva("text-primary-foreground", {
  variants: {
    variant: {
      default:
        "cursor-pointer text-accent-foreground hover:text-accent hover:underline underline-offset-2",
      muted: "text-muted",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, newTab = true, ...props }, ref) => {
    return (
      <a
        target={newTab ? "_blank" : "_self"}
        className={cn(
          linkVariants({
            variant,
          }),
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Link.displayName = "Link";

export { Link };

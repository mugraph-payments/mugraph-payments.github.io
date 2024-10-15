import type { MenuSection } from "~/utils/types";
import { Link } from "../Link/Link";
import Logo from "../Logo/logo";

export function Footer() {
  const menu: MenuSection[] = [
    {
      title: "Learn More",
      links: [
        { title: "Blog", path: "/blog" },
        { title: "Documentation", path: "#" },
        { title: "Contributing", path: "#" },
      ],
    },
    {
      title: "Community",
      links: [
        { title: "Discord", path: "#" },
        { title: "Github", path: "#" },
        { title: "Nostr", path: "#" },
        { title: "X", path: "#" },
      ],
    },
    {
      title: "Column 3",
      links: [
        { title: "Link", path: "#" },
        { title: "Link", path: "#" },
        { title: "Link", path: "#" },
      ],
    },
  ];

  return (
    <footer className="relative bg-secondary py-12 mt-24 border-t border-border z-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 px-8 text-center">
          <div className="flex items-center space-x-2 mb-4 h-16 mx-auto">
            <Logo />
          </div>
          {menu &&
            menu.map(({ title, links }, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-4">{title}</h4>
                <ul className="space-y-2">
                  {links.map(({ title, path, newTab }, index) => (
                    <li key={index}>
                      <Link href={path} newTab={!!newTab}>
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2024 μgraph. Open-source under MIT and Apache 2.0 License.
          <br />
          Built on Cardano.{" "}
          <Link href="#" className="underline">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="#" className="underline">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}

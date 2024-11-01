import classes from "./Navbar.module.css";
import clsx from "clsx";
import Logo from "../Logo/logo";
import DrawerMenu, { type DrawerMenuProps } from "./DrawerMenu";
import { Link } from "../Link/Link";

export function Navbar() {
  const menu: DrawerMenuProps["menu"] = [
    {
      title: "Learn More",
      links: [
        {
          title: "Blog",
          path: "/blog",
        },
        {
          title: "Documentation",
          path: "#",
        },
        {
          title: "Contributing",
          path: "#",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          title: "Discord",
          newTab: true,
          path: "https://discord.gg/UQbXnKZxfq",
        },
        {
          title: "Github",
          newTab: true,
          path: "https://github.com/mugraph-payments/mugraph",
        },
        // { title: "Nostr", path: "#" },
        { title: "X", newTab: true, path: "https://x.com/mugraph_ada" },
      ],
    },
  ];

  return (
    <header className={clsx([classes.navbar_container])}>
      <div className={classes.navbar_body}>
        <div className={classes.menu_container}>
          <DrawerMenu menu={menu} />
        </div>
        <div className={classes.logo_container}>
          <Logo />
        </div>

        <div className={classes.links_container}>
          <Link
            href="https://github.com/mugraph-payments/mugraph"
            className={`text-lg`}
          >
            Github
          </Link>

          <Link href="https://discord.gg/VRJremtk" className={`text-lg`}>
            Discord
          </Link>
        </div>
      </div>
    </header>
  );
}

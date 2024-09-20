import classes from "./Navbar.module.css";
import clsx from "clsx";
import Logo from "../Logo/logo";
import DrawerMenu, { type DrawerMenuProps } from "./DrawerMenu";

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
          path: "#",
        },
        {
          title: "Github",
          path: "#",
        },
        {
          title: "Nostr",
          path: "#",
        },
        {
          title: "X",
          path: "#",
        },
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
          <a href="https://github.com/mugraph-payments/mugraph" className={``}>
            Github
          </a>
          <a href="https://discord.gg/VRJremtk" className={``}>
            Discord
          </a>
        </div>
      </div>
    </header>
  );
}

"use client";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../Logo/logo";
import { Link } from "../Link/Link";
import type { MenuSection } from "~/utils/types";

export type DrawerMenuProps = {
  menu: MenuSection[];
};

export default function DrawerMenu({ menu }: DrawerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Open mobile menu"
        className="flex h-11 w-11 items-center justify-center rounded-md border border-border transition-colors hover:border-accent hover:text-accent"
      >
        <Bars3Icon className="h-4" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <TransitionChild
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </TransitionChild>
          <TransitionChild
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <DialogPanel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-popover pb-6">
              <div className="h-full flex flex-col">
                <div className="p-4 h-24 lg:h-36 grid grid-cols-3 gap-6 items-center border-b border-border">
                  <div className="flex items-center">
                    <button
                      className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border transition-colors hover:border-accent hover:text-accent"
                      onClick={closeMobileMenu}
                      aria-label="Close mobile menu"
                    >
                      <XMarkIcon className="h-6" />
                    </button>
                  </div>
                  <div className="w-fit aspect-auto h-16 lg:h-20 mx-auto">
                    <Logo />
                  </div>
                </div>

                <div className="p-4 pt-8 md:pt-16">
                  {menu.length ? (
                    <nav>
                      <ul className="flex w-full flex-col gap-8">
                        {menu.map((section: MenuSection) => (
                          <li key={section.title}>
                            <label className="text-xl font-bold text-muted-foreground">
                              {section.title}
                            </label>
                            <ul className="flex w-full flex-col">
                              {section.links.map((item) => (
                                <li
                                  className="py-2 text-xltransition-colors transition-transform duration-300 hover:translate-x-[10px] w-max"
                                  key={item.title}
                                >
                                  <Link
                                    href={item.path}
                                    onClick={closeMobileMenu}
                                    newTab={!!item.newTab}
                                  >
                                    {item.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  ) : null}
                </div>

                <div className="mt-auto bg-secondary w-fit p-4 rounded mx-4">
                  Built on Cardano. 
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>{" "}
                  |{" "}
                  <a href="#" className="underline">
                    Terms of Use
                  </a>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
}

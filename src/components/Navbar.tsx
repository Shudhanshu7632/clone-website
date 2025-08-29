"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const navLinks = [
  {
    name: "Services",
    dropdown: true,
    subLinks: [
      { name: "UI/UX Design", href: "#" },
      { name: "Web Development", href: "#" },
      { name: "Brand Strategy", href: "#" },
    ],
  },
  { name: "About Us", href: "#" },
  { name: "Cases", href: "#" },
  { name: "Say Hello 👋", href: "#" },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed -top-1 left-0 w-full bg-white/70 backdrop-blur-lg z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center justify-between gap-2">
          <div className="w-12 h-15 p-10 rounded-4xl  flex items-center justify-center text-white bg-black  text-xl font-extrabold ">
            R
          </div>
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.name ? null : link.name
                        )
                      }
                      className="flex items-center gap-2 px-8 py-5 rounded-4xl font-bold bg-white hover:bg-black transition-colors duration-300 text-black hover:text-white text-xl 
                    "
                    >
                      {link.name}
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${
                          openDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {openDropdown === link.name && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute left-0 mt-2 w-48 rounded-4xl bg-white shadow-lg border border-black/10"
                        >
                          {link.subLinks?.map((subLink) => (
                            <li key={subLink.name}>
                              <a
                                href={subLink.href}
                                className="block px-8 py-6 rounded-4xl text-xl bg-white hover:bg-black hover:text-white font-medium transition-colors duration-300"
                              >
                                {subLink.name}
                              </a>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="px-8 py-6 rounded-4xl bg-white hover:bg-black hover:text-white text-xl font-medium transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <button className="hidden md:block px-8 py-6 text-black tramsition-color duration-300 border-black rounded-4xl border-[1px] font-medium text-xl hover:bg-black hover:text-white ">
          Get Free Estimate
        </button>
      </nav>
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brand, Button, NAV_LINKS, WRAP } from "./ui";
import { useAuthModal } from "./auth-modal-context";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { open } = useAuthModal();
  const pathname = usePathname();

  const isHome = pathname === "/";

  const sectionHref = (section: string) =>
    isHome ? `#${section}` : `/#${section}`;

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu with Escape
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", close);

    return () => {
      window.removeEventListener("keydown", close);
    };
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-line bg-[#f1f3eed9] backdrop-blur-md">
        <div
          className={`${WRAP} flex items-center justify-between py-4.5 max-[640px]:py-3.5`}
        >
          {/* Logo */}
          <Link href={isHome ? "#top" : "/"} className="no-underline">
            <Brand />
          </Link>

          {/* Desktop Navigation */}
          <div className="flex gap-7.5 text-[15px] text-ink-soft max-[900px]:hidden">
            <Link
              href={sectionHref("how-it-works")}
              className="no-underline hover:text-ink"
            >
              How it works
            </Link>

            <Link
              href={sectionHref("features")}
              className="no-underline hover:text-ink"
            >
              Features
            </Link>

            <Link
              href={sectionHref("why")}
              className="no-underline hover:text-ink"
            >
              Why Medinory
            </Link>

            <Link
              href={sectionHref("security")}
              className="no-underline hover:text-ink"
            >
              Security
            </Link>

            <Link
              href={sectionHref("doctors")}
              className="no-underline hover:text-ink"
            >
              For doctors
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="flex gap-2.25 max-[900px]:hidden">
            <Button variant="ghost" onClick={() => open("login")}>
              Log in
            </Button>

            <Button onClick={() => open("register")}>Register</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="hidden items-center justify-center border-0 bg-transparent p-2 text-ink max-[900px]:inline-flex"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu size={24} strokeWidth={1.8} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-paper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            {/* Mobile Header */}
            <div
              className={`${WRAP} flex items-center justify-between py-4.5 max-[640px]:py-3.5`}
            >
              <Link
                href={isHome ? "#top" : "/"}
                className="no-underline"
                onClick={() => setMenuOpen(false)}
              >
                <Brand />
              </Link>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center border-0 bg-transparent p-2 text-ink"
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={1.8} />
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="h-[calc(100vh-73px)] overflow-y-auto">
              <nav className={`${WRAP} flex flex-col gap-0 pt-5 pb-10`}>
                {NAV_LINKS.map((link) => {
                  const href = link.href.startsWith("#")
                    ? sectionHref(link.href.slice(1))
                    : link.href;

                  return (
                    <Link
                      key={link.href}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="no-underline border-b border-line py-4 text-[17px] text-ink"
                    >
                      {link.label}
                    </Link>
                  );
                })}

                {/* Mobile Auth */}
                <div className="mt-8 flex flex-col gap-3">
                  <Button
                    variant="ghost"
                    className="w-full py-3"
                    onClick={() => {
                      setMenuOpen(false);
                      open("login");
                    }}
                  >
                    Log in
                  </Button>

                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setMenuOpen(false);
                      open("register");
                    }}
                  >
                    Register
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

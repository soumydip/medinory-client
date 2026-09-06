"use client";

import Link from "next/link";
import { Brand, WRAP } from "./ui";
import { useAuthModal } from "./auth-modal-context";

type Mode = "login" | "register" | "forgot";

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href?: string; auth?: Mode }[];
}) {
  const { open } = useAuthModal();
  return (
    <div>
      <h4 className="text-[13px] text-ink-soft m-0 mb-3">{title}</h4>
      {links.map((link) =>
        link.auth ? (
          <button
            key={link.label}
            onClick={() => open(link.auth as Mode)}
            className="block text-left text-[14.5px] text-ink no-underline mb-2.5 hover:text-teal bg-transparent border-0 p-0"
          >
            {link.label}
          </button>
        ) : (
          <Link
            key={link.label}
            href={link.href ?? "#"}
            className="block text-[14.5px] text-ink no-underline mb-2.5 hover:text-teal"
          >
            {link.label}
          </Link>
        ),
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line pt-14 pb-9">
      <div className={WRAP}>
        <div className="flex justify-between flex-wrap gap-8">
          <Brand small />
          <div className="flex gap-14 flex-wrap max-[640px]:gap-7">
            <FooterCol title="Product" links={[{ label: "Features", href: "/features" }]} />
            <FooterCol title="Trust" links={[{ label: "Security", href: "/security" }]} />
            <FooterCol
              title="Account"
              links={[
                { label: "Log in", auth: "login" },
                { label: "Register", auth: "register" },
                { label: "Forgot password", auth: "forgot" },
              ]}
            />
          </div>
        </div>
        <div className="mt-11 pt-6 border-t border-line text-[12.5px] text-ink-soft flex justify-between flex-wrap gap-3">
          <span>
            Medinory is a final-year project concept. It does not replace
            professional medical advice.
          </span>
          <span>© 2026 Medinory</span>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import Image from "next/image";
import { Button, Field } from "./ui";

type Mode = "login" | "register" | "forgot";

type Ctx = {
  open: (mode: Mode) => void;
};

const AuthModalCtx = createContext<Ctx | null>(null);

export function useAuthModal() {
  const ctx = useContext(AuthModalCtx);

  if (!ctx) {
    throw new Error("useAuthModal must be used inside <AuthModalProvider>");
  }

  return ctx;
}

export function AuthModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modal, setModal] = useState<Mode | null>(null);

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModal(null);
      }
    };

    window.addEventListener("keydown", close);

    return () => {
      window.removeEventListener("keydown", close);
    };
  }, []);

  return (
    <AuthModalCtx.Provider
      value={{
        open: (mode) => setModal(mode),
      }}
    >
      {children}

      <AnimatePresence>
        {modal && (
          <AuthModal
            mode={modal}
            onClose={() => setModal(null)}
          />
        )}
      </AnimatePresence>
    </AuthModalCtx.Provider>
  );
}

export function AuthModal({
  mode,
  onClose,
}: {
  mode: Mode;
  onClose: () => void;
}) {
  const [tab, setTab] = useState<Mode>(mode);
  const [message, setMessage] = useState("");

  const forgot = tab === "forgot";

  const submit = (
    event: React.FormEvent<HTMLFormElement>,
    text: string,
  ) => {
    event.preventDefault();
    setMessage(text);
  };

  const switchTab = (nextTab: Mode) => {
    setTab(nextTab);
    setMessage("");
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/45 p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        className="w-full max-w-[420px] overflow-hidden rounded-lg bg-paper-card shadow-[0_30px_60px_-20px_#122b2580]"
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 18, opacity: 0 }}
        transition={{ duration: 0.2 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <div
            id="auth-title"
            className="flex items-center gap-2.5"
          >
            <Image
              src="/logo.jpeg"
              alt="Medinory"
              width={28}
              height={28}
              priority
              className="size-7 rounded object-contain"
            />

            <span className="text-lg font-bold text-ink">
              Medinory
            </span>
          </div>

          <button
            type="button"
            className="inline-flex border-0 bg-transparent p-1 text-ink-soft transition-colors hover:text-ink"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={20} strokeWidth={1.8} />
          </button>
        </div>

        {/* Login / Register Tabs */}
        {!forgot && (
          <div className="mx-6 mt-[18px] flex border-b border-line">
            <button
              type="button"
              className={
                tab === "login"
                  ? "flex-1 border-0 border-b-2 border-b-primary bg-transparent py-2.5 text-center text-[14.5px] font-medium text-ink"
                  : "flex-1 border-0 border-b-2 border-transparent bg-transparent py-2.5 text-center text-[14.5px] font-medium text-ink-soft transition-colors hover:text-ink"
              }
              onClick={() => switchTab("login")}
            >
              Log in
            </button>

            <button
              type="button"
              className={
                tab === "register"
                  ? "flex-1 border-0 border-b-2 border-b-primary bg-transparent py-2.5 text-center text-[14.5px] font-medium text-ink"
                  : "flex-1 border-0 border-b-2 border-transparent bg-transparent py-2.5 text-center text-[14.5px] font-medium text-ink-soft transition-colors hover:text-ink"
              }
              onClick={() => switchTab("register")}
            >
              Register
            </button>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {/* Forgot Password */}
          {forgot ? (
            <>
              <button
                type="button"
                className="mb-4 inline-flex items-center gap-1.5 border-0 bg-transparent p-0 text-[13.5px] text-ink-soft transition-colors hover:text-ink"
                onClick={() => switchTab("login")}
              >
                <ArrowLeft size={15} />
                Back to log in
              </button>

              <div className="mb-6">
                <h2 className="text-2xl text-ink">
                  Reset your password
                </h2>

                <p className="mt-2 text-[14px] leading-6 text-ink-soft">
                  Enter the phone number or email connected to your
                  account and we&apos;ll send a reset link.
                </p>
              </div>

              <form
                onSubmit={(event) =>
                  submit(
                    event,
                    "Password reset will be available soon.",
                  )
                }
              >
                <Field
                  label="Phone number or email"
                  placeholder="you@example.com"
                />

                <div className="space-y-2">
                  <Button
                    disabled
                    type="submit"
                    className="w-full p-3 text-[15px]"
                  >
                    Send reset link
                  </Button>

                  <p className="text-center text-xs text-ink-soft">
                    Under development
                  </p>
                </div>
              </form>
            </>
          ) : tab === "login" ? (
            <>
              <div className="mb-6">
                <h2 className="text-2xl text-ink">
                  Welcome back
                </h2>

                <p className="mt-2 text-[14px] leading-6 text-ink-soft">
                  Sign in to access your Medinory health identity.
                </p>
              </div>

              <form
                onSubmit={(event) =>
                  submit(
                    event,
                    "Sign in will be available soon.",
                  )
                }
              >
                <Field
                  label="Phone number or email"
                  placeholder="you@example.com"
                />

                <Field
                  label="Password"
                  placeholder="*********"
                  type="password"
                />

                <div className="mb-4 flex items-center justify-between">
                  <span />

                  <Button
                    variant="text"
                    onClick={() => switchTab("forgot")}
                  >
                    Forgot password?
                  </Button>
                </div>

                <div className="space-y-2">
                  <Button
                    disabled
                    type="submit"
                    className="w-full p-3 text-[15px]"
                  >
                    Sign in
                  </Button>

                  <p className="text-center text-xs text-ink-soft">
                    Under development
                  </p>
                </div>
              </form>

              <p className="mt-5 text-center text-[13.5px] text-ink-soft">
                New here?{" "}
                <Button
                  variant="text"
                  onClick={() => switchTab("register")}
                >
                  Create a Health ID
                </Button>
              </p>
            </>
          ) : (
            <>
              <div className="mb-6">
                <h2 className="text-2xl text-ink">
                  Create your Health ID
                </h2>

                <p className="mt-2 text-[14px] leading-6 text-ink-soft">
                  Set up one secure identity for your lifelong health
                  records.
                </p>
              </div>

              <form
                onSubmit={(event) =>
                  submit(
                    event,
                    "Health ID registration will be available soon.",
                  )
                }
              >
                <Field
                  label="Full name"
                  placeholder="As per your ID"
                />

                <Field
                  label="Phone number or email"
                  placeholder="you@example.com"
                />

                <Field
                  label="Create password"
                  placeholder="••••••••"
                  type="password"
                />

                <div className="space-y-2">
                  <Button
                    disabled
                    type="submit"
                    className="w-full p-3 text-[15px]"
                  >
                    Create your Health ID
                  </Button>

                  <p className="text-center text-xs text-ink-soft">
                    Under development
                  </p>
                </div>
              </form>

              <p className="mt-5 text-center text-[13.5px] text-ink-soft">
                Already registered?{" "}
                <Button
                  variant="text"
                  onClick={() => switchTab("login")}
                >
                  Log in
                </Button>
              </p>
            </>
          )}

          {/* Status Message */}
          {message && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 rounded border border-line bg-paper px-3 py-2.5 text-[13.5px] text-teal-dark"
              role="status"
            >
              {message}
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
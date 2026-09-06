"use client";

import { Button } from "@/components/ui";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  FileKey2,
  HeartPulse,
  LockKeyhole,
  ScanLine,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";

const protections = [
  {
    icon: LockKeyhole,
    title: "Encryption at rest",
    text: "Your health records are protected while stored. Sensitive information remains unreadable without the appropriate authorization.",
  },
  {
    icon: ScanLine,
    title: "Encryption in transit",
    text: "Information moving between your device and Medinory is protected through secure encrypted connections, helping prevent unauthorized interception.",
  },
  {
    icon: FileKey2,
    title: "Isolated record access",
    text: "Access to health information is scoped to the authenticated user and the records they are authorized to view.",
  },
  {
    icon: UserRoundCheck,
    title: "Role-based permissions",
    text: "Patients, doctors, and authorized family members can have different levels of access based on their relationship with the record.",
  },
  {
    icon: ShieldCheck,
    title: "Consent-first sharing",
    text: "Sharing your health information should be your decision. Medinory is designed around explicit permission rather than open access.",
  },
  {
    icon: Check,
    title: "Traceable activity",
    text: "Important record interactions can be tracked so access remains accountable and easier to review when needed.",
  },
];

const principles = [
  "Your health data belongs to you.",
  "Access should always have a purpose.",
  "Sharing should require your permission.",
  "Security should exist from the beginning.",
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-paper-card">
        <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-teal/5 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -left-32 size-80 rounded-full bg-seal/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-2 text-xs font-medium tracking-wide text-ink-soft">
              <ShieldCheck className="size-4 text-teal" />
              SECURITY & PRIVACY
            </div>

            <h1 className="max-w-4xl text-5xl leading-[1.02] tracking-[-0.04em] text-ink sm:text-6xl lg:text-7xl">
              Your health records deserve
              <span className="block text-teal">serious protection.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink-soft sm:text-xl">
              Medinory is designed with privacy and security at the center. From
              protected storage to controlled access, every layer is built to
              help keep sensitive health information secure.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button
                variant="solid"
                className="text-[15px] px-5 hover:no-underline text-white hover:bg-teal-light hover:transition-colors hover:duration-150"
              >
                Protaction overview <ArrowRight className="ml-2 size-4" />
              </Button>

              <a
                href="#principles"
                className="inline-flex items-center rounded-lg border border-line bg-paper px-5 py-3.5 text-sm font-medium text-ink no-underline transition-colors hover:border-line-strong hover:bg-paper-card"
              >
                Privacy principles
              </a>
            </div>
          </motion.div>

          {/* Security overview */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-16 grid gap-4 sm:grid-cols-3"
          >
            {[
              {
                number: "01",
                title: "Private by design",
                text: "Security is considered throughout the product rather than added later.",
              },
              {
                number: "02",
                title: "Controlled access",
                text: "Only authenticated and authorized people should access health records.",
              },
              {
                number: "03",
                title: "Accountable activity",
                text: "Important record interactions can remain visible and traceable.",
              },
            ].map(({ number, title, text }) => (
              <div
                key={number}
                className="rounded-2xl border border-line bg-paper p-6"
              >
                <span className="text-xs font-semibold tracking-widest text-seal">
                  {number}
                </span>

                <h3 className="mt-4 text-lg text-ink">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-ink-soft">{text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Protection */}
      <section
        id="protection"
        className="border-b border-line bg-paper px-5 sm:px-8"
      >
        <div className="mx-auto max-w-6xl py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-seal">
              PROTECTION AT EVERY LAYER
            </p>

            <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
              Security that works quietly in the background.
            </h2>

            <p className="mt-5 text-base leading-7 text-ink-soft">
              You should not have to understand security infrastructure to feel
              confident about your health records. Medinory is designed to make
              strong protection part of the underlying system.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {protections.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.06 }}
                className="group rounded-2xl border border-line bg-paper-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-paper">
                  <Icon size={21} strokeWidth={1.7} />
                </div>

                <h3 className="mt-6 text-lg text-ink">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-ink-soft">{text}</p>
              </motion.article>
            ))}
          </div>

          {/* Privacy promise */}
          <div className="mt-6 flex gap-4 rounded-2xl border border-line bg-paper-card p-5 sm:p-6">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-seal/10 text-seal">
              <LockKeyhole size={19} strokeWidth={1.7} />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-ink">
                Privacy promise
              </h3>

              <p className="mt-1 text-sm leading-6 text-ink-soft">
                Access is authenticated, scoped and designed to remain
                accountable. Your health information should never be treated
                like ordinary application data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy principles */}
      <section
        id="principles"
        className="border-b border-line bg-paper-card px-5 sm:px-8"
      >
        <div className="mx-auto grid max-w-6xl gap-14 py-20 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="flex size-14 items-center justify-center rounded-2xl bg-teal text-paper">
              <HeartPulse size={27} strokeWidth={1.7} />
            </div>

            <h2 className="mt-7 text-3xl text-ink sm:text-4xl">
              Privacy should be a principle, not a feature.
            </h2>

            <p className="mt-5 text-base leading-7 text-ink-soft">
              Healthcare is deeply personal. Your records can contain years of
              information about your body, treatment, family and wellbeing. That
              makes privacy more than a technical requirement—it is part of
              building trust.
            </p>
          </div>

          <div className="rounded-3xl border border-line bg-paper p-7 sm:p-9">
            <div>
              {principles.map((principle, index) => (
                <motion.div
                  key={principle}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex gap-4 border-b border-line py-5 last:border-b-0"
                >
                  <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-teal text-paper">
                    <Check size={14} strokeWidth={2.5} />
                  </div>

                  <p className="text-sm font-medium leading-6 text-ink-soft">
                    {principle}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sharing */}
      <section className="bg-teal-dark px-5 text-paper sm:px-8">
        <div className="mx-auto max-w-6xl py-20 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-seal">
              YOU STAY IN CONTROL
            </p>

            <h2 className="mt-4 text-3xl text-paper sm:text-4xl">
              Sharing your health information should be your decision.
            </h2>

            <p className="mt-5 text-base leading-7 text-paper/70">
              Whether you need to share a report with a doctor or provide access
              to someone you trust, Medinory is designed around controlled and
              intentional sharing rather than making your information openly
              accessible.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Choose",
                text: "Decide what information you want to share.",
              },
              {
                title: "Control",
                text: "Keep access limited to the people who need it.",
              },
              {
                title: "Review",
                text: "Understand and manage access over time.",
              },
            ].map(({ title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-paper/10 bg-paper/5 p-6"
              >
                <h3 className="text-base text-paper">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-paper/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

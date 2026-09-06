"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";

import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Clock3,
  FileText,
  HeartPulse,
  History,
  MapPin,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: FileText,
    title: "Lifetime medical record",
    text: "Every prescription, lab report, scan, discharge summary, vaccination and allergy stays organized by date and condition.",
  },
  {
    icon: Sparkles,
    title: "AI health summaries",
    text: "Get a short, readable summary of your health history that highlights important information without replacing professional medical judgment.",
  },
  {
    icon: Activity,
    title: "Health trend graphs",
    text: "Track blood pressure, blood sugar, HbA1c, cholesterol, BMI and weight so important health patterns become easier to understand.",
  },
  {
    icon: Clock3,
    title: "Medicine reminders",
    text: "Keep track of your actual prescriptions, dosage and schedules with reminders designed around your treatment plan.",
  },
  {
    icon: BadgeCheck,
    title: "Emergency QR profile",
    text: "A scannable emergency profile can provide essential information such as blood group, allergies, conditions and current medicines.",
  },
  {
    icon: MapPin,
    title: "Nearby doctors and labs",
    text: "Discover doctors and diagnostic labs around you, with useful information that helps you make faster healthcare decisions.",
  },
  {
    icon: Users,
    title: "Pregnancy care",
    text: "Keep trimester-wise reports, ultrasound history, vitals, medicines and important visit information together in one timeline.",
  },
  {
    icon: History,
    title: "Family health history",
    text: "Keep important hereditary and family health information organized so your doctor has better context when making decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Consent-based sharing",
    text: "Share your health records with a doctor, hospital or other authorized person only when you choose to provide access.",
  },
  {
    icon: Stethoscope,
    title: "Doctor portal",
    text: "Doctors can upload prescriptions and relevant medical information directly, helping keep your digital record complete and organized.",
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-paper-card">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[30rem] rounded-full bg-teal/5 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 size-[26rem] rounded-full bg-seal/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            {/* Label */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-2 text-xs font-medium tracking-wide text-ink-soft">
              <HeartPulse className="size-4 text-teal" />
              THE MEDINORY PLATFORM
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-5xl leading-[1.02] tracking-[-0.04em] text-ink sm:text-6xl lg:text-7xl">
              Everything your health record
              <span className="block text-teal">was missing.</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink-soft sm:text-xl">
              Medinory brings prescriptions, lab reports, health history and
              important medical information into one clear, lifelong health
              identity.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/security">
                <Button
                  variant="solid"
                  className="text-[15px] px-5 hover:no-underline text-white hover:bg-teal-light hover:transition-colors hover:duration-150"
                >
                  Protaction overview <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>

              <a
                href="#features"
                className="inline-flex items-center rounded-lg border border-line bg-paper px-5 py-3.5 text-sm font-medium text-ink no-underline transition-colors hover:border-line-strong hover:bg-paper-card"
              >
                Explore features
              </a>
            </div>
          </motion.div>

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-16 grid gap-4 sm:grid-cols-3"
          >
            {[
              {
                number: "01",
                title: "One health identity",
                text: "Keep important health information together instead of scattered across papers, apps and memories.",
              },
              {
                number: "02",
                title: "Built around your life",
                text: "From routine check-ups to long-term care, your health history stays organized as it grows.",
              },
              {
                number: "03",
                title: "Ready when needed",
                text: "Find the information you need faster when visiting a doctor or dealing with an emergency.",
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

      {/* Features */}
      <section
        id="features"
        className="border-b border-line bg-paper px-5 sm:px-8"
      >
        <div className="mx-auto max-w-6xl py-20 sm:py-28">
          {/* Section heading */}
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-seal">
              A COMPLETE HEALTH RECORD
            </p>

            <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
              Everything important, in one place.
            </h2>

            <p className="mt-5 text-base leading-7 text-ink-soft">
              From a routine check-up to an emergency, Medinory gives every
              important part of your health journey a place.
            </p>
          </div>

          {/* Feature cards */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.045 }}
                className="group rounded-2xl border border-line bg-paper-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong"
              >
                {/* Icon */}
                <div className="flex size-11 items-center justify-center rounded-xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-paper">
                  <Icon size={21} strokeWidth={1.7} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg text-ink">{title}</h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-ink-soft">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Health journey */}
      <section className="border-b border-line bg-paper-card px-5 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-14 py-20 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Left */}
          <div>
            <div className="flex size-14 items-center justify-center rounded-2xl bg-teal text-paper">
              <Activity size={27} strokeWidth={1.7} />
            </div>

            <p className="mt-7 text-xs font-semibold tracking-[0.16em] text-seal">
              YOUR HEALTH JOURNEY
            </p>

            <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
              Your health history should move with you.
            </h2>

            <p className="mt-5 text-base leading-7 text-ink-soft">
              Whether you change doctors, move to another city or simply need to
              understand an old diagnosis, your health information stays
              organized around you.
            </p>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-line bg-paper p-7 sm:p-9">
            <div className="space-y-1">
              {[
                {
                  title: "Collect",
                  text: "Bring prescriptions, reports, scans and important health information together.",
                },
                {
                  title: "Understand",
                  text: "Use timelines, trends and AI-assisted summaries to make your history easier to understand.",
                },
                {
                  title: "Share",
                  text: "Provide relevant information to healthcare professionals when you need their help.",
                },
                {
                  title: "Continue",
                  text: "Keep building the same health identity as your healthcare journey changes over time.",
                },
              ].map(({ title, text }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex gap-4 border-b border-line py-5 last:border-b-0"
                >
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-teal/10 text-sm font-semibold text-teal">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-base text-ink">{title}</h3>

                    <p className="mt-1 text-sm leading-6 text-ink-soft">
                      {text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="border-b border-line bg-paper px-5 sm:px-8">
        <div className="mx-auto max-w-6xl py-20 sm:py-24">
          <div className="rounded-3xl border border-line bg-paper-card p-7 sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <div className="flex size-12 items-center justify-center rounded-xl bg-seal/10 text-seal">
                <Stethoscope size={22} strokeWidth={1.7} />
              </div>

              <p className="mt-7 text-xs font-semibold tracking-[0.16em] text-seal">
                FOR PATIENTS & DOCTORS
              </p>

              <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
                Better context can lead to better conversations.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-ink-soft">
                Instead of trying to remember every prescription, test result or
                previous diagnosis, patients can bring their organized history
                to the conversation and doctors can spend more time
                understanding what matters.
              </p>

              <a
                href="/#doctors"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-teal px-5 py-3.5 text-sm font-medium text-paper no-underline transition-colors hover:bg-teal-dark"
              >
                Explore for doctors
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-teal-dark px-5 text-paper sm:px-8">
        <div className="mx-auto max-w-6xl py-20 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-seal">
              YOUR HEALTH. YOUR IDENTITY.
            </p>

            <h2 className="mt-4 text-3xl text-paper sm:text-4xl">
              Your complete health story, finally in one place.
            </h2>

            <p className="mt-5 text-base leading-7 text-paper/70">
              Medinory helps turn scattered medical information into an
              organized health identity that can grow with you.
            </p>

            <a
              href="/"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-paper px-5 py-3.5 text-sm font-medium text-teal-dark no-underline transition-colors hover:bg-paper-card"
            >
              Create your Health ID
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

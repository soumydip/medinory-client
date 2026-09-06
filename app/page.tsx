"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Clock3,
  FileText,
  HeartPulse,
  History,
  KeyRound,
  MapPin,
  Menu,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  X,
} from "lucide-react";
import QRCode from "react-qr-code";
import { AuthModal } from "@/components/auth-modal-context";

const features = [
  [
    FileText,
    "Lifetime medical record",
    "Every prescription, lab report, scan, discharge summary, vaccination and allergy, stored securely and organized by date and condition.",
  ],
  [
    Sparkles,
    "AI health summaries",
    "Doctors see a short, readable summary that highlights what's clinically relevant — the AI points out facts, it never replaces a doctor's judgment.",
  ],
  [
    Activity,
    "Health trend graphs",
    "Blood pressure, sugar, HbA1c, cholesterol, BMI and weight, tracked over time so patterns are visible long before they become a problem.",
  ],
  [
    Clock3,
    "Medicine reminders",
    "Never miss a dose — reminders are built around your actual prescriptions, not a generic schedule.",
  ],
  [
    BadgeCheck,
    "Emergency QR profile & SOS",
    "A scannable profile shows blood group, allergies, chronic conditions and current medicines to first responders. One button calls an ambulance and shares your live location.",
  ],
  [
    MapPin,
    "Nearby doctors & labs",
    "Find doctors with fees and appointment links, and diagnostic labs you can book directly, without leaving the app.",
  ],
  [
    Users,
    "Pregnancy care",
    "Trimester-wise reports, ultrasound history, vitals, medicines and reminders for every doctor visit, in one timeline.",
  ],
  [
    History,
    "Family disease history",
    "See hereditary patterns across your family's records — useful context your doctor won't have to ask you to recall from memory.",
  ],
  [
    ShieldCheck,
    "Consent-based sharing",
    "Share records with an insurer or a new doctor only when you approve it — access is granted per request, not by default.",
  ],
  [
    Stethoscope,
    "Doctor portal",
    "Doctors upload verified prescriptions directly, so records reach your file without you carrying a paper slip home.",
  ],
] as const;

const security = [
  [
    "01",
    "AES-256 encryption at rest",
    "records are encrypted in the database itself, so raw files are unreadable even if storage is ever accessed directly.",
  ],
  [
    "02",
    "TLS 1.3 encryption in transit",
    "every request between your device and Medinory is encrypted end to end, the same standard banks use.",
  ],
  [
    "03",
    "Per-record encryption keys",
    "each patient's records are encrypted with their own key, so a single compromised key can't expose other patients' data.",
  ],
  [
    "04",
    "OTP-based authentication",
    "no password reuse across a system holding your medical history.",
  ],
  [
    "05",
    "Role-based access",
    "a lab technician sees different things than your cardiologist.",
  ],
  [
    "06",
    "Consent-based sharing",
    "nothing leaves your record without your explicit approval, and access can be revoked at any time.",
  ],
  [
    "07",
    "Audit logs",
    "every access to your record is logged with who, when and why, and is reviewable by you.",
  ],
];

const WRAP = "max-w-[1120px] mx-auto px-8 max-[640px]:px-5";

function Button({
  children,
  variant = "solid",
  onClick,
  type = "button",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "solid" | "ghost" | "text";
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center border border-transparent rounded-[2px] px-[18px] py-[10px] text-[14.5px] font-medium no-underline transition-[transform,background-color,border-color] duration-150 active:translate-y-px";
  const variants = {
    solid: "bg-teal text-white hover:bg-teal-dark",
    ghost: "bg-transparent text-ink border-line-strong hover:border-ink",
    text: "bg-transparent border-0 text-teal p-0 underline underline-offset-[3px]",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block mb-4">
      <span className="block text-[13px] text-ink-soft mb-1.5">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        required
        className="w-full px-3 py-[11px] text-[14.5px] border border-line-strong rounded text-ink bg-paper-card focus:outline-2 focus:outline-teal focus:outline-offset-1 focus:border-teal"
      />
    </label>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      className={`py-[88px] border-t border-line ${className}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.section>
  );
}

export default function Page() {
  const [modal, setModal] = useState<"login" | "register" | "forgot" | null>(
    null,
  );
  useEffect(() => {
    const close = (e: KeyboardEvent) => e.key === "Escape" && setModal(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  const open = (value: "login" | "register" | "forgot") => setModal(value);
  return (
    <>
      <main id="top">
        <header className="pt-[88px] pb-[72px] max-[640px]:pt-16 max-[640px]:pb-14">
          <div
            className={`${WRAP} grid grid-cols-[1.05fr_.95fr] gap-14 items-center max-[900px]:grid-cols-1`}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
            >
              <h1 className="text-[clamp(38px,5vw,56px)] leading-[1.06]">
                One lifetime.
                <br />
                One health identity.
              </h1>
              <p className="mt-[22px] font-serif text-[19px] leading-[1.4] text-ink-soft max-w-[46ch]">
                Medinory keeps every prescription, lab report, scan and
                diagnosis in one secure record — built to follow you for life,
                not just one hospital visit.
              </p>
              <div className="flex gap-4 mt-8 items-center flex-wrap">
                <Button
                  className="py-[13px] px-6 text-[15px]"
                  onClick={() => open("register")}
                >
                  Create your Health ID
                </Button>
                <Button
                  variant="ghost"
                  className="text-[15px] hover:bg-ink hover:text-paper hover:transition-colors hover:duration-150"
                  onClick={() => open("login")}
                >
                  Sign in
                </Button>
              </div>
              <div className="flex gap-7 mt-[52px] flex-wrap border-t border-line pt-[22px] max-[640px]:gap-[18px]">
                <div className="text-[13.5px] text-ink-soft">
                  <strong className="block text-ink text-[15px] mb-0.5">
                    For patients
                  </strong>
                  One record, wherever you&apos;re treated.
                </div>
                <div className="text-[13.5px] text-ink-soft">
                  <strong className="block text-ink text-[15px] mb-0.5">
                    For doctors
                  </strong>
                  AI summaries, not more paperwork.
                </div>
                <div className="text-[13.5px] text-ink-soft">
                  <strong className="block text-ink text-[15px] mb-0.5">
                    For families
                  </strong>
                  Shared history, consent-based access.
                </div>
              </div>
            </motion.div>
            <HealthCard />
          </div>
        </header>

        <Section id="how-it-works">
          <div className={WRAP}>
            <SectionHead
              title="Getting your health identity takes three steps"
              text="Once it's set up, it stays with you — no re-registering at every clinic or hospital you visit."
            />
            <div className="grid grid-cols-3 border-t border-line max-[800px]:grid-cols-1">
              {[
                [
                  "01",
                  "Register once",
                  "Verify with your phone number and a government ID equivalent. Takes a couple of minutes.",
                ],
                [
                  "02",
                  "Get your Medical ID",
                  "A single identity number is created for you — the anchor for every record you’ll ever have.",
                ],
                [
                  "03",
                  "Records follow you",
                  "Prescriptions, lab reports and discharge summaries sync automatically, wherever you’re treated.",
                ],
              ].map(([num, title, text], i, arr) => (
                <div
                  className={`pt-8 px-7 border-r border-line max-[800px]:border-r-0 max-[800px]:border-b max-[800px]:pb-7 ${
                    i === arr.length - 1
                      ? "border-r-0 max-[800px]:border-b-0"
                      : ""
                  }`}
                  key={num}
                >
                  <div className="font-mono text-[13px] text-seal">{num}</div>
                  <h3 className="text-xl mt-2.5">{title}</h3>
                  <p className="mt-2.5 text-ink-soft text-[15px] max-w-[32ch]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="features">
          <div className={WRAP}>
            <SectionHead
              title="Everything your health record was missing"
              text="Medinory organizes what's scattered across clinics, labs and memory into one place — and helps you and your doctor make sense of it."
            />
            <FeatureList items={features} />
            <div className="mt-12 text-center">
              <Link href="/features" className="inline-block">
                <Button
                  variant="text"
                  className="text-[15px] hover:no-underline"
                >
                  Read more about our features{" "}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Section>

        <Section id="hsi">
          <div
            className={`${WRAP} grid grid-cols-[1fr_1.15fr] gap-14 items-center max-[900px]:grid-cols-1`}
          >
            <div>
              <h2 className="text-[clamp(28px,3.4vw,36px)] text-ink">
                The Health Stability Index
              </h2>
              <p className="mt-3.5 text-[16.5px] text-ink-soft">
                A single number, built from your documented conditions, how well
                they&apos;re controlled, recent complications, and whether your
                overall trend is improving or worsening over time.
              </p>
              <div className="mt-[18px] px-4 py-[14px] border border-line-strong border-l-[3px] border-l-seal bg-paper-card text-[13.5px] text-ink-soft">
                HSI is an informational indicator, not a diagnosis. It&apos;s
                built from what&apos;s in your record — it can only be as
                complete as the data behind it, which is why it&apos;s always
                shown alongside a data-completeness confidence level.
              </div>
            </div>
            <div className="flex justify-center">
              <svg
                width="280"
                height="200"
                viewBox="0 0 280 200"
                aria-label="Health Stability Index 77, Stable"
              >
                <path
                  d="M30 160 A110 110 0 0 1 250 160"
                  fill="none"
                  stroke="var(--color-line)"
                  strokeWidth="16"
                />
                <path
                  d="M30 160 A110 110 0 0 1 96 62"
                  fill="none"
                  stroke="var(--color-pulse)"
                  strokeWidth="16"
                  strokeLinecap="round"
                />
                <path
                  d="M96 62 A110 110 0 0 1 184 62"
                  fill="none"
                  stroke="var(--color-seal)"
                  strokeWidth="16"
                />
                <path
                  d="M184 62 A110 110 0 0 1 250 160"
                  fill="none"
                  stroke="var(--color-teal)"
                  strokeWidth="16"
                  strokeLinecap="round"
                />
                <text
                  x="140"
                  y="140"
                  textAnchor="middle"
                  className="font-mono text-[34px] font-medium fill-ink"
                >
                  77
                </text>
                <text
                  x="140"
                  y="164"
                  textAnchor="middle"
                  className="font-sans text-xs fill-ink-soft"
                >
                  Stable
                </text>
              </svg>
            </div>
          </div>
        </Section>

        <Section id="security">
          <div className={WRAP}>
            <SectionHead
              title="Built privacy-first, not privacy-added"
              text="Health records deserve the same rigor as financial ones. Every layer is designed around who can see what, and why."
            />
            <ul className="list-none m-0 p-0 border-t border-line">
              {security.map(([num, title, text]) => (
                <li
                  key={num}
                  className="flex items-baseline gap-4 py-[18px] border-b border-line text-[15.5px]"
                >
                  <span className="text-teal font-mono text-[13px] flex-shrink-0 w-4">
                    {num}
                  </span>
                  <div>
                    <strong>{title}</strong> —{" "}
                    <span className="text-ink-soft">{text}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-[18px] px-4 py-[14px] border border-line-strong border-l-[3px] border-l-seal bg-paper-card text-[13.5px] text-ink-soft">
              Encryption keys are never stored alongside the data they protect.
              Even Medinory&apos;s own systems can&apos;t read your records
              without your authenticated request triggering decryption.
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/security" className="inline-block">
              <Button variant="text" className="text-[15px] hover:no-underline">
                Read more about our security practices
              </Button>
            </Link>
          </div>
        </Section>

        <Section id="why">
          <div className={WRAP}>
            <SectionHead
              title="Why people use Medinory"
              text="Not another app to check — a record that quietly does its job until the moment you actually need it."
            />
            <FeatureList
              items={[
                [
                  ShieldCheck,
                  "Nothing gets lost between hospitals",
                  "Switch clinics, cities or doctors and your history moves with you — no repeating your medical history from memory, no missing reports from a hospital you visited years ago.",
                ],
                [
                  BadgeCheck,
                  "Ready in an emergency",
                  "Blood group, allergies and current medicines are one QR scan away for a paramedic or ER doctor — even if you can’t speak for yourself.",
                ],
                [
                  Activity,
                  "Patterns you’d otherwise miss",
                  "A single blood sugar reading tells you little. Two years of readings, graphed, can show a trend worth acting on before it becomes a diagnosis.",
                ],
                [
                  Sparkles,
                  "Your doctor spends less time reading, more time treating",
                  "Instead of flipping through old prescriptions, your doctor opens an AI summary that surfaces what matters for this visit.",
                ],
                [
                  MapPin,
                  "You decide who sees what",
                  "An insurer, a new specialist, a family member — each only sees what you’ve explicitly shared, for as long as you’ve allowed it.",
                ],
              ]}
            />
          </div>
        </Section>

        <section
          id="doctors"
          className="bg-teal-dark text-paper border-t border-line py-20 max-[640px]:py-[60px]"
        >
          <div
            className={`${WRAP} grid grid-cols-[1.2fr_.8fr] gap-10 items-center max-[900px]:grid-cols-1`}
          >
            <div>
              <h2 className="text-white text-[clamp(26px,3vw,34px)]">
                Medinory assists doctors. It doesn&apos;t replace them.
              </h2>
              <p className="text-[#c9d6cf] mt-3.5 text-base max-w-[52ch]">
                Upload verified prescriptions directly, review a patient&apos;s
                full longitudinal history in one summary, and see AI-highlighted
                clinical facts instead of digging through years of scattered
                reports.
              </p>
              <div className="mt-7 flex gap-[14px] flex-wrap">
                <Button
                  className="py-[13px] px-6 text-[15px] border border-[#5c766d] text-paper hover:bg-[#5c766d] hover:text-teal-light hover:no-underline hover:transition-colors hover:duration-150"
                  onClick={() => open("login")}
                >
                  Doctor login
                </Button>
                <Button
                  variant="ghost"
                  className="border-[#5c766d] text-paper hover:bg-[#5c766d] hover:text-teal-light hover:no-underline hover:transition-colors hover:duration-150"
                  onClick={() => open("register")}
                >
                  Register as a doctor
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {modal && <AuthModal mode={modal} onClose={() => setModal(null)} />}
      </AnimatePresence>
    </>
  );
}

function SectionHead({ title, text }: { title: string; text: string }) {
  return (
    <div className="max-w-[56ch] mb-12">
      <h2 className="text-[clamp(28px,3.4vw,36px)] text-ink">{title}</h2>
      <p className="mt-3.5 text-[16.5px] text-ink-soft">{text}</p>
    </div>
  );
}

function FeatureList({
  items,
}: {
  items: readonly (readonly [typeof FileText, string, string])[];
}) {
  return (
    <div className="border-t border-line">
      {items.map(([Icon, title, text]) => (
        <div
          className="grid grid-cols-[280px_1fr] gap-7 py-6.5 border-b border-line items-start max-[700px]:grid-cols-1 max-[700px]:gap-2"
          key={title}
        >
          <div className="flex items-center gap-3">
            <Icon className="w-[22px] h-[22px] text-teal flex-shrink-0 stroke-[1.5]" />
            <h3 className="text-lg">{title}</h3>
          </div>
          <p className="text-ink-soft text-[15px] m-0 max-w-[60ch]">{text}</p>
        </div>
      ))}
    </div>
  );
}

function HealthCard() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.12 }}
    >
      <div className="relative overflow-hidden bg-paper-card border border-line-strong rounded-[10px] px-[26px] pt-[26px] pb-[22px] shadow-[0_22px_40px_-24px_#122b2559] max-[640px]:px-[18px] max-[640px]:pt-[22px] max-[640px]:pb-[22px] before:content-[''] before:absolute before:inset-0 before:bg-[repeating-linear-gradient(135deg,#122b2506_0_2px,transparent_2px_14px)] before:pointer-events-none">
        <div className="relative flex justify-between items-start">
          <div className="font-serif text-sm font-semibold text-teal">
            Medinory
            <span className="block font-medium text-[10.5px] text-ink-soft mt-0.5">
              LIFETIME HEALTH IDENTITY
            </span>
          </div>
          <div className="w-[34px] h-[34px] rounded-full border-[1.5px] border-seal text-seal flex items-center justify-center font-mono text-[11px] font-medium">
            MV
          </div>
        </div>
        <div className="relative mt-[26px] flex gap-[22px] items-center max-[640px]:gap-3.5">
          <div className="w-16 h-16 rounded-md bg-gradient-to-br from-[#dce3d9] to-[#c6d0c0] border border-line-strong flex-shrink-0" />
          <div className="flex-1">
            <div className="text-[10.5px] text-ink-soft mb-px">Name</div>
            <div className="text-[15px] font-medium mb-2.5">Your name here</div>
            <div className="text-[10.5px] text-ink-soft mb-px">Medical ID</div>
            <div className="font-mono text-[15px] tracking-[.06em] text-teal-dark">
              MD-125X-A9B2-3C4D
            </div>
          </div>
        </div>
        <div className="relative flex gap-6 mt-3.5 p-5">
          <div>
            <div className="text-[10.5px] text-ink-soft mb-px">Blood group</div>
            <div className="text-[13.5px] font-medium">O+</div>
          </div>
          <div>
            <div className="text-[10.5px] text-ink-soft mb-px">Issued</div>
            <div className="text-[13.5px] font-medium">2026</div>
          </div>
          <div className="w-[38px] h-[38px] border-[1.5px] border-ink ml-auto opacity-85">
            <QRCode value="https://medinory.ucoder.in" size={60} />
          </div>
        </div>
        <div className="relative mt-5 h-[22px]">
          <svg
            viewBox="0 0 300 24"
            preserveAspectRatio="none"
            className="w-full h-full block"
          >
            <path
              d="M0 12 H100 L110 4 L120 20 L130 12 H180 L188 2 L196 22 L204 12 H300"
              className="stroke-pulse fill-none"
              strokeWidth="1.6"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

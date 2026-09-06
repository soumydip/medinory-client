"use client";

import { motion } from "framer-motion";
import {
  Activity,
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
import Image from "next/image";
import QRCode from "react-qr-code";

export const WRAP = "max-w-[1120px] mx-auto px-8 max-[640px]:px-5";

export const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/security", label: "Security" },
];

export const features = [
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

export const security = [
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

export function Brand({ small = false }: { small?: boolean }) {
  return (
    <div id="auth-title" className="flex items-center gap-2.5">
      <Image
        src="/logo.jpeg"
        alt="Medinory"
        width={28}
        height={28}
        priority
        className="size-7 rounded object-contain"
      />

      <span className="text-lg font-bold text-ink">Medinory</span>
    </div>
  );
}

export function Button({
  children,
  variant = "solid",
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: {
  children: React.ReactNode;
  variant?: "solid" | "ghost" | "text";
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center border border-transparent rounded-[2px] px-[18px] py-[10px] text-[14.5px] font-medium no-underline transition-[transform,background-color,border-color] duration-150 active:translate-y-px";

  const variants = {
    solid: "bg-primary text-white hover:bg-primary-dark",
    ghost: "bg-transparent text-ink border-line-strong hover:border-ink",
    text: "bg-transparent border-0 text-primary p-0 underline underline-offset-[3px]",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      aria-disabled={disabled}
      className={`${base} ${variants[variant]} ${
        disabled ? "cursor-not-allowed opacity-50 pointer-events-none" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}

export function Field({
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
        className="w-full px-3 py-[11px] text-[14.5px] border border-line-strong rounded text-ink bg-paper-card focus:outline-2 focus:outline-primary focus:outline-offset-1 focus:border-primary"
      />
    </label>
  );
}

export function Section({
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

export function SectionHead({ title, text }: { title: string; text: string }) {
  return (
    <div className="max-w-[56ch] mb-12">
      <h2 className="text-[clamp(28px,3.4vw,36px)] text-ink">{title}</h2>
      <p className="mt-[14px] text-[16.5px] text-ink-soft">{text}</p>
    </div>
  );
}

export function FeatureList({
  items,
}: {
  items: readonly (readonly [typeof FileText, string, string])[];
}) {
  return (
    <div className="border-t border-line">
      {items.map(([Icon, title, text]) => (
        <div
          className="grid grid-cols-[280px_1fr] gap-7 py-[26px] border-b border-line items-start max-[700px]:grid-cols-1 max-[700px]:gap-2"
          key={title}
        >
          <div className="flex items-center gap-3">
            <Icon className="w-[22px] h-[22px] text-primary flex-shrink-0 stroke-[1.5]" />
            <h3 className="text-lg">{title}</h3>
          </div>
          <p className="text-ink-soft text-[15px] m-0 max-w-[60ch]">{text}</p>
        </div>
      ))}
    </div>
  );
}

export function HealthCard() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.12 }}
    >
      <div className="relative overflow-hidden bg-paper-card border border-line-strong rounded-[10px] px-[26px] pt-[26px] pb-[22px] shadow-[0_22px_40px_-24px_#122b2559] max-[640px]:px-[18px] max-[640px]:pt-[22px] max-[640px]:pb-[22px] before:content-[''] before:absolute before:inset-0 before:bg-[repeating-linear-gradient(135deg,#122b2506_0_2px,transparent_2px_14px)] before:pointer-events-none">
        <div className="relative flex justify-between items-start">
          <div className="font-serif text-sm font-semibold text-primary">
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
        <div className="relative flex gap-6 mt-[14px] p-5">
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

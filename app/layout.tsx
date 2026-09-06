import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { AuthModalProvider } from "@/components/auth-modal-context";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import Analytics from "@/components/Analysis";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medinory — One lifetime. One health identity.",
  description:
    "Medinory keeps every prescription, lab report, scan and diagnosis in one secure record — built to follow you for life.",
  other: {
    "ucoder-insights-id": "1ZrnwNjThjvSEmiU",
  },
  // Open Graph metadata
  openGraph: {
    title: "Medinory — One lifetime. One health identity.",
    description:
      "Medinory keeps every prescription, lab report, scan and diagnosis in one secure record — built to follow you for life.",
    url: "https://medinory.ucoder.in",
    siteName: "Medinory",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Medinory — One lifetime. One health identity.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Medinory — One lifetime. One health identity.",
    description:
      "Medinory keeps every prescription, lab report, scan and diagnosis in one secure record — built to follow you for life.",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <AuthModalProvider>
            <Nav />
            {children}
            <Footer />
            <Analytics />
          </AuthModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

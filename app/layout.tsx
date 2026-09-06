import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { AuthModalProvider } from "@/components/auth-modal-context";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medinory — One lifetime. One health identity.",
  description:
    "Medinory keeps every prescription, lab report, scan and diagnosis in one secure record — built to follow you for life.",
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
          </AuthModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

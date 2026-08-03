import type { Metadata } from "next";
import { Geist, Geist_Mono, Mulish } from "next/font/google";
import "./globals.scss";

const themeBootstrapScript = `
  (function () {
    try {
      var storedMode = localStorage.getItem("aurumxai-theme-mode") || "system";
      var resolvedTheme = storedMode === "system"
        ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
        : storedMode;

      document.documentElement.dataset.themeMode = storedMode;
      document.documentElement.dataset.theme = resolvedTheme;
      document.documentElement.classList.remove("theme-light", "theme-dark");
      document.documentElement.classList.add(resolvedTheme === "dark" ? "theme-dark" : "theme-light");
    } catch (e) {
      document.documentElement.dataset.themeMode = "system";
      document.documentElement.dataset.theme = "light";
      document.documentElement.classList.remove("theme-dark");
      document.documentElement.classList.add("theme-light");
    }
  })();
`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Our Company — aurumxai",
  description:
    "Learn how aurumxai designs and builds scalable software products for startups and enterprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${mulish.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

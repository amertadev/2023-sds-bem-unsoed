import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import NavBar from "@/components/layout/navbar";
import Script from 'next/script';

export const metadata = {
  title: "Soedirman Digital School - BEM UNSOED",
  description:
    "SDS is an online course event on technology organized by BEM UNSOED for students and the public",
  metadataBase: new URL("https://sds.bem-unsoed.com")
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          <NavBar />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import "@/app/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "Alvin | Portfolio",
  description: "Personal portfolio website built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">
        <Navbar />

        <main className="pt-16">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
      </body>
    </html>
  );
}
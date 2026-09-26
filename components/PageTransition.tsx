"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  // Kurva halus (easeOutExpo-ish): cepat di awal, melambat lembut di akhir
  const transition = reduceMotion
    ? { duration: 0.01 }
    : { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <>
      {/* Bar loading tipis di atas saat pindah halaman */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`bar-${pathname}`}
          className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-400"
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: 0 }}
          exit={{ scaleX: 0, opacity: 0 }}
          transition={
            reduceMotion
              ? { duration: 0.01 }
              : { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
          }
        />
      </AnimatePresence>

      {/* Transisi konten: exit dulu lalu enter (mode="wait") */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28, scale: 0.99 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -16, scale: 0.995 }}
          transition={transition}
          style={{ willChange: "opacity, transform" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

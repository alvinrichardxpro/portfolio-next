import type { ReactNode } from "react";

type Props = { title: string; children: ReactNode };

export default function DetailSection({ title, children }: Props) {
  return (
    <section className="min-w-0 border border-slate-800/60 rounded-2xl p-5 sm:p-6 bg-white/[0.02] mb-5 sm:mb-6">
      <h2 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">{title}</h2>
      {children}
    </section>
  );
}

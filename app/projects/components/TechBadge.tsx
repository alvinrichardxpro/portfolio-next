export default function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-block max-w-full truncate text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">
      {label}
    </span>
  );
}

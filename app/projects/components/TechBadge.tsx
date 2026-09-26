export default function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-block max-w-full truncate text-[10px] px-2 py-0.5 rounded-full text-slate-500 border border-slate-800/60">
      {label}
    </span>
  );
}

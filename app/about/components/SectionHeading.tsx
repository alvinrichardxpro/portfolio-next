type Props = {
  dotColor: string;
  shadowColor: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ dotColor, shadowColor, title, subtitle }: Props) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2.5">
        <span className={`w-2.5 h-2.5 rounded-full ${dotColor} shadow-sm ${shadowColor}`} />
        {title}
      </h2>
      {subtitle && <p className="text-sm text-slate-400 mt-2 ml-5">{subtitle}</p>}
    </div>
  );
}

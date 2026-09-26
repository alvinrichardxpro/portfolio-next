import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="w-full max-w-3xl mb-4 sm:mb-6 text-left">
      <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
        <FontAwesomeIcon icon={faCircle} className="text-slate-500 text-[8px] sm:text-[10px]" />
        {title}
      </h2>
    </div>
  );
}

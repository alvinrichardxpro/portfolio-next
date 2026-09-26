import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function EmptySlot() {
  return (
    <div className="bg-slate-900/20 border border-dashed border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center gap-2 text-center h-full min-h-[160px] sm:min-h-[280px]">
      <span className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700/60 flex items-center justify-center">
        <FontAwesomeIcon icon={faPlus} className="text-xs text-slate-400" />
      </span>
      <p className="text-slate-500 text-xs font-medium px-2">
        Tambahkan Topologi Baru Di Sini
      </p>
    </div>
  );
}

import { CalendarDays } from "lucide-react";

export default function DatePicker() {
  return (
    <div className="relative">

      <input
        type="date"
        className="h-14 w-full rounded-full border border-zinc-200 bg-white px-5 pr-14 outline-none transition focus:border-black"
      />

      <CalendarDays
        size={18}
        className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500"
      />

    </div>
  );
}
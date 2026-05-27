import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full">

      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
      />

      <input
        type="text"
        placeholder="Search assignments..."
        className="h-14 w-full rounded-2xl border border-zinc-200 bg-white pl-12 pr-4 outline-none transition focus:border-black"
      />

    </div>
  );
}
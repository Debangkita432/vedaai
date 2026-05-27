"use client";

import { Trash2 } from "lucide-react";
import CounterInput from "./CounterInput";

interface QuestionRowProps {
  onDelete: () => void;
}

export default function QuestionRow({
  onDelete,
}: QuestionRowProps) {
  return (
    <div className="grid grid-cols-[2fr_7rem_7rem_2.5rem] items-center gap-4">

      <select className="h-14 rounded-full border border-zinc-200 bg-white px-5 outline-none transition focus:border-black">

        <option>Multiple Choice Questions</option>

        <option>Short Questions</option>

        <option>Diagram/Graph-Based Questions</option>

        <option>Numerical Problems</option>

      </select>

      <CounterInput />

      <CounterInput />

      <button
        onClick={onDelete}
        className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 transition hover:bg-red-50 hover:text-red-500"
      >

        <Trash2 size={18} />

      </button>

    </div>
  );
}
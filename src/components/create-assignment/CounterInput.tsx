"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function CounterInput() {

  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex h-14 items-center justify-between rounded-full border border-zinc-200 bg-white px-4">

      <button
        onClick={decrement}
        className="flex h-7 w-7 items-center justify-center rounded-full transition hover:bg-zinc-100"
      >

        <Minus size={14} />

      </button>

      <p className="text-sm font-medium">
        {count}
      </p>

      <button
        onClick={increment}
        className="flex h-7 w-7 items-center justify-center rounded-full transition hover:bg-zinc-100"
      >

        <Plus size={14} />

      </button>

    </div>
  );
}
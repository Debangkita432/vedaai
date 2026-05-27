"use client";

import { motion } from "framer-motion";

export default function FilterBar() {
  return (
    <div className="flex items-center gap-3">

      <motion.button
        whileHover={{ scale: 1.03 }}
        className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white"
      >
        All
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.03 }}
        className="rounded-full bg-white px-5 py-2 text-sm font-medium text-zinc-600 border border-zinc-200"
      >
        Draft
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.03 }}
        className="rounded-full bg-white px-5 py-2 text-sm font-medium text-zinc-600 border border-zinc-200"
      >
        Published
      </motion.button>

    </div>
  );
}
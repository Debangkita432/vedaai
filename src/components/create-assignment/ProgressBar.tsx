"use client";

import { motion } from "framer-motion";

export default function ProgressBar() {
  return (
    <div className="w-full">



      <div className="mt-4 h-2 w-full rounded-full bg-zinc-200 overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "33%" }}
          transition={{ duration: 0.6 }}
          className="h-full rounded-full bg-black"
        />

      </div>

    </div>
  );
}
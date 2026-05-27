"use client";

import { motion } from "framer-motion";
import AssignmentDropdown from "./AssignmentDropdown";

export default function AssignmentCard() {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition"
    >

      <div className="flex items-start justify-between">

        <div>
          <h2 className="text-xl font-semibold text-zinc-900">
            Physics Mid-Term Assessment
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Assigned on 21 March 2026
          </p>

          <p className="mt-1 text-sm text-zinc-500">
            Due on 25 March 2026
          </p>
        </div>

        <AssignmentDropdown />

      </div>

    </motion.div>
  );
}
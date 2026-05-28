"use client";

import { motion } from "framer-motion";

import AssignmentDropdown from "./AssignmentDropdown";

interface AssignmentCardProps {
  subject: string;
  topic: string;
  difficulty: string;
  status: string;
}

export default function AssignmentCard({
  subject,
  topic,
  difficulty,
  status,
}: AssignmentCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition"
    >

      <div className="flex items-start justify-between">

        <div>

          <div className="flex items-center gap-3">

            <h2 className="text-xl font-semibold text-zinc-900">
              {subject} Assignment
            </h2>

            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 capitalize">
              {status}
            </span>

          </div>

          <p className="mt-3 text-sm font-medium text-zinc-700">
            Topic: {topic}
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            Difficulty: {difficulty}
          </p>

        </div>

        <AssignmentDropdown />

      </div>

    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";
import { UploadCloud } from "lucide-react";

export default function UploadBox() {
  return (
    <motion.div
      whileHover={{ scale: 1.005 }}
      className="rounded-[32px] border-2 border-dashed border-zinc-300 bg-zinc-50 px-10 py-16 text-center transition"
    >

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">

        <UploadCloud size={30} />

      </div>

      <h2 className="mt-6 text-xl font-semibold text-zinc-900">
        Choose a file or drag & drop it here
      </h2>

      <p className="mt-2 text-sm text-zinc-500">
        JPEG, PNG, PDF upto 10MB
      </p>

      <button className="mt-6 rounded-full bg-white px-6 py-3 font-medium shadow-sm transition hover:scale-105">
        Browse Files
      </button>

      <p className="mt-6 text-sm text-zinc-500">
        Upload images of your preferred document/image
      </p>

    </motion.div>
  );
}
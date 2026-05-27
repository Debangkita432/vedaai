"use client";

import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function PDFButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="flex items-center gap-3 rounded-full bg-white px-5 py-3 font-medium text-black shadow-sm"
    >

      <Download size={18} />

      Download as PDF

    </motion.button>
  );
}
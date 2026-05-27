"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f5f5] px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl rounded-[36px] border border-zinc-200 bg-white p-16 text-center shadow-sm"
      >

        <motion.img
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src="/vedaai.png"
          alt="VedaAI"
          className="mx-auto w-56 object-contain"
        />

        <h1 className="mt-10 text-6xl font-bold tracking-tight text-zinc-900">
          AI Assessment Creator
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500">
          Generate AI-powered assignments, create structured question
          papers, and simplify academic workflows beautifully.
        </p>

        <Link href="/assignments">

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-black px-10 py-4 text-lg font-medium text-white shadow-lg"
          >

            Start Journey

            <ArrowRight size={22} />

          </motion.button>

        </Link>

      </motion.div>

    </div>
  );
}
"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";

export default function Home() {

  return (
    <div
      className="
        flex min-h-screen
        items-center justify-center
        bg-[#f5f5f5]

        px-4 py-8

        sm:px-6
      "
    >

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          w-full max-w-4xl
          rounded-[28px]
          border border-zinc-200
          bg-white
          p-6
          text-center
          shadow-sm

          sm:rounded-[32px]
          sm:p-10

          md:rounded-[36px]
          md:p-16
        "
      >

        {/* LOGO */}
        <motion.img
          initial={{
            scale: 0.9,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          src="/vedaai.png"
          alt="VedaAI"
          className="
            mx-auto
            w-32 object-contain

            sm:w-40

            md:w-56
          "
        />

        {/* TITLE */}
        <h1
          className="
            mt-8
            text-3xl
            font-bold
            tracking-tight
            text-zinc-900

            sm:mt-10
            sm:text-4xl

            md:text-6xl
          "
        >
          AI Assessment Creator
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            mx-auto mt-5
            max-w-2xl
            text-sm
            leading-relaxed
            text-zinc-500

            sm:text-base

            md:mt-6
            md:text-lg
          "
        >
          Generate AI-powered assignments,
          create structured question
          papers, and simplify academic
          workflows beautifully.
        </p>

        {/* BUTTON */}
        <Link href="/assignments">

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
              mt-10 inline-flex
              items-center gap-3
              rounded-full
              bg-black

              px-6 py-3
              text-sm font-medium
              text-white
              shadow-lg
              transition-all duration-300

              hover:bg-zinc-800

              sm:mt-12
              sm:px-8
              sm:py-4
              sm:text-base

              md:px-10
              md:text-lg
            "
          >

            Start Journey

            <ArrowRight size={20} />

          </motion.button>

        </Link>

      </motion.div>

    </div>
  );
}
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Sidebar() {
  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 flex h-screen w-65 flex-col justify-between border-r border-zinc-200 bg-white p-5"
    >

      <div>

        <Link href="/">
          <motion.img
            whileHover={{ scale: 1.04 }}
            src="/vedaai.png"
            alt="VedaAI"
            className="w-40 cursor-pointer object-contain"
          />
        </Link>

        <Link href="/create-assignment">

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 w-full rounded-full bg-black py-3 font-medium text-white shadow-sm"
          >
            Create Assignment
          </motion.button>

        </Link>

        <div className="mt-12 space-y-4 text-zinc-500">

          <Link href="/">
            <motion.p
              whileHover={{ x: 4 }}
              className="cursor-pointer rounded-xl px-4 py-3 transition hover:bg-zinc-100 hover:text-black"
            >
              Home
            </motion.p>
          </Link>

          <motion.p
            whileHover={{ x: 4 }}
            className="cursor-pointer rounded-xl px-4 py-3 transition hover:bg-zinc-100 hover:text-black"
          >
            My Groups
          </motion.p>

          <Link href="/assignments">

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="cursor-pointer rounded-xl bg-zinc-100 px-4 py-3 font-semibold text-black"
            >
              Assignments
            </motion.div>

          </Link>

          <motion.p
            whileHover={{ x: 4 }}
            className="cursor-pointer rounded-xl px-4 py-3 transition hover:bg-zinc-100 hover:text-black"
          >
            AI Teacher’s Toolkit
          </motion.p>

          <motion.p
            whileHover={{ x: 4 }}
            className="cursor-pointer rounded-xl px-4 py-3 transition hover:bg-zinc-100 hover:text-black"
          >
            My Library
          </motion.p>

        </div>
      </div>

      <motion.div
        whileHover={{ y: -2 }}
        className="rounded-2xl bg-zinc-100 p-4"
      >
        <h2 className="font-semibold">
          Delhi Public School
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Bokaro Steel City
        </p>
      </motion.div>

    </motion.div>
  );
}
"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-zinc-50">

      {/* ================= DESKTOP SIDEBAR ================= */}

      <div className="hidden md:block">

        <Sidebar />

      </div>

      {/* ================= MOBILE SIDEBAR ================= */}

      <Sheet
        open={sidebarOpen}
        onOpenChange={setSidebarOpen}
      >

        <SheetContent
          side="left"
          className="
            w-72
            border-r border-zinc-200
            p-0
          "
        >

          {/* REQUIRED FOR ACCESSIBILITY */}
          <SheetHeader className="hidden">

            <SheetTitle>
              Mobile Navigation
            </SheetTitle>

          </SheetHeader>

          <Sidebar />

        </SheetContent>

      </Sheet>

      {/* ================= MAIN CONTENT ================= */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
        }}
        className="md:ml-72"
      >

        {/* NAVBAR */}
        <Navbar
          onMenuClick={() =>
            setSidebarOpen(true)
          }
        />

        {/* PAGE CONTENT */}
        <motion.main
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            p-4

            md:p-6
          "
        >
          {children}
        </motion.main>

      </motion.div>

    </div>
  );
}
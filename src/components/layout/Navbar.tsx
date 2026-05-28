"use client";

import {
  Bell,
  Menu,
} from "lucide-react";

interface NavbarProps {
  onMenuClick?: () => void;
}

export default function Navbar({
  onMenuClick,
}: NavbarProps) {

  return (
    <nav
      className="
        sticky top-0 z-30
        flex h-16 items-center justify-between
        border-b border-zinc-200
        bg-white/90
        px-4
        backdrop-blur-md

        md:m-4
        md:rounded-2xl
        md:border
      "
    >

      {/* LEFT */}
      <div className="flex items-center gap-3">

        {/* MOBILE MENU */}
        <button
          onClick={onMenuClick}
          className="
            flex h-10 w-10 items-center justify-center
            rounded-xl
            border border-zinc-200
            bg-zinc-50
            transition
            hover:bg-zinc-100

            md:hidden
          "
        >
          <Menu size={20} />
        </button>

        <div>

          <h1 className="text-lg font-bold">
            Assignments
          </h1>

        </div>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">

        <button
          className="
            relative
            flex h-10 w-10 items-center justify-center
            rounded-xl
            border border-zinc-200
            bg-zinc-50
          "
        >

          <Bell size={18} />

          <span
            className="
              absolute right-2 top-2
              h-2 w-2 rounded-full
              bg-orange-500
            "
          />

        </button>

        <div
          className="
            flex h-10 w-10 items-center justify-center
            rounded-full
            bg-black
            text-sm font-semibold text-white
          "
        >
          JD
        </div>

      </div>

    </nav>
  );
}
"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  Users,
  FileText,
  Library,
  Plus,
  X,
} from "lucide-react";

interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({
  onClose,
}: SidebarProps) {

  const navItems = [
    {
      title: "Home",
      href: "/",
      icon: LayoutDashboard,
    },
    {
      title: "My Groups",
      href: "/groups",
      icon: Users,
    },
    {
      title: "Assignments",
      href: "/assignments",
      icon: FileText,
      active: true,
    },
    {
      title: "My Library",
      href: "/library",
      icon: Library,
    },
  ];

  return (
    <aside
      className="
        fixed left-0 top-0 z-40
        flex h-screen w-72
        flex-col
        border-r border-zinc-200
        bg-white
        px-5 py-6
      "
    >

      {/* ================= TOP ================= */}

      <div className="flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >

          <img
            src="/vedaai.png"
            alt="VedaAI"
            className="h-10 w-auto"
          />

        </Link>

        {/* MOBILE CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="
            flex h-10 w-10
            items-center justify-center
            rounded-xl
            border border-zinc-200
            bg-zinc-50
            transition
            hover:bg-zinc-100

            md:hidden
          "
        >

          <X size={18} />

        </button>

      </div>

      {/* ================= CREATE BUTTON ================= */}

      <Link
        href="/create-assignment"
        className="mt-8"
      >

        <button
          className="
            flex w-full
            items-center justify-center gap-2
            rounded-2xl
            bg-black
            px-5 py-4
            text-sm font-medium
            text-white
            shadow-lg
            transition-all duration-300

            hover:scale-[1.02]
            hover:bg-zinc-800

            active:scale-95
          "
        >

          <Plus size={18} />

          Create Assignment

        </button>

      </Link>

      {/* ================= NAVIGATION ================= */}

      <nav className="mt-10 flex flex-col gap-2">

        {navItems.map((item, index) => {

          const Icon =
            item.icon;

          return (
            <Link
              key={index}
              href={item.href}
            >

              <div
                className={`
                  group flex items-center gap-3
                  rounded-2xl
                  px-4 py-3
                  text-sm font-medium
                  transition-all duration-300

                  ${
                    item.active
                      ? "bg-zinc-100 text-black"
                      : "text-zinc-500 hover:bg-zinc-100 hover:text-black"
                  }
                `}
              >

                <Icon size={18} />

                <span>
                  {item.title}
                </span>

              </div>

            </Link>
          );

        })}

      </nav>

    </aside>
  );
}
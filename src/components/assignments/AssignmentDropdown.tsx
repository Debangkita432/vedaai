"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MoreVertical } from "lucide-react";

export default function AssignmentDropdown() {
  return (
    <DropdownMenu>

      <DropdownMenuTrigger asChild>

        <button className="rounded-full p-2 transition hover:bg-zinc-100">
          <MoreVertical size={18} />
        </button>

      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-44 rounded-2xl"
      >

        <DropdownMenuItem>
          View Assignment
        </DropdownMenuItem>

        <DropdownMenuItem className="text-red-500">
          Delete
        </DropdownMenuItem>

      </DropdownMenuContent>

    </DropdownMenu>
  );
}
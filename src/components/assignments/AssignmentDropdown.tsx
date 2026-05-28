"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  MoreVertical,
  Eye,
  Trash2,
  Pencil,
  Download,
} from "lucide-react";

interface AssignmentDropdownProps {
  onView?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
  onDownload?: () => void;
}

export default function AssignmentDropdown({
  onView,
  onDelete,
  onEdit,
  onDownload,
}: AssignmentDropdownProps) {
  return (
    <DropdownMenu>

      <DropdownMenuTrigger asChild>

        <button
          className="
            flex h-10 w-10 items-center justify-center
            rounded-2xl
            border border-zinc-200
            bg-white
            text-zinc-700
            shadow-sm
            transition-all
            duration-200
            hover:scale-105
            hover:bg-zinc-100
            active:scale-95
          "
        >
          <MoreVertical size={18} />
        </button>

      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="
          w-52
          rounded-2xl
          border border-zinc-200
          bg-white
          p-2
          shadow-2xl
        "
      >

        <DropdownMenuItem
          onClick={onView}
          className="
            flex cursor-pointer items-center gap-3
            rounded-xl
            px-3 py-3
            text-sm font-medium
            transition-colors
            hover:bg-zinc-100
            focus:bg-zinc-100
          "
        >
          <Eye size={16} />
          View Assignment
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={onEdit}
          className="
            flex cursor-pointer items-center gap-3
            rounded-xl
            px-3 py-3
            text-sm font-medium
            transition-colors
            hover:bg-zinc-100
            focus:bg-zinc-100
          "
        >
          <Pencil size={16} />
          Edit Assignment
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={onDownload}
          className="
            flex cursor-pointer items-center gap-3
            rounded-xl
            px-3 py-3
            text-sm font-medium
            transition-colors
            hover:bg-zinc-100
            focus:bg-zinc-100
          "
        >
          <Download size={16} />
          Download PDF
        </DropdownMenuItem>

        <div className="my-2 h-px bg-zinc-200" />

        <DropdownMenuItem
          onClick={onDelete}
          className="
            flex cursor-pointer items-center gap-3
            rounded-xl
            px-3 py-3
            text-sm font-medium
            text-red-500
            transition-colors
            hover:bg-red-50
            focus:bg-red-50
            focus:text-red-500
          "
        >
          <Trash2 size={16} />
          Delete Assignment
        </DropdownMenuItem>

      </DropdownMenuContent>

    </DropdownMenu>
  );
}
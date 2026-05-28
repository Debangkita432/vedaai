import Link from "next/link";

import AssignmentGrid from "@/components/assignments/AssignmentGrid";
import FilterBar from "@/components/assignments/FilterBar";
import SearchBar from "@/components/assignments/SearchBar";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function AssignmentsPage() {
  return (
    <DashboardLayout>
      {/* Main Content */}
      <div className="mx-auto w-full max-w-7xl space-y-6">
        {/* Search */}
        <div className="w-full">
          <SearchBar />
        </div>

        {/* Filters */}
        <div className="overflow-x-auto">
          <FilterBar />
        </div>

        {/* Assignment Grid */}
        <div className="w-full">
          <AssignmentGrid />
        </div>
      </div>

      {/* Floating Create Button */}
      <Link href="/create-assignment">
        <button
          className="
            fixed bottom-6 right-6 z-50
            flex h-14 w-14 items-center justify-center
            rounded-full
            bg-black
            text-white
            shadow-lg
            transition-all duration-300
            hover:scale-105
            active:scale-95
            md:bottom-8
            md:right-8
            md:h-auto
            md:w-auto
            md:px-6
            md:py-3
            md:rounded-full
          "
        >
          <span className="md:hidden">+</span>
          <span className="hidden md:inline-flex items-center gap-2 font-medium">
            + Create Assignment
          </span>
        </button>
      </Link>
    </DashboardLayout>
  );
}

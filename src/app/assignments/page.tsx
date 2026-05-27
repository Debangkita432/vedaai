import Link from "next/link";

import AssignmentGrid from "@/components/assignments/AssignmentGrid";
import FilterBar from "@/components/assignments/FilterBar";
import SearchBar from "@/components/assignments/SearchBar";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function AssignmentsPage() {
  return (
    <DashboardLayout>

      <div className="space-y-6">

        <SearchBar />

        <FilterBar />

        <AssignmentGrid />

      </div>

      <Link href="/create-assignment">

        <button className="fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black px-8 py-4 font-medium text-white shadow-xl transition hover:scale-105">
          + Create Assignment
        </button>

      </Link>

    </DashboardLayout>
  );
}
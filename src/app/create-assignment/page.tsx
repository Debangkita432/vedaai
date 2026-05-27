import AssignmentForm from "@/components/create-assignment/AssignmentForm";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function CreateAssignmentPage() {
  return (
    <DashboardLayout>

      <div className="p-6">
        <AssignmentForm />
      </div>

    </DashboardLayout>
  );
}
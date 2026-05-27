import QuestionPaper from "@/components/generated-paper/QuestionPaper";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function GeneratedPaperPage() {
  return (
    <DashboardLayout>

      <div className="p-6">

        <QuestionPaper />

      </div>

    </DashboardLayout>
  );
}
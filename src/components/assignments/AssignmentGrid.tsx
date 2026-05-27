import AssignmentCard from "./AssignmentCard";

export default function AssignmentGrid() {
  return (
    <div className="grid grid-cols-3 gap-6">

      <AssignmentCard />
      <AssignmentCard />
      <AssignmentCard />
      <AssignmentCard />
      <AssignmentCard />
      <AssignmentCard />

    </div>
  );
}
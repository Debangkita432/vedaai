interface DifficultyBadgeProps {
  difficulty: "Easy" | "Medium" | "Hard";
}

export default function DifficultyBadge({
  difficulty,
}: DifficultyBadgeProps) {

  const colors = {
    Easy: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Hard: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-4 py-1 text-xs font-medium ${colors[difficulty]}`}
    >
      {difficulty}
    </span>
  );
}
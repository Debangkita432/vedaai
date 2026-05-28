type QuestionItemProps = {
  question: string;
  marks: number;
  difficulty: string;
};

export default function QuestionItem({
  question,
  marks,
  difficulty,
}: QuestionItemProps) {

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4">

      <div className="flex items-start justify-between gap-4">

        <p className="text-sm font-medium text-zinc-800">
          {question}
        </p>

        <span className="rounded-full bg-black px-3 py-1 text-xs text-white">
          {marks} Marks
        </span>

      </div>

      <div className="mt-3">

        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs">
          {difficulty}
        </span>

      </div>

    </div>
  );
}
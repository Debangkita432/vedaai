import QuestionItem from "./QuestionItem";

interface SectionBlockProps {
  title: string;
  instruction: string;
}

export default function SectionBlock({
  title,
  instruction,
}: SectionBlockProps) {
  return (
    <div className="mt-10">

      <div className="mb-6">

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        <p className="mt-2 text-zinc-500">
          {instruction}
        </p>

      </div>

      <div className="space-y-4">

        <QuestionItem
          question="Explain Newton’s First Law with a real-life example."
          marks={5}
          difficulty="Easy"
        />

        <QuestionItem
          question="Derive the equation of motion using graphical analysis."
          marks={10}
          difficulty="Medium"
        />

        <QuestionItem
          question="A car accelerates uniformly from rest to 25 m/s in 8 seconds. Calculate acceleration and distance travelled."
          marks={15}
          difficulty="Hard"
        />

      </div>

    </div>
  );
}
export default function EmptyState() {
  return (
    <div className="h-[80vh] rounded-[32px] bg-white flex flex-col items-center justify-center">

      <div className="w-40 h-40 rounded-full bg-zinc-100" />

      <h1 className="mt-8 text-3xl font-bold">
        No assignments yet
      </h1>

      <p className="mt-4 max-w-lg text-center text-zinc-500">
        Create your first assignment to start collecting and grading student submissions.
      </p>

      <button className="mt-8 rounded-full bg-black px-8 py-3 text-white font-medium">
        + Create Your First Assignment
      </button>

    </div>
  );
}
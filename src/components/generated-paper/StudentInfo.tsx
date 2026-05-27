export default function StudentInfo() {
  return (
    <div className="grid grid-cols-3 gap-6 border-b border-zinc-200 pb-8">

      <div>
        <p className="text-sm text-zinc-500">
          Student Name
        </p>

        <div className="mt-4 h-px w-full bg-black" />
      </div>

      <div>
        <p className="text-sm text-zinc-500">
          Roll Number
        </p>

        <div className="mt-4 h-px w-full bg-black" />
      </div>

      <div>
        <p className="text-sm text-zinc-500">
          Section
        </p>

        <div className="mt-4 h-px w-full bg-black" />
      </div>

    </div>
  );
}
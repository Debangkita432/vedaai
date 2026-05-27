export default function Navbar() {
  return (
    <div className="ml-72 mt-4 mr-4 flex h-16 items-center justify-between rounded-2xl border border-zinc-200 bg-white px-6">

      <p className="font-medium text-zinc-500">
        Assignments
      </p>

      <div className="flex items-center gap-4">

        <div className="h-2 w-2 rounded-full bg-orange-500" />

        <div className="h-10 w-10 rounded-full bg-zinc-300" />

        <p className="font-medium">
          John Doe
        </p>

      </div>

    </div>
  );
}
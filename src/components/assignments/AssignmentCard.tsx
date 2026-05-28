"use client";

import {
  BookOpen,
  Sparkles,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import AssignmentDropdown from "./AssignmentDropdown";

interface AssignmentCardProps {
  _id: string;
  subject: string;
  topic: string;
  difficulty: string;
  status: string;
  generatedQuestions: string[];
  generatedPdf?: string;
}

export default function AssignmentCard({
  _id,
  subject,
  topic,
  difficulty,
  status,
  generatedQuestions,
  generatedPdf,
}: AssignmentCardProps) {

  const handleDelete = async () => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this assignment?"
      );

    if (!confirmDelete) return;

    try {

      const response = await fetch(
        `http://127.0.0.1:8000/api/assignments/${_id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (data.success) {
        window.location.reload();
      }

    } catch (error) {

      console.log(error);

      alert("Delete failed");

    }

  };

  const handleDownloadPDF = () => {

    if (!generatedPdf) {

      alert("PDF not generated yet");

      return;

    }

    const pdfUrl =
      `http://127.0.0.1:8000/${generatedPdf.replace(
        /\\/g,
        "/"
      )}`;

    window.open(pdfUrl, "_blank");

  };

  const getDifficultyStyles = () => {

    switch (difficulty.toLowerCase()) {

      case "easy":
        return "bg-emerald-100 text-emerald-700 border border-emerald-200";

      case "medium":
        return "bg-amber-100 text-amber-700 border border-amber-200";

      case "hard":
        return "bg-red-100 text-red-700 border border-red-200";

      default:
        return "bg-zinc-100 text-zinc-700 border border-zinc-200";

    }

  };

  const getStatusStyles = () => {

    switch (status.toLowerCase()) {

      case "completed":
        return {
          style:
            "bg-emerald-100 text-emerald-700 border border-emerald-200",
          icon:
            <CheckCircle2 size={14} />,
        };

      case "failed":
        return {
          style:
            "bg-red-100 text-red-700 border border-red-200",
          icon:
            <XCircle size={14} />,
        };

      default:
        return {
          style:
            "bg-amber-100 text-amber-700 border border-amber-200",
          icon:
            <Clock3 size={14} />,
        };

    }

  };

  const statusData =
    getStatusStyles();

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border border-zinc-200
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl

        sm:p-6
      "
    >

      {/* Top Gradient */}
      <div
        className="
          absolute inset-x-0 top-0 h-1
          bg-linear-to-r
          from-black
          via-zinc-700
          to-zinc-400
        "
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-3">

        <div className="flex min-w-0 items-center gap-3">

          <div
            className="
              flex h-12 w-12 shrink-0 items-center justify-center
              rounded-2xl
              bg-zinc-100
            "
          >
            <BookOpen
              size={20}
              className="text-black"
            />
          </div>

          <div className="min-w-0">

            <h2
              className="
                truncate
                text-lg
                font-bold
                tracking-tight
                text-black

                sm:text-xl
              "
            >
              {subject}
            </h2>

            <p className="text-sm text-zinc-500">
              AI Generated Assignment
            </p>

          </div>

        </div>

        <AssignmentDropdown
          onDelete={handleDelete}
          onDownload={handleDownloadPDF}
        />

      </div>

      {/* Info Section */}
      <div className="mt-6 grid gap-3">

        {/* Topic */}
        <div
          className="
            rounded-2xl
            border border-zinc-100
            bg-zinc-50
            px-4 py-3
          "
        >

          <p
            className="
              mb-1
              text-xs
              font-medium
              uppercase
              tracking-wide
              text-zinc-400
            "
          >
            Topic
          </p>

          <p className="line-clamp-2 text-sm font-medium text-black">
            {topic}
          </p>

        </div>

        {/* Difficulty + Status */}
        <div className="grid grid-cols-2 gap-3">

          {/* Difficulty */}
          <div
            className="
              rounded-2xl
              border border-zinc-100
              bg-zinc-50
              px-4 py-3
            "
          >

            <p
              className="
                mb-2
                text-xs
                font-medium
                uppercase
                tracking-wide
                text-zinc-400
              "
            >
              Difficulty
            </p>

            <span
              className={`
                inline-flex items-center rounded-full px-3 py-1
                text-xs font-semibold capitalize
                ${getDifficultyStyles()}
              `}
            >
              {difficulty}
            </span>

          </div>

          {/* Status */}
          <div
            className="
              rounded-2xl
              border border-zinc-100
              bg-zinc-50
              px-4 py-3
            "
          >

            <p
              className="
                mb-2
                text-xs
                font-medium
                uppercase
                tracking-wide
                text-zinc-400
              "
            >
              Status
            </p>

            <span
              className={`
                inline-flex items-center gap-1 rounded-full
                px-3 py-1 text-xs font-semibold capitalize
                ${statusData.style}
              `}
            >

              {statusData.icon}

              {status}

            </span>

          </div>

        </div>

      </div>

      {/* Questions */}
      <div className="mt-6">

        <div className="mb-3 flex items-center gap-2">

          <Sparkles
            size={16}
            className="text-zinc-500"
          />

          <h3 className="text-sm font-semibold text-black">
            Generated Questions
          </h3>

        </div>

        <div
          className="
            max-h-56
            overflow-y-auto
            rounded-2xl
            border border-zinc-100
            bg-zinc-50
            p-4
          "
        >

          <ul className="space-y-3">

            {generatedQuestions?.length > 0 ? (

              generatedQuestions.map(
                (question, index) => (

                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >

                    <span
                      className="
                        mt-0.5
                        flex h-5 w-5 shrink-0
                        items-center justify-center
                        rounded-full
                        bg-black
                        text-[10px]
                        font-semibold
                        text-white
                      "
                    >
                      {index + 1}
                    </span>

                    <p className="text-sm leading-relaxed text-zinc-700">
                      {question}
                    </p>

                  </li>

                )
              )

            ) : (

              <p className="text-sm text-zinc-500">
                No questions generated yet.
              </p>

            )}

          </ul>

        </div>

      </div>

      {/* Footer */}
      <div className="mt-6">

        {generatedPdf ? (

          <button
            onClick={handleDownloadPDF}
            className="
              flex w-full items-center justify-center gap-2
              rounded-2xl
              bg-black
              px-5 py-3.5
              text-sm font-semibold text-white
              shadow-lg
              transition-all
              duration-300
              hover:scale-[1.01]
              hover:bg-zinc-800
              active:scale-95
            "
          >

            {/* Tailwind Download Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16V4m0 12-4-4m4 4 4-4m-9 8h10"
              />
            </svg>

            Download PDF

          </button>

        ) : (

          <button
            disabled
            className="
              flex w-full cursor-not-allowed
              items-center justify-center gap-2
              rounded-2xl
              bg-zinc-200
              px-5 py-3.5
              text-sm font-semibold
              text-zinc-500
            "
          >
            PDF Not Available
          </button>

        )}

      </div>

    </div>
  );
}
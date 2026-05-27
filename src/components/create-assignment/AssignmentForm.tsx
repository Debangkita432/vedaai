"use client";

import Link from "next/link";
import { useState } from "react";

import AdditionalInfo from "./AdditionalInfo";
import DatePicker from "./DatePicker";
import ProgressBar from "./ProgressBar";
import QuestionRow from "./QuestionRow";
import UploadBox from "./UploadBox";

export default function AssignmentForm() {

  const [questions, setQuestions] = useState([
    { id: 1 },
  ]);

  const handleDelete = (id: number) => {

    if (questions.length === 1) {
      return;
    }

    setQuestions(
      questions.filter(
        (question) => question.id !== id
      )
    );
  };

  return (
    <div className="mx-auto max-w-5xl rounded-[36px] bg-white p-10 shadow-sm">

      <div className="mb-10">

        <h1 className="text-4xl font-bold tracking-tight">
          Create Assignment
        </h1>

        <p className="mt-3 text-zinc-500">
          Basic information about your assignment
        </p>

      </div>

      <ProgressBar />

      <div className="mt-10">
        <UploadBox />
      </div>

      <div className="mt-10">

        <p className="mb-4 text-lg font-semibold">
          Due Date
        </p>

        <DatePicker />

      </div>

      <div className="mt-10">

        <div className="mb-5 flex items-center justify-between">

          <p className="text-lg font-semibold">
            Question Configuration
          </p>

          <button
            onClick={() =>
              setQuestions([
                ...questions,
                { id: Date.now() },
              ])
            }
            className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white"
          >
            + Add Question Type
          </button>

        </div>

        <div className="space-y-4">

          {questions.map((question) => (
            <QuestionRow
              key={question.id}
              onDelete={() =>
                handleDelete(question.id)
              }
            />
          ))}

        </div>

      </div>

      <div className="mt-10">

        <p className="mb-4 text-lg font-semibold">
          Additional Instructions
        </p>

        <AdditionalInfo />

      </div>

      <div className="mt-10 flex items-center justify-end">

        <Link href="/generated-paper">

          <button className="rounded-full bg-black px-10 py-4 font-medium text-white shadow-lg transition hover:scale-105">
            Generate Assignment
          </button>

        </Link>

      </div>

    </div>
  );
}
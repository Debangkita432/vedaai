"use client";

import { useState } from "react";

import AdditionalInfo from "./AdditionalInfo";
import DatePicker from "./DatePicker";
import ProgressBar from "./ProgressBar";
import QuestionRow from "./QuestionRow";
import UploadBox from "./UploadBox";

export default function AssignmentForm() {

  const [questions, setQuestions] =
    useState([{ id: 1 }]);

  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const [subject, setSubject] =
    useState("");

  const [className, setClassName] =
    useState("");

  const [topic, setTopic] =
    useState("");

  const [difficulty, setDifficulty] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [showPopup, setShowPopup] =
    useState(false);

  const [popupMessage, setPopupMessage] =
    useState("");

  const handleDelete = (id: number) => {

    if (questions.length === 1) {
      return;
    }

    setQuestions(
      questions.filter(
        (question) =>
          question.id !== id
      )
    );

  };

  const showValidationPopup = (
    message: string
  ) => {

    setPopupMessage(message);

    setShowPopup(true);

    setTimeout(() => {

      setShowPopup(false);

    }, 3000);

  };

  const validateForm = () => {

    if (!subject.trim()) {
      showValidationPopup("Subject is required");
      return false;
    }

    if (!className.trim()) {
      showValidationPopup("Class is required");
      return false;
    }

    if (!topic.trim()) {
      showValidationPopup("Topic is required");
      return false;
    }

    if (!difficulty.trim()) {
      showValidationPopup("Please select difficulty");
      return false;
    }

    if (!selectedFile) {
      showValidationPopup("PDF upload is required");
      return false;
    }

    return true;

  };

  const handleGenerateAssignment =
    async () => {

      const isValid =
        validateForm();

      if (!isValid) return;

      try {

        setLoading(true);

        const formData =
          new FormData();

        formData.append(
          "subject",
          subject
        );

        formData.append(
          "className",
          className
        );

        formData.append(
          "topic",
          topic
        );

        formData.append(
          "difficulty",
          difficulty
        );

        if (selectedFile) {

          formData.append(
            "file",
            selectedFile
          );

        }

        const response =
          await fetch(
            "http://127.0.0.1:8000/api/assignments/create",
            {
              method: "POST",
              body: formData,
            }
          );

        const data =
          await response.json();

        console.log(data);

        setLoading(false);

        setPopupMessage(
          "Assignment generated successfully!"
        );

        setShowPopup(true);

        setTimeout(() => {

          window.location.href =
            "/assignments";

        }, 1500);

      } catch (error) {

        console.log(error);

        setLoading(false);

        showValidationPopup(
          "Something went wrong"
        );

      }

    };

  return (
    <div
      className="
        relative mx-auto w-full max-w-6xl
        rounded-[32px]
        border border-zinc-200
        bg-white
        p-4
        shadow-sm

        sm:p-6
        md:p-8
        lg:p-10
      "
    >

      {/* ================= POPUP ================= */}

      {showPopup && (

        <div
          className={`
            fixed left-1/2 top-5 z-50
            flex w-[92%] max-w-md
            -translate-x-1/2
            items-start gap-3
            rounded-2xl border
            px-4 py-4
            text-white
            shadow-2xl
            backdrop-blur-md
            transition-all duration-300

            ${
              popupMessage.includes("successfully")
                ? "border-emerald-600 bg-emerald-500"
                : "border-red-600 bg-red-500"
            }
          `}
        >

          <div className="mt-0.5">

            {popupMessage.includes(
              "successfully"
            ) ? (

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>

            ) : (

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>

            )}

          </div>

          <div>

            <p className="text-sm font-semibold">

              {popupMessage.includes(
                "successfully"
              )
                ? "Success"
                : "Validation Error"}

            </p>

            <p className="mt-1 text-sm text-white/90">
              {popupMessage}
            </p>

          </div>

        </div>

      )}

      {/* ================= HEADER ================= */}

      <div className="mb-8 md:mb-10">

     

        <h1
          className="
            mt-4
            text-3xl
            font-bold
            tracking-tight
            text-black

            sm:text-4xl
          "
        >
          Create Assignment
        </h1>

        <p className="mt-3 text-sm text-zinc-500 sm:text-base">
          Generate smart AI powered assignments in seconds
        </p>

      </div>

      {/* ================= PROGRESS ================= */}

      <ProgressBar />

      {/* ================= FORM ================= */}

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        {/* SUBJECT */}
        <div>

          <label className="mb-2 block text-sm font-semibold text-zinc-700">
            Subject *
          </label>

          <input
            type="text"
            value={subject}
            onChange={(e) =>
              setSubject(
                e.target.value
              )
            }
            placeholder="Enter subject"
            className="
              h-14 w-full rounded-2xl
              border border-zinc-300
              bg-zinc-50
              px-4
              text-sm
              outline-none
              transition-all

              focus:border-black
              focus:bg-white
              focus:ring-4
              focus:ring-black/5
            "
          />

        </div>

        {/* CLASS */}
        <div>

          <label className="mb-2 block text-sm font-semibold text-zinc-700">
            Class *
          </label>

          <input
            type="text"
            value={className}
            onChange={(e) =>
              setClassName(
                e.target.value
              )
            }
            placeholder="Enter class"
            className="
              h-14 w-full rounded-2xl
              border border-zinc-300
              bg-zinc-50
              px-4
              text-sm
              outline-none
              transition-all

              focus:border-black
              focus:bg-white
              focus:ring-4
              focus:ring-black/5
            "
          />

        </div>

        {/* TOPIC */}
        <div>

          <label className="mb-2 block text-sm font-semibold text-zinc-700">
            Topic *
          </label>

          <input
            type="text"
            value={topic}
            onChange={(e) =>
              setTopic(
                e.target.value
              )
            }
            placeholder="Enter topic"
            className="
              h-14 w-full rounded-2xl
              border border-zinc-300
              bg-zinc-50
              px-4
              text-sm
              outline-none
              transition-all

              focus:border-black
              focus:bg-white
              focus:ring-4
              focus:ring-black/5
            "
          />

        </div>

        {/* DIFFICULTY */}
        <div>

          <label className="mb-2 block text-sm font-semibold text-zinc-700">
            Difficulty *
          </label>

          <select
            value={difficulty}
            onChange={(e) =>
              setDifficulty(
                e.target.value
              )
            }
            className="
              h-14 w-full rounded-2xl
              border border-zinc-300
              bg-zinc-50
              px-4
              text-sm
              outline-none
              transition-all

              focus:border-black
              focus:bg-white
              focus:ring-4
              focus:ring-black/5
            "
          >

            <option value="">
              Select difficulty
            </option>

            <option value="Easy">
              Easy
            </option>

            <option value="Medium">
              Medium
            </option>

            <option value="Hard">
              Hard
            </option>

          </select>

        </div>

      </div>

      {/* ================= UPLOAD ================= */}

      <div className="mt-10">

        <UploadBox
          setSelectedFile={
            setSelectedFile
          }
        />

      </div>

      {/* ================= DATE ================= */}

      <div className="mt-10">

        <p className="mb-4 text-lg font-semibold text-black">
          Due Date
        </p>

        <DatePicker />

      </div>

      {/* ================= QUESTIONS ================= */}

      <div className="mt-10">

        <div
          className="
            mb-5
            flex flex-col gap-4

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p className="text-lg font-semibold text-black">
            Question Configuration
          </p>

          <button
            onClick={() =>
              setQuestions([
                ...questions,
                {
                  id: Date.now(),
                },
              ])
            }
            className="
              inline-flex items-center justify-center gap-2
              rounded-2xl
              bg-black
              px-5 py-3
              text-sm font-medium text-white
              shadow-lg
              transition-all duration-300
              hover:scale-[1.02]
              active:scale-95
            "
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            Add Question Type

          </button>

        </div>

        <div className="space-y-4">

          {questions.map(
            (question) => (

              <QuestionRow
                key={question.id}
                onDelete={() =>
                  handleDelete(
                    question.id
                  )
                }
              />

            )
          )}

        </div>

      </div>

      {/* ================= ADDITIONAL INFO ================= */}

      <div className="mt-10">

        <p className="mb-4 text-lg font-semibold text-black">
          Additional Instructions
        </p>

        <AdditionalInfo />

      </div>

      {/* ================= FOOTER ================= */}

      <div
        className="
          mt-10
          flex flex-col gap-4

          sm:flex-row
          sm:items-center
          sm:justify-end
        "
      >

        <button
          onClick={
            handleGenerateAssignment
          }
          disabled={loading}
          className="
            flex h-14 w-full items-center justify-center gap-2
            rounded-2xl
            bg-black
            px-8
            text-sm font-semibold text-white
            shadow-2xl
            transition-all duration-300

            hover:scale-[1.01]
            hover:bg-zinc-800

            active:scale-95

            disabled:cursor-not-allowed
            disabled:opacity-50

            sm:w-auto
          "
        >

          {loading ? (

            <>
              
              <div
                className="
                  h-5 w-5 animate-spin
                  rounded-full
                  border-2 border-white/30
                  border-t-white
                "
              />

              Generating...

            </>

          ) : (

            <>
              
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>

              Generate Assignment

            </>

          )}

        </button>

      </div>

    </div>
  );
}
import PDFButton from "./PDFButton";

export default function QuestionPaper() {
  return (
    <div className="mx-auto max-w-5xl">

      {/* AI HEADER */}

      <div className="mb-6 rounded-[28px] bg-zinc-900 p-6 text-white">

        <p className="text-lg font-medium leading-relaxed">
          Certainly, Lakshya! Here is your AI-generated Science
          Question Paper based on the NCERT chapters.
        </p>

        <div className="mt-5">
          <PDFButton />
        </div>

      </div>

      {/* PAPER */}

      <div className="rounded-[32px] bg-white px-16 py-14 shadow-sm">

        {/* SCHOOL */}

        <div className="text-center">

          <h1 className="text-4xl font-bold">
            Delhi Public School, Sector-4, Bokaro
          </h1>

          <p className="mt-3 text-lg">
            Subject: Science
          </p>

          <p className="mt-1 text-lg">
            Class: 8th
          </p>

        </div>

        {/* META */}

        <div className="mt-12 flex items-center justify-between text-sm">

          <p>
            Time Allowed: 3 Hours
          </p>

          <p>
            Maximum Marks: 100
          </p>

        </div>

        {/* INSTRUCTIONS */}

        <p className="mt-10 text-sm">
          All questions are compulsory unless stated otherwise.
        </p>

        {/* STUDENT INFO */}

        <div className="mt-10 space-y-3 text-sm">

          <div className="flex items-center gap-3">
            <p>Name:</p>
            <div className="h-px flex-1 bg-black" />
          </div>

          <div className="flex items-center gap-3">
            <p>Roll Number:</p>
            <div className="h-px flex-1 bg-black" />
          </div>

          <div className="flex items-center gap-3">
            <p>Class: 8 Section:</p>
            <div className="h-px flex-1 bg-black" />
          </div>

        </div>

        {/* SECTION A */}

        <div className="mt-16 text-center">

          <h2 className="text-2xl font-semibold">
            Section A
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Attempt any 10 questions. (2 Marks each)
          </p>

        </div>

        <div className="mt-10 space-y-5 text-[15px] leading-relaxed">

          <p>
            1. Define electroplating with an example. [2 Marks]
          </p>

          <p>
            2. What is electrolysis? [2 Marks]
          </p>

          <p>
            3. Why does salt water conduct electricity? [2 Marks]
          </p>

          <p>
            4. Explain the chemical effect of electric current. [2 Marks]
          </p>

          <p>
            5. What are electrodes? [2 Marks]
          </p>

          <p>
            6. State one application of electroplating. [2 Marks]
          </p>

          <p>
            7. What happens during electrolysis of water? [2 Marks]
          </p>

          <p>
            8. Define conductor and insulator. [2 Marks]
          </p>

          <p>
            9. Why is copper used in wires? [2 Marks]
          </p>

          <p>
            10. What is an electrolyte? [2 Marks]
          </p>

          <p>
            11. Explain electro-refining briefly. [2 Marks]
          </p>

          <p>
            12. What are ions? [2 Marks]
          </p>

        </div>

        {/* SECTION B */}

        <div className="mt-20 text-center">

          <h2 className="text-2xl font-semibold">
            Section B
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Attempt any 6 questions. (5 Marks each)
          </p>

        </div>

        <div className="mt-10 space-y-6 text-[15px] leading-relaxed">

          <p>
            13. Explain the process of electroplating in detail. [5 Marks]
          </p>

          <p>
            14. Describe the electrolysis of copper sulphate solution. [5 Marks]
          </p>

          <p>
            15. Explain chemical effects of electric current with examples. [5 Marks]
          </p>

          <p>
            16. Differentiate between conductor and electrolyte. [5 Marks]
          </p>

          <p>
            17. Explain electrolysis of water with chemical equations. [5 Marks]
          </p>

          <p>
            18. Write applications of electroplating in daily life. [5 Marks]
          </p>

          <p>
            19. Explain how batteries produce electricity. [5 Marks]
          </p>

          <p>
            20. Describe the working of an electrolytic cell. [5 Marks]
          </p>

        </div>

        {/* SECTION C */}

        <div className="mt-20 text-center">

          <h2 className="text-2xl font-semibold">
            Section C
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Attempt any 5 questions. (10 Marks each)
          </p>

        </div>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed">

          <p>
            21. Explain the process of electrolysis of brine and preparation of sodium hydroxide with reactions. [10 Marks]
          </p>

          <p>
            22. Describe electroplating process and explain its industrial applications. [10 Marks]
          </p>

          <p>
            23. Explain the chemical effects of electric current with suitable experiments. [10 Marks]
          </p>

          <p>
            24. Explain electrolysis of water with neat diagram and reactions involved. [10 Marks]
          </p>

          <p>
            25. Compare electrolysis and electroplating with examples and applications. [10 Marks]
          </p>

          <p>
            26. Explain working principle of an electrolytic cell with labelled diagram. [10 Marks]
          </p>

          <p>
            27. Describe industrial uses of electrochemistry in modern technology. [10 Marks]
          </p>

        </div>

        {/* END */}

        <div className="mt-16">

          <p className="font-semibold">
            End of Question Paper
          </p>

        </div>

      </div>

    </div>
  );
}
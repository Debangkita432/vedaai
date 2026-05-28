import OpenAI from "openai";

const client = new OpenAI({

  baseURL:
    "https://openrouter.ai/api/v1",

  apiKey:
    process.env.OPENROUTER_API_KEY,

  defaultHeaders: {
    "HTTP-Referer":
      "http://localhost:3000",

    "X-Title":
      "VedaAI",
  },

});

export const generateQuestionsWithAI =
  async (
    subject: string,
    topic: string,
    difficulty: string
  ) => {

    const completion =
      await client.chat.completions.create({

        model:
          "openai/gpt-3.5-turbo",

        messages: [
          {
            role: "user",

            content: `
Generate 5 ${difficulty} level questions for:

Subject: ${subject}
Topic: ${topic}

Rules:
- Return ONLY a JSON array
- No markdown
- No explanation

Example:
[
  "Question 1",
  "Question 2"
]
`,
          },
        ],

      });

    return (
      completion.choices[0]
        .message.content || "[]"
    );

  };
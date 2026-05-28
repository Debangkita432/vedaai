import PDFDocument from "pdfkit";

import fs from "fs";

export const generateAssignmentPDF =
  async (
    assignment: any
  ) => {

    return new Promise<string>(
      (resolve, reject) => {

        const filePath =
          `uploads/${assignment._id}.pdf`;

        const doc =
          new PDFDocument();

        const stream =
          fs.createWriteStream(
            filePath
          );

        doc.pipe(stream);

        doc
          .fontSize(28)
          .text(
            "AI Generated Assignment",
            {
              align: "center",
            }
          );

        doc.moveDown();

        doc
          .fontSize(18)
          .text(
            `Subject: ${assignment.subject}`
          );

        doc.text(
          `Topic: ${assignment.topic}`
        );

        doc.text(
          `Difficulty: ${assignment.difficulty}`
        );

        doc.moveDown();

        doc
          .fontSize(20)
          .text("Questions");

        doc.moveDown();

        assignment.generatedQuestions.forEach(
          (
            question: string,
            index: number
          ) => {

            doc
              .fontSize(14)
              .text(
                `${index + 1}. ${question}`
              );

            doc.moveDown();

          }
        );

        doc.end();

        stream.on(
          "finish",

          () => {

            resolve(filePath);

          }
        );

        stream.on(
          "error",

          (err) => {

            reject(err);

          }
        );

      }
    );

  };
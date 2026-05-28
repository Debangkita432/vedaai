import fs from "fs";

const pdfParse =
  require("pdf-parse");

export const extractTextFromPDF =
  async (
    filePath: string
  ) => {

    const dataBuffer =
      fs.readFileSync(filePath);

    const pdfData =
      await pdfParse(
        dataBuffer
      );

    return pdfData.text;

  };
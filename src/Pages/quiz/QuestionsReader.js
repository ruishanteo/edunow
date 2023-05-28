import raw from "./QuestionBank.txt";

const formatData = (data) => {
  const exportedData = [];
  data.split("\n\n").map((entry) => {
    const question = { Question: "", Options: "", Answer: "" };
    entry.split("\n").forEach((keyValue) => {
      const split = keyValue.split(": ");
      const key = split[0];
      const value = split[1];
      question[key] = value;
    });
    question.Options = question.Options.split(",");
    exportedData.push(question);
  });
  return exportedData;
};

export const loadQuestions = async () => {
  return await fetch(raw)
    .then((r) => r.text())
    .then((text) => {
      return formatData(text);
    });
};

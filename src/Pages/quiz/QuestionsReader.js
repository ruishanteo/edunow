import raw from "./QuestionBank.txt";

const formatData = (data) => {
  return data.split("\n\n").map((entry) => {
    const question = { Question: "", Options: "", Answer: "" };

    entry.split("\n").forEach((keyValue) => {
      const split = keyValue.split(": ");
      const key = split[0];
      const value = split[1];
      question[key] = value;
    });
    question.Answer = parseInt(question.Answer);
    question.Options = question.Options.split(",");
    question.Options = question.Options.map((option, index) => ({
      option: option,
      correct: index === question.Answer - 1,
    }));

    return question;
  });
};

export const loadQuestions = async () => {
  return await fetch(raw)
    .then((r) => r.text())
    .then((text) => {
      return formatData(text);
    });
};

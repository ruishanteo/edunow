import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import store from "stores/store";
import { fetchQuestions } from "stores/questionStore";

import { Box, Button, Typography } from "@mui/material";

const QuizPage = () => {
  const questions = useSelector((state) => state.questions.questions);
  const questionNumber = useSelector(
    (state) => state.questions.currentQuestionNumber
  );
  const question = useSelector((state) => state.questions.currentQuestion);
  const dispatch = useDispatch();

  const goNextQuestion = () => {
    dispatch(goNextQuestion);
  };

  const onUpdate = () => {
    store.dispatch(fetchQuestions);
  };

  useEffect(() => {
    onUpdate();
  }, []);

  console.log(question, questionNumber);

  if (!question) {
    return <></>;
  }

  return (
    <Box align="center">
      <Box sx={{ height: "10vh" }} />
      <Typography
        mb={5}
        variant="h2"
        sx={{
          color: "white",
          fontFamily: "Roboto",
          fontWeight: 800,
          fontSize: 50,
        }}
      >
        {question.Question}
      </Typography>

      {question.Options.map((option) => {
        return (
          <Box
            sx={{
              backgroundColor: "rgba(255,255,255,0.7)",
              mt: 2,
              display: "flex",
              width: "40vw",
              height: "8vh",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              variant="body1"
            >
              {option}
            </Typography>
          </Box>
        );
      })}

      {/* {questions.map((question) => {
        console.log(question);
        return (
          <Box key={question.id}>
            <Typography>{question.Question}</Typography>
          </Box>
        );
      })} */}
    </Box>
  );
};

export default QuizPage;

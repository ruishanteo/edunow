import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import store from "stores/store";
import { fetchQuestions, selectOption } from "stores/questionStore";

import { Box, Card, CardActionArea, Typography } from "@mui/material";

import { OptionButton } from "components/OptionButton";

const QuizPage = () => {
  const dispatch = useDispatch();
  const currQuestion = useSelector((state) => state.questions.currentQuestion);
  const currQuestionNumber = useSelector(
    (state) => state.questions.currentQuestionNumber
  );
  const totalQuestionNumber = useSelector(
    (state) => state.questions.totalQuestionNumber
  );
  const score = useSelector((state) => state.questions.score);

  const handleSelectOption = (optionIndex) =>
    dispatch(selectOption(optionIndex));
  const onUpdate = () => {
    store.dispatch(fetchQuestions);
  };

  useEffect(() => {
    onUpdate();
  }, []);

  if (!currQuestion) {
    return <Typography>Loading...</Typography>;
  }

  if (currQuestionNumber === totalQuestionNumber) {
    return (
      <Box align="center" justifyContent="center">
        <Box height="20vh" />
        <Typography sx={{ color: "white", fontSize: 30 }}>
          You have completed the quiz!
        </Typography>
        <Box height="10vh" />
        <Typography sx={{ color: "white", fontSize: 30 }}>
          You have scored {score}/{totalQuestionNumber}.
        </Typography>
      </Box>
    );
  }

  return (
    <Box align="right">
      <Typography
        sx={{ color: "white", fontSize: 18, paddingRight: 2, padding: 2 }}
      >
        {totalQuestionNumber - currQuestionNumber} questions left
      </Typography>
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
          {currQuestionNumber}. {currQuestion.Question}
        </Typography>

        {currQuestion.Options.map((optionData, index) => {
          return (
            <Card
              key={optionData.option}
              sx={{
                backgroundColor: "rgba(255,255,255,0.7)",
                mt: 2,
                display: "flex",
                width: "40vw",
                height: "8vh",
                justifyContent: "center",
              }}
            >
              <OptionButton
                onClickDoWhat={() => handleSelectOption(index)}
                correctOption={optionData.correct}
              >
                <Typography variant="body1">{optionData.option}</Typography>
              </OptionButton>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default QuizPage;

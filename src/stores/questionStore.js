import { createSlice } from "@reduxjs/toolkit";

import { db } from "hooks/Firebase";
import { addDoc, getDocs, collection } from "firebase/firestore";

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    currentQuestionNumber: 0,
    currentQuestion: undefined,
    totalQuestionNumber: 0,
    score: 0,
  },
  reducers: {
    goNext: (state) => {
      state.currentQuestionNumber += 1;
      state.currentQuestion = state.questions[state.currentQuestionNumber - 1];
    },
    goToQuestion: (state, action) => {
      state.currentQuestionNumber = action.payload;
      state.currentQuestion = state.questions[state.currentQuestionNumber - 1];
    },
    saveQuestionsToStore: (state, action) => {
      state.questions = action.payload;
      state.currentQuestionNumber = 1;
      state.currentQuestion = state.questions[state.currentQuestionNumber - 1];
      state.totalQuestionNumber = state.questions.length;
    },
    incrementScore: (state) => {
      state.score += 1;
    },
  },
});

export async function fetchQuestions(dispatch, getState) {
  const response = await getDocs(collection(db, "questions"));
  const questions = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  dispatch(questionsSlice.actions.saveQuestionsToStore(questions));
}

export function selectOption(optionIndex) {
  return async function selectOption(dispatch, getState) {
    const currQuestion = getState().questions.currentQuestion;
    if (currQuestion) {
      if (currQuestion.Options[optionIndex].correct) {
        dispatch(questionsSlice.actions.incrementScore());
      }
      dispatch(questionsSlice.actions.goNext());
    }
  };
}

export function saveQuestions(questions) {
  return async (dispatch, getState) => {
    questions.forEach((question) => {
      addDoc(collection(db, "questions"), question);
    });
  };
}

export const { goNext, goToQuestion, saveQuestionsToStore } =
  questionsSlice.actions;
export const questionsReducer = questionsSlice.reducer;

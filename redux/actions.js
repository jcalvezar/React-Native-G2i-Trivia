import { ADD_QUESTION, CLEAR_STORE } from "./actionTypes";

export const addQuestion = (question, answer) => ({
  type: ADD_QUESTION,
  payload: {
    question,
    answer,
  },
});

export const clearStore = () => ({
  type: CLEAR_STORE,
  payload: {},
});

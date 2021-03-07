import { ADD_QUESTION, CLEAR_STORE } from "./actionTypes";

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_QUESTION: {
      const { question, answer } = action.payload;
      return [...state, { question, answer }];
    }
    case CLEAR_STORE: {
      return [];
    }
    default:
      return state;
  }
}

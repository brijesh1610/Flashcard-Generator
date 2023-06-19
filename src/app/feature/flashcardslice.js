/* in this we are creating flashcard slice where at initial state we are checking flashcard available or not if there is no 
flashcard then we are puting as an empty array*/

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flashcards: localStorage.getItem("flashcards")
    ? JSON.parse(localStorage.getItem("flashcards"))
    : [],
};
/*here we are creating slice as flashcardslice it will accepts an initial state, an object of   reducer functions,
 and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state. */
export const flashcardSlice = createSlice({
  name: "flashcard",
  initialState,
  reducers: {
    setFlashCard(state, action) {
      state.flashcards.push({
        card: action.payload,
      });

      localStorage.setItem("flashcards", JSON.stringify(state.flashcards));
    },
  },
});

export const { setFlashCard } = flashcardSlice.actions;

export default flashcardSlice.reducer;

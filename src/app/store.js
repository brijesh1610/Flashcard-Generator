/* here we are creating store to get access of store*/

import flashcardReducer from "./feature/flashcardslice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    flashcard: flashcardReducer,
  },
});

export default store;

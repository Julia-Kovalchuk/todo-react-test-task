import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todosReducer from "./feautures/todosSlice";

const rootReducer = combineReducers({
  todos: todosReducer,
});

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };

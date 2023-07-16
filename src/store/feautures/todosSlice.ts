import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../../types/types";
import { v4 as uuidv4 } from "uuid";

interface ITodosState {
  todos: ITodo[];
  changedTodoId: string | null;
}

const initialState: ITodosState = {
  todos: [],
  changedTodoId: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, { payload }: PayloadAction<string>) {
      const todo = {
        id: uuidv4(),
        title: payload,
        state: "active",
      } as ITodo;
      state.todos.push(todo);
    },
    deleteTodo(state, { payload }: PayloadAction<string>) {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
    changeTodosState(state, { payload }: PayloadAction<string>) {
      state.todos = state.todos.map((todo) =>
        todo.id === payload
          ? todo.state === "active"
            ? { ...todo, state: "completed" }
            : { ...todo, state: "active" }
          : todo
      );
    },
    changeTodo(
      state,
      { payload }: PayloadAction<{ id: string; title: string }>
    ) {
      state.todos = state.todos.map((todo) =>
        todo.id === payload.id
          ? { id: todo.id, title: payload.title, state: todo.state }
          : todo
      );
    },
  },
});

export default todosSlice.reducer;

export const { addTodo, deleteTodo, changeTodosState, changeTodo } =
  todosSlice.actions;

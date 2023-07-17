import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../../types/types";
import { v4 as uuidv4 } from "uuid";
import { addToLocalStorage } from "../../utils/addTOLocalStorage";

interface ITodosState {
  todos: ITodo[];
  changedTodoId: string | null;
}

const todos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos") as string)
  : [];

const initialState: ITodosState = {
  todos: todos,
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
      addToLocalStorage("todos", state.todos);
    },
    deleteTodo(state, { payload }: PayloadAction<string>) {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    changeTodosState(state, { payload }: PayloadAction<string>) {
      state.todos = state.todos.map((todo) =>
        todo.id === payload
          ? todo.state === "active"
            ? { ...todo, state: "completed" }
            : { ...todo, state: "active" }
          : todo
      );
      addToLocalStorage("todos", state.todos);
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
      addToLocalStorage("todos", state.todos);
    },
  },
});

export default todosSlice.reducer;

export const { addTodo, deleteTodo, changeTodosState, changeTodo } =
  todosSlice.actions;

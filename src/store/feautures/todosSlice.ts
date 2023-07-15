import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../../types/types";
import { v4 as uuidv4 } from "uuid";

interface ITodosState {
  todos: ITodo[];
}

const initialState: ITodosState = {
  todos: [
    { id: "1", title: "Clear", state: "active" },
    { id: "2", title: "Clear", state: "active" },
  ],
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
    //   removeFavorites(state, { payload }: PayloadAction<string>) {
    //     state.favorites = state.favorites.filter((movie) => {
    //       return movie.id !== payload;
    //     });
    //   },
    //   sortFavorites(state, { payload }: PayloadAction<string>) {
    //     state.sortedFavorites = state.favorites.filter((movie) => {
    //       return movie.title
    //         .toLocaleLowerCase()
    //         .includes(payload.toLocaleLowerCase());
    //     });
    //   },
    //   resetSortedFavorites(state) {
    //     state.sortedFavorites = [];
    //   },
    //   updateSearchword(state, { payload }: PayloadAction<string>) {
    //     state.searchWord = payload;
    //   },
  },
});

export default todosSlice.reducer;

export const { addTodo } = todosSlice.actions;

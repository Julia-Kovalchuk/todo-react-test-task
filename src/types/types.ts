export type TodoStateType = "active" | "completed";

export interface ITodo {
  id: string;
  title: string;
  state: TodoStateType;
}

export type SortTodosType = "all" | "completed" | "active";

export type FormTypes = "add" | "change";

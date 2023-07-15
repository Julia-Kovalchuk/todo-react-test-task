export type TodoStateType = "active" | "completed";

export interface ITodo {
  id: string;
  title: string;
  state: TodoStateType;
}

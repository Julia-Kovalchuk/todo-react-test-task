import React from "react";
import { ITodo } from "../../types/types";
import { StyledListItem, Title } from "./styles";
import { Button, ButtonStyles } from "../Button/Button";
import { CircleIcon } from "../../assets/icons/CircleIcon";
import { EditIcon } from "../../assets/icons/EditIcon";
import { DeleteIcon } from "../../assets/icons/DeleteIcon";
import { useAppDispatch } from "../../store/hooks/hooks";
import { changeTodosState, deleteTodo } from "../../store/feautures/todosSlice";
import { CheckCircle } from "../../assets/icons/CheckCircle";

interface IProps {
  todo: ITodo;
  changeModalView: (arg: boolean) => void;
}

export const ListItem = ({ todo, changeModalView }: IProps) => {
  const { title, id, state } = todo;
  const dispatch = useAppDispatch();

  const isCompleted = state === "completed";

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  const handleCheckTodo = () => {
    dispatch(changeTodosState(id));
  };

  const handleChangeTodo = () => {
    localStorage.setItem("changedTodo", JSON.stringify(todo));
    changeModalView(true);
  };

  return (
    <StyledListItem>
      {isCompleted ? (
        <Button
          type="button"
          onClick={handleCheckTodo}
          typeStyle={ButtonStyles.Secondary}
          title={<CheckCircle />}
          id={id}
        ></Button>
      ) : (
        <Button
          type="button"
          onClick={handleCheckTodo}
          typeStyle={ButtonStyles.Secondary}
          title={<CircleIcon />}
          id={id}
        ></Button>
      )}

      <Title $isCompleted={isCompleted}>{title}</Title>

      <Button
        type="button"
        onClick={handleChangeTodo}
        typeStyle={ButtonStyles.Secondary}
        title={<EditIcon />}
        id={id}
      ></Button>
      <Button
        type="button"
        onClick={handleDeleteTodo}
        typeStyle={ButtonStyles.Secondary}
        title={<DeleteIcon />}
        id={id}
      ></Button>
    </StyledListItem>
  );
};

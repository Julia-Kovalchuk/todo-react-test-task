import React from "react";
import { ListItem } from "../ListItem/ListItem";
import { Message, StyledList } from "./styles";
import { ITodo } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getTodos } from "../../store/selectors/todosSelectors";

export const List = () => {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector(getTodos);

  return (
    <StyledList>
      {todos.length === 0 ? (
        <Message>your to-do list is still empty</Message>
      ) : (
        todos.map((todo) => {
          return <ListItem todo={todo} key={todo.id} />;
        })
      )}
    </StyledList>
  );
};

import React, { useEffect, useState } from "react";
import { ButtonContainer, Container, Content } from "./styles";
import { Button, ButtonStyles } from "../Button/Button";
import { List } from "../List/List";
import { useAppSelector } from "../../store/hooks/hooks";
import { ITodo, SortTodosType } from "../../types/types";
import { getTodos } from "../../store/selectors/todosSelectors";
import { Form } from "../Form/Form";

export const Todo = () => {
  const { todos } = useAppSelector(getTodos);
  const [todosView, setTodosView] = useState<SortTodosType>("all");
  const [renderedTodos, setRenderedTodos] = useState<ITodo[]>(todos);

  useEffect(() => {
    todosView === "active"
      ? setRenderedTodos(todos.filter((todo) => todo.state === "active"))
      : todosView === "completed"
      ? setRenderedTodos(todos.filter((todo) => todo.state === "completed"))
      : setRenderedTodos(todos);
  }, [todosView, todos]);

  return (
    <Container>
      <Form type="add" />
      <Content>
        <List todos={renderedTodos} />
        <ButtonContainer>
          <Button
            title="All"
            type="button"
            onClick={() => {
              setTodosView("all");
            }}
            typeStyle={ButtonStyles.Secondary}
          />
          <Button
            title="Active"
            type="button"
            onClick={() => {
              setTodosView("active");
            }}
            typeStyle={ButtonStyles.Secondary}
          />
          <Button
            title="Completed"
            type="button"
            onClick={() => {
              setTodosView("completed");
            }}
            typeStyle={ButtonStyles.Secondary}
          />
        </ButtonContainer>
      </Content>
    </Container>
  );
};

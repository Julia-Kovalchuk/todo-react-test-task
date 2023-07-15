import React from "react";
import { ButtonContainer, Container, Content, InputBox } from "./styles";
import { Input } from "../Input/Input";
import { useInput } from "../../hooks/useInput";
import { Button, ButtonStyles } from "../Button/Button";
import { List } from "../List/List";
import { useAppDispatch } from "../../store/hooks/hooks";
import { addTodo } from "../../store/feautures/todosSlice";

export const Todo = () => {
  const { inputValue, onChange, setInputValue } = useInput();
  const dispatch = useAppDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(inputValue));
    setInputValue("");
  };

  return (
    <Container>
      <InputBox>
        <Input
          placeholder="Create a new todo..."
          value={inputValue}
          onChange={onChange}
        />
        <Button
          title="Add"
          type="button"
          onClick={handleAddTodo}
          typeStyle={ButtonStyles.Primary}
        />
      </InputBox>
      <Content>
        <List />
        <ButtonContainer>
          <Button
            title="ALl"
            type="button"
            onClick={() => {}}
            typeStyle={ButtonStyles.Secondary}
          />
          <Button
            title="Active"
            type="button"
            onClick={() => {}}
            typeStyle={ButtonStyles.Secondary}
          />
          <Button
            title="Completed"
            type="button"
            onClick={() => {}}
            typeStyle={ButtonStyles.Secondary}
          />
        </ButtonContainer>
      </Content>
    </Container>
  );
};

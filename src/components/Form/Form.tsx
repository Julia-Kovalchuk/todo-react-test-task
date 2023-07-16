import React, { useEffect, useState } from "react";
import { InputBox, Error } from "./styles";
import { Input } from "../Input/Input";
import { Button, ButtonStyles } from "../Button/Button";
import { useInput } from "../../hooks/useInput";
import { useAppDispatch } from "../../store/hooks/hooks";
import { addTodo, changeTodo } from "../../store/feautures/todosSlice";
import { FormTypes, ITodo } from "../../types/types";

interface IProps {
  type: FormTypes;
  changeModalView?: (arg: boolean) => void;
}

export const Form = ({ type, changeModalView }: IProps) => {
  const { inputValue, onChange, setInputValue } = useInput();
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const changedTodo: ITodo = JSON.parse(
    localStorage.getItem("changedTodo") as string
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (type === "change") setInputValue(changedTodo.title);
  }, []);

  const handleAddTodo = () => {
    if (inputValue === "") {
      setIsInvalid(true);
      setTimeout(() => {
        setIsInvalid(false);
      }, 2000);
      return;
    }
    dispatch(addTodo(inputValue));
    setInputValue("");
  };

  const handleChangeTodo = () => {
    if (inputValue === "") {
      setIsInvalid(true);
      setTimeout(() => {
        setIsInvalid(false);
      }, 2000);
      return;
    }

    dispatch(changeTodo({ id: changedTodo.id, title: inputValue }));
    setInputValue("");
    localStorage.removeItem("changedTodo");
    changeModalView && changeModalView(false);
  };

  const onEnterDown = (e: React.KeyboardEvent) => {
    console.log("jdjjdjd");
    console.log(e.key);
    if (e.key === "Enter") {
      type === "add" ? handleAddTodo() : handleChangeTodo();
    }
  };

  return (
    <InputBox onKeyDown={(e) => onEnterDown(e)}>
      <Input
        placeholder="Create a new todo..."
        value={inputValue}
        onChange={onChange}
      />
      <Error $isInvalid={isInvalid}>Todo can't be empty</Error>
      <Button
        title={type === "add" ? "Add" : "Edit"}
        type="submit"
        onClick={type === "add" ? handleAddTodo : handleChangeTodo}
        typeStyle={ButtonStyles.Primary}
      />
    </InputBox>
  );
};

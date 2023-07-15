import React from "react";
import { ITodo } from "../../types/types";
import { StyledListItem, Title } from "./styles";
import { Button, ButtonStyles } from "../Button/Button";
import { CircleIcon } from "../../assets/icons/CircleIcon";
import { EditIcon } from "../../assets/icons/EditIcon";
import { DeleteIcon } from "../../assets/icons/DeleteIcon";

interface IProps {
  todo: ITodo;
}

export const ListItem = ({ todo }: IProps) => {
  const { title, state } = todo;

  return (
    <StyledListItem>
      <Button
        type="button"
        onClick={() => {}}
        typeStyle={ButtonStyles.Secondary}
        title={<CircleIcon />}
      ></Button>

      <Title>{title}</Title>

      <Button
        type="button"
        onClick={() => {}}
        typeStyle={ButtonStyles.Secondary}
        title={<EditIcon />}
      ></Button>
      <Button
        type="button"
        onClick={() => {}}
        typeStyle={ButtonStyles.Secondary}
        title={<DeleteIcon />}
      ></Button>
    </StyledListItem>
  );
};

import React from "react";
import { ListItem } from "../ListItem/ListItem";
import { Message, StyledList } from "./styles";
import { ITodo } from "../../types/types";

export const List = () => {
  const list: ITodo[] = [
    { id: "1", title: "Clear", state: "active" },
    { id: "2", title: "Clear", state: "active" },
  ];

  return (
    <StyledList>
      {list.length === 0 ? (
        <Message>your to-do list is still empty</Message>
      ) : (
        list.map((todo) => {
          return <ListItem todo={todo} key={todo.id} />;
        })
      )}
    </StyledList>
  );
};

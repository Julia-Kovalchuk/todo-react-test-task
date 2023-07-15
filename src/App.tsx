import React from "react";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Todo } from "./components/Todo/Todo";
import { StyledApp } from "./ui/base";

export const App = () => {
  return (
    <StyledApp>
      <Wrapper />
      <Todo />
    </StyledApp>
  );
};

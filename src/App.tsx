import React from "react";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Todo } from "./components/Todo/Todo";
import { StyledApp } from "./ui/base";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const App = () => {
  return (
    <Provider store={store}>
      <StyledApp>
        <Wrapper />
        <Todo />
      </StyledApp>
    </Provider>
  );
};

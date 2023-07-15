import React from "react";
import { StyledWrapper, Title } from "./styles";

export const Wrapper = () => {
  const title = "TODO";

  return (
    <StyledWrapper>
      <Title>
        {title.split("").map((letter) => (
          <div>{letter}</div>
        ))}
      </Title>
    </StyledWrapper>
  );
};

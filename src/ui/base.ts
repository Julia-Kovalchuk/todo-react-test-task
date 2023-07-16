import styled from "styled-components";
import { Media } from "./media";

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 50px;
  display: flex;
  justify-content: center;

  ${Media.SM} {
    padding: 15px;
  }
`;

export { StyledApp };

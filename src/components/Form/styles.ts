import styled from "styled-components";
import { Color } from "../../ui/colors";

interface IProps {
  $isInvalid: boolean;
}

const InputBox = styled.div`
  position: relative;
  display: flex;
  grid-gap: 20px;
  width: 100%;
`;

const Error = styled.p<IProps>`
  position: absolute;
  bottom: -20px;
  left: 20px;
  display: ${({ $isInvalid }) => ($isInvalid ? "block" : "none")};
  font-size: 12px;
  color: ${Color.White};
`;

export { InputBox, Error };

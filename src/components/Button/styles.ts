import styled from "styled-components";
import { ButtonStyles } from "./Button";
import { Color } from "../../ui/colors";

interface IProps {
  $typeStyle: ButtonStyles;
}

const StyledButton = styled.button<IProps>`
  transition: all 0.3s;
  background: #ffffff;
  padding: ${({ $typeStyle }) =>
    $typeStyle === ButtonStyles.Primary ? "15px" : "0px"};
  background: ${({ $typeStyle }) =>
    $typeStyle === ButtonStyles.Primary ? Color.White : "none"};
  color: ${({ $typeStyle }) =>
    $typeStyle === ButtonStyles.Primary ? Color.Black : Color.White};

  &:hover {
    transform: scale(1.1);
    stroke: ${Color.Pink};
    fill: ${Color.Pink};
  }

  &:active {
    transform: scale(0.9);
  }
`;

export { StyledButton };

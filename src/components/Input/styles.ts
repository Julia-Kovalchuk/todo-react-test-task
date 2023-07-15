import { styled } from "styled-components";
import { Color } from "../../ui/colors";

const StyledInput = styled.input`
  width: 100%;
  padding: 15px;
  background-color: ${Color.Grey};
  border: none;
  color: ${Color.White};
  font-size: 16px;
  caret-color: ${Color.White};
  transition: all 0.3s;

  &::placeholder {
    color: ${Color.GreyLight};
    font-size: 16px;
  }

  &:hover {
    border-bottom: 1px solid ${Color.GreyLight};
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid ${Color.White};
  }
`;

export { StyledInput };

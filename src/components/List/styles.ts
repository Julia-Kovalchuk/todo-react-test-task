import { styled } from "styled-components";
import { Color } from "../../ui/colors";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 500px;
  max-height: 500px;
  color: ${Color.White};
  overflow-y: auto;

  /* background: yellow; */
`;

const Message = styled.div`
  margin: auto;
`;

export { StyledList, Message };

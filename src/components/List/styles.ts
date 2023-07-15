import { styled } from "styled-components";
import { Color } from "../../ui/colors";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 50vh;
  color: ${Color.White};

  /* background: yellow; */
`;

const Message = styled.div`
  margin: auto;
`;

export { StyledList, Message };

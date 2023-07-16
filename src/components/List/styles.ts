import { styled } from "styled-components";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/media";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 50vh;
  min-height: 50vh;
  color: ${Color.White};
  overflow-y: auto;

  ${Media.SM} {
    max-height: 60vh;
    min-height: 60vh;
  }
`;

const Message = styled.div`
  margin: auto;
`;

export { StyledList, Message };

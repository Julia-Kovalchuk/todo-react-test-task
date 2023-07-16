import { styled } from "styled-components";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/media";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 500px;
  max-height: 500px;
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

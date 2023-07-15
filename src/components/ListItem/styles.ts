import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  grid-gap: 15px;
  padding: 15px 20px;
  border-bottom: 1px solid ${Color.Pink};
`;

const Title = styled.p`
  flex-grow: 2;
`;
export { StyledListItem, Title };

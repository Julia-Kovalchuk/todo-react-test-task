import styled from "styled-components";
import { Color } from "../../ui/colors";

interface IProps {
  $isCompleted: boolean;
}

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  grid-gap: 15px;
  padding: 15px 20px;
  margin-inline: 10px;
  border-bottom: 1px solid ${Color.Pink};
`;

const Title = styled.p<IProps>`
  flex-grow: 2;
  color: ${({ $isCompleted }) =>
    $isCompleted ? Color.GreyLight : Color.White};
  text-decoration: ${({ $isCompleted }) =>
    $isCompleted ? "line-through" : "none"};
`;
export { StyledListItem, Title };

import { styled } from "styled-components";
import { Color } from "../../ui/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  width: 600px;
  margin-top: 17vh;
  /* background: yellow; */
`;

const InputBox = styled.div`
  display: flex;
  grid-gap: 20px;
`;

const Content = styled.div`
  background: ${Color.Grey};
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px;
  border-top: 1px solid ${Color.GreyLight};
`;

export { Container, InputBox, Content, ButtonContainer };

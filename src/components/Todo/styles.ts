import { styled } from "styled-components";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/media";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 40px;
  width: 600px;
  margin-top: 17vh;

  ${Media.SM} {
    grid-gap: 30px;
    margin-top: 16vh;
  }
`;

const Content = styled.div`
  background: ${Color.Grey};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px;
  border-top: 1px solid ${Color.GreyLight};
`;

export { Container, Content, ButtonContainer };

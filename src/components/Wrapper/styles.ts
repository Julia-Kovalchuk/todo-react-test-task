import { styled } from "styled-components";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/media";

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #003399 0%, #cc00cc 100%);
`;

const Title = styled.h1`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 70%;
  width: 70%;
  margin-inline: auto;
  height: 30vh;
  font-size: 120px;
  color: ${Color.White};

  ${Media.SM} {
    min-width: 100%;
    height: 20vh;
    font-size: 80px;
  }
`;

export { StyledWrapper, Title };

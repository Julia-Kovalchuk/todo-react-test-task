import { styled } from "styled-components";
import { Color } from "../../ui/colors";

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-color: ${Color.GreyDark};
`;

const Title = styled.h1`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 30%;
  background: linear-gradient(to right, #003399 0%, #cc00cc 100%);
  font-size: 120px;
  color: ${Color.White};
  /* opacity: 0.8; */
`;

export { StyledWrapper, Title };

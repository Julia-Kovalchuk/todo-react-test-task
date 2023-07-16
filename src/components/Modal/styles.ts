import { styled } from "styled-components";
import { Color } from "../../ui/colors";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Color.Transparent};
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  padding: 70px 20px;
  border-radius: 30px;
  background: ${Color.Pink};
`;

export { Wrapper, Box };

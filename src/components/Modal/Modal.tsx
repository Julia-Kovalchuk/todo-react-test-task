import { ReactNode, useRef } from "react";
import { useOnClickHide } from "../../hooks/useOnClickHide";
import { Box, Wrapper } from "./styles";

interface IProps {
  children: ReactNode;
  changeModalView: (arg: boolean) => void;
}

export const Modal = ({ children, changeModalView }: IProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useOnClickHide(ref, () => {
    changeModalView(false);
  });

  return (
    <Wrapper>
      <Box ref={ref}>{children}</Box>
    </Wrapper>
  );
};

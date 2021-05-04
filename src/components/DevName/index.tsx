import { Wrapper } from "./styles";

export type DevNameProps = {
  children: React.ReactNode;
  isLogin?: boolean;
};

const DevName = ({ children, isLogin = false }: DevNameProps) => (
  <Wrapper isLogin={isLogin}>{children}</Wrapper>
);

export default DevName;

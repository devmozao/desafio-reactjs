import { Wrapper } from "./styles";

export type DevNumberProps = {
  children: React.ReactNode;
  icon: JSX.Element;
};
const DevNumber = ({ children, icon }: DevNumberProps) => (
  <Wrapper>
    {icon}
    <span>{children}</span>
  </Wrapper>
);

export default DevNumber;

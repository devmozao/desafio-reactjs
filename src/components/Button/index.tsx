import { Wrapper } from "./styles";

export type ButtonProps = {
  children: React.ReactNode;
  icon?: JSX.Element;
  color?: "dark" | "light";
  size?: "normal" | "small";
};

const Button = ({ children, icon, color="dark", size="normal" }: ButtonProps) => (
  <Wrapper type="submit" color={color} size={size}>
    {!!icon && icon}
    <span>{children}</span>
  </Wrapper>
);

export default Button;

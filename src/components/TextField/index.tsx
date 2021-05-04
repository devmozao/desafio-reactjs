import { Wrapper } from "./styles";

export type TextFieldProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField = ({ onChange }: TextFieldProps) => (
  <Wrapper
    placeholder="Type the username here..."
    onChange={onChange}
  ></Wrapper>
);

export default TextField;

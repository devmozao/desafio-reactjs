import * as S from "./styles";

export type TextFieldProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField = ({ onChange }: TextFieldProps) => (
  <S.Wrapper
    placeholder="Type the username here..."
    onChange={onChange}
  ></S.Wrapper>
);

export default TextField;

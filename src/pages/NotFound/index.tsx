import { DocumentError } from "@styled-icons/fluentui-system-regular/DocumentError";
import Button from "components/Button";
import { Link } from "react-router-dom";
import { Wrapper } from "./styles";

const NotFound = () => {
  return (
    <Wrapper>
      <h1>
        <DocumentError />
        Error 404: Page not found!
      </h1>
      <Link to="/">
        <Button  size="small">
          Voltar
        </Button>
      </Link>
    </Wrapper>
  );
};

export default NotFound;

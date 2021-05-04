import { Wrapper } from "./styles";

export type DevLinkProps = {
  children: React.ReactNode;
  icon: JSX.Element;
  href?: string;
  asLink?: boolean;
};
const DevLink = ({
  children,
  href = "#",
  icon,
  asLink = false,
}: DevLinkProps) => (
  <Wrapper>
    {icon}
    {asLink ? (
      <a href={href} target="_blank" rel="noReferrer">
        {children}
      </a>
    ) : (
       children
    )}
  </Wrapper>
);

export default DevLink;

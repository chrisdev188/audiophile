import { MaxWidthContainer } from "../../../globalStyles";
import { HeaderText, StyledHeader } from "./styles";

interface HeaderProps {
  categoryName: "headphones" | "speakers" | "earphones";
}

const Header: React.FunctionComponent<HeaderProps> = ({ categoryName }) => {
  return (
    <StyledHeader as="header">
      <MaxWidthContainer>
        <HeaderText as="h2">{categoryName}</HeaderText>
      </MaxWidthContainer>
    </StyledHeader>
  );
};

export default Header;

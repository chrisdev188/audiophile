import { HeadingTwo, MaxWidthContainer } from "../../styles";
import { StyledHeader } from "./styles";

interface HeaderProps {
  categoryName: "headphones" | "speakers" | "earphones";
}

const Header: React.FunctionComponent<HeaderProps> = ({ categoryName }) => {
  return (
    <StyledHeader>
      <MaxWidthContainer>
        <div className="content">
          <HeadingTwo>{categoryName}</HeadingTwo>
        </div>
      </MaxWidthContainer>
    </StyledHeader>
  );
};

export default Header;

import LogoIcon from "../icons/LogoIcon";
import { LogoLink } from "./Logo.styles";

interface ILogoProps {}

const Logo: React.FunctionComponent<ILogoProps> = (props) => {
  return (
    <LogoLink to="/">
      <LogoIcon />
    </LogoLink>
  );
};

export default Logo;

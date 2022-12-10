import LogoIcon from "../icons/LogoIcon";
import { LogoLink } from "./Logo.styles";

const Logo = () => {
  return (
    <LogoLink to="/">
      <LogoIcon />
    </LogoLink>
  );
};

export default Logo;

import LogoIcon from "../icons/LogoIcon";
import { LogoLink } from "./Logo.styles";

const Logo = () => {
  return (
    <LogoLink to="/" aria-label="brand logo">
      <LogoIcon />
    </LogoLink>
  );
};

export default Logo;

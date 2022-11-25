import logo from "../../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";

const Logo: React.FunctionComponent = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Audiophile" />
    </Link>
  );
};

export default Logo;

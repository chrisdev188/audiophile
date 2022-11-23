import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default App;

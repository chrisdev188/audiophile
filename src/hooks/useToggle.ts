import { useCallback, useState } from "react";

const useToggle = (initialValue: true | false) => {
  const [value, setValue] = useState(initialValue);
  const handleToggleValue = useCallback(() => {
    setValue((prevValue) => !prevValue);
  }, []);
  return [value, handleToggleValue];
};
export default useToggle;

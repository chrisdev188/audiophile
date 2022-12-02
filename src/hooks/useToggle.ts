import { useCallback, useState, Dispatch, SetStateAction } from "react";

type UseToggleOutput = [boolean, () => void, Dispatch<SetStateAction<boolean>>];

const useToggle = (initialValue?: boolean): UseToggleOutput => {
  const [value, setValue] = useState(!!initialValue);
  const toggle = useCallback(() => {
    setValue((prevValue) => !prevValue);
  }, []);
  return [value, toggle, setValue];
};
export default useToggle;

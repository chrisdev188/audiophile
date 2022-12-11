import { useEffect } from "react";

const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  handler: () => void
) => {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const element = ref?.current;

      // do nothing if element not mounted or clicking on element or element's decendants
      if (!element || element.contains(e.target as Node)) {
        return;
      }

      // handle click outside
      handler();
    };

    window.addEventListener("click", (e) => onClick(e));

    return window.removeEventListener("click", (e) => onClick(e));
  }, []);
};

export default useClickOutside;

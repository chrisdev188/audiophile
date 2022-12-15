import { useCallback, useEffect, useState } from "react";

export type ToastType = "success" | "warning" | "error";
export type ToastTimer = 3000 | 5000 | 7000;

const useToast = (
  toastType: ToastType = "success",
  toastMessage: string,
  toastTimer: ToastTimer = 3000
) => {
  const [isToastShowing, setIsToastShowing] = useState(false);

  const showToast = useCallback(() => {
    setIsToastShowing(true);
  }, [setIsToastShowing]);

  const hideToast = useCallback(() => {
    setIsToastShowing(false);
  }, [setIsToastShowing]);

  useEffect(() => {
    if (isToastShowing) {
      setTimeout(() => {
        hideToast();
      }, toastTimer);
    }
  }, [isToastShowing, hideToast]);

  return { isToastShowing, showToast, hideToast, toastMessage };
};

export default useToast;

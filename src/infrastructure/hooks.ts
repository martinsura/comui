import { useEffect, useRef } from "react";

export const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

export const useMounted = () => {
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
};

export const useKey = (key: any, action: () => void) => {
  useEffect(() => {
    function onKeyup(e: KeyboardEvent) {
      if (e.key === key) {
        action();
      }
    }
    window.addEventListener("keyup", onKeyup);
    return () => window.removeEventListener("keyup", onKeyup);
  }, []);
};

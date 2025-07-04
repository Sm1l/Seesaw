import React, { useEffect, useRef } from "react";

import { waterRippleEffect } from "../../scripts/animations/waterRippleEffect";
import SplashCursor from "../SplashCursor/SplashCursor";
import styles from "./Wrapper.module.scss";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    waterRippleEffect(`.${styles.wrapper}`);
  }, []);
  return (
    <div id={styles.wrapper} ref={wrapperRef} className={styles.wrapper}>
      {children}
      <SplashCursor />
    </div>
  );
};

export { Wrapper };

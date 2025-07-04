import React from "react";

import styles from "./Header.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <h1>We are Seesaw</h1>
    </header>
  );
};

export { Header };

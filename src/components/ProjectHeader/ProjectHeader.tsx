import React from "react";

import { ContactUsButton } from "../ContactUsButton/ContactUsButton";
import styles from "./ProjectHeader.module.scss";

interface ProjectHeaderProps {}

const ProjectHeader: React.FC<ProjectHeaderProps> = () => {
  return (
    <div className={styles.projectHeader}>
      <a className={styles.logo} href="/">
        <img src="/img/seesaw_min.svg" alt="seesaw" className={styles.logoImg} />
      </a>
      <ContactUsButton />
    </div>
  );
};

export { ProjectHeader };

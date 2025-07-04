import React from "react";

import seeSawMinUrl from "../../assets/img/seesaw_min.svg?url";
import { ContactUsButton } from "../ContactUsButton/ContactUsButton";
import styles from "./ProjectHeader.module.scss";

interface ProjectHeaderProps {}

const ProjectHeader: React.FC<ProjectHeaderProps> = () => {
  return (
    <div className={styles.projectHeader}>
      <a className={styles.logo} href={`${import.meta.env.BASE_URL}`}>
        <img src={seeSawMinUrl} alt="seesaw" className={styles.logoImg} />
      </a>
      <ContactUsButton />
    </div>
  );
};

export { ProjectHeader };

import React from "react";

import { ProjectAbout } from "../ProjectAbout/ProjectAbout";
import { ProjectHeader } from "../ProjectHeader/ProjectHeader";
import styles from "./Project.module.scss";
interface ProjectProps {}

const Project: React.FC<ProjectProps> = () => {
  return (
    <header className={styles.project}>
      <ProjectHeader />
      <ProjectAbout
        titleProject="Avacha Harbor"
        aboutProject="Avacha Harbor is a coastal hotel with views of the volcano"
        titleSeesaw="Seesaw has done"
        aboutSeesaw="website development / branding / texts / photoshoot"
      />
    </header>
  );
};

export { Project };

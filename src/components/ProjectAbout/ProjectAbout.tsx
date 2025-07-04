import React from "react";
import styles from "./ProjectAbout.module.scss";

interface ProjectAboutProps {
  titleProject: string;
  aboutProject: string;
  titleSeesaw: string;
  aboutSeesaw: string;
}

const ProjectAbout: React.FC<ProjectAboutProps> = ({ titleProject, aboutProject, titleSeesaw, aboutSeesaw }) => {
  return (
    <div className={styles.projectAbout}>
      <div className={styles.aboutContainer}>
        <h4 className={styles.aboutTitle}>{titleProject}</h4>
        <p className={styles.aboutText}>{aboutProject}</p>
      </div>
      <div className={styles.aboutContainer}>
        <h4 className={styles.aboutTitle}>{titleSeesaw}</h4>
        <p className={styles.aboutText}>{aboutSeesaw}</p>
      </div>
    </div>
  );
};

export { ProjectAbout };

import React from "react";

import styles from "./ProjectPicture.module.scss";

interface ProjectPictureProps {
  src: string;
  alt?: string;
}

const ProjectPicture: React.FC<ProjectPictureProps> = ({ src, alt }) => {
  return (
    <section className={styles.projectPicture}>
      <img className={styles.img} src={src} alt={alt} />
    </section>
  );
};

export { ProjectPicture };

import React from "react";

import instagramUrl from "../../assets/img/instagram.svg?url";
import seeSawMinUrl from "../../assets/img/seesaw_min.svg?url";
import styles from "./Footer.module.scss";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.contacts}>
      <div className={styles.contacts_background}>
        <div className={`${styles.contacts_container} padding`}>
          <h2 className={styles.contacts_title}>Contacts</h2>
          <div className={styles.contacts_linkContainer}>
            <img src={instagramUrl} alt="Instagram" className={styles.contacts_img} />
            <a href="https://www.instagram.com/wowseesaw" className={styles.contacts_link} target="_blank">
              @wowseesaw
            </a>
          </div>
          <div className={styles.contacts_logo}>
            <img src={seeSawMinUrl} alt="seesaw" className={styles.contacts_logoImg} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };

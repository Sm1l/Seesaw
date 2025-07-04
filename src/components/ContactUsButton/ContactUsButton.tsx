import React from "react";

import styles from "./ContactUsButton.module.scss";

interface ContactUsButtonProps {}

const ContactUsButton: React.FC<ContactUsButtonProps> = () => {
  const buttonClick = () => {
    console.log("click");
  };
  return (
    <button onClick={buttonClick} className={styles.contactUsButton}>
      contact us
    </button>
  );
};

export { ContactUsButton };

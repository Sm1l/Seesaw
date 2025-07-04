import React, { useEffect } from "react";

import { runningLine } from "../../scripts/animations/runningLine";
import styles from "./OurDesign.module.scss";

interface OurDesignProps {}

const OurDesign: React.FC<OurDesignProps> = () => {
  useEffect(() => {
    runningLine("#lineOne", "right");
    runningLine("#lineTwo", "left");
    runningLine("#lineThree", "right");
  }, []);

  return (
    <section className={`${styles.ourDesign} padding`}>
      <h2 className={styles.ourDesign_title}>Our design is</h2>
      <div className={styles.ourDesign_textContainer}>
        <div className={styles.ourDesign_singleTextContainer}>
          <p className={styles.ourDesign_text} id="lineOne">
            intuitive / brave / timeless / useful / human-oriented / unique / empathic / working / inspiring / relevant
            / demandful / bold / impactful / chic /&#160;
          </p>
        </div>
        <div className={styles.ourDesign_singleTextContainer}>
          <p className={styles.ourDesign_text} id="lineTwo">
            unique / empathic / working / inspiring / relevant / demandful / bold / impactful / chic / intuitive / brave
            / timeless / useful / human-oriented /&#160;
          </p>
        </div>
        <div className={styles.ourDesign_singleTextContainer}>
          <p className={styles.ourDesign_text} id="lineThree">
            demandful / bold / impactful / chic / intuitive / brave / timeless / useful / human-oriented / unique /
            empathic / working / inspiring / relevant /&#160;
          </p>
        </div>
      </div>
    </section>
  );
};

export { OurDesign };

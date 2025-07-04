import React, { useEffect } from "react";

import seeUrl from "../../assets/img/see.svg?url";
import sawUrl from "../../assets/img/saw.svg?url";
import { aurora } from "../../scripts/animations/aurora";
import { auroraCenter } from "../../scripts/animations/auroraCenter";
import { letterFade } from "../../scripts/animations/letterFade";
import styles from "./WeAreSeesaw.module.scss";

interface WeAreSeesawProps {}

const WeAreSeesaw: React.FC<WeAreSeesawProps> = () => {
  useEffect(() => {
    aurora(`.${styles.weAreSeesaw} `);
    auroraCenter(`.${styles.weAreSeesaw} `);
    letterFade(`.${styles.weAreSeesaw_title} `);
  }, []);

  return (
    <section className={`${styles.weAreSeesaw} padding`}>
      <div className={styles.weAreSeesaw_container}>
        <div className={styles.weAreSeesaw_titleContainer}>
          <p className={styles.weAreSeesaw_title}>we are</p>
          <div className={styles.weAreSeesaw_logoContainer}>
            <div className={`${styles.weAreSeesaw_imgContainer} ${styles.weAreSeesaw_imgContainer_see} ibg`}>
              <img className={styles.weAreSeesaw_img} src={seeUrl} alt="see logo" />
            </div>
            <div className={`${styles.weAreSeesaw_imgContainer} ${styles.weAreSeesaw_imgContainer_saw} ibg`}>
              <img className={styles.weAreSeesaw_img} src={sawUrl} alt="saw logo" />
            </div>
            {/* <!-- <picture>
                <source srcset="./src/assets/img/seesaw.avif" type="image/avif" />
                <source srcset="./src/assets/img/seesaw.webp" type="image/webp" />
                <img className="weAreSeesaw_img" src="./src/assets/img/seesaw.svg" alt="seesaw logo" />
              </picture> --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export { WeAreSeesaw };

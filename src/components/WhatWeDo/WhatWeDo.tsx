import React from "react";

import styles from "./WhatWeDo.module.scss";

interface WhatWeDoProps {}

const WhatWeDo: React.FC<WhatWeDoProps> = () => {
  return (
    <section className={`${styles.whatWeDo} padding`}>
      <div className={styles.whatWeDo_titleContainer}>
        <h2 className={styles.whatWeDo_title}>What we do</h2>
      </div>
      <div className={styles.whatWeDo_textContainer}>
        <p className={styles.whatWeDo_text}>
          websites / branding / merch / brand guidelines / smm / ux researches / performance creatives / banners / print
          production & whatever
        </p>
        <span className={styles.whatWeDo_text_span}>you</span>
        <p className={styles.whatWeDo_text}>want</p>
      </div>
    </section>
  );
};

export { WhatWeDo };

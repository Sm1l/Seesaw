import React from "react";

import styles from "./MakeAProduct.module.scss";
import outlineUrl from "../../assets/img/outline.svg?url";

interface MakeAProductProps {}

const MakeAProduct: React.FC<MakeAProductProps> = () => {
  return (
    <section className={` ${styles.makeAProduct} padding`}>
      <div className={styles.makeAProduct_titleWrapper}>
        <h2 className={styles.makeAProduct_title}>
          <span className={styles.makeAProduct_text}>& we will make a</span>
          <span className={styles.makeAProduct_span}>
            product
            <img className={styles.makeAProduct_img} src={outlineUrl} alt="outline" />
          </span>
          <span className={styles.makeAProduct_text}>from your idea</span>
        </h2>
      </div>
    </section>
  );
};

export { MakeAProduct };

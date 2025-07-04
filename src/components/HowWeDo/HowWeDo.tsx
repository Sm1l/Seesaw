import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import logoUrl from "../../assets/img/avachaLogo.svg?url";
import imgUrl from "../../assets/img/avachaPic.jpg?url";
import styles from "./HowWeDo.module.scss";
import styles2 from "./HowWeDoSwiper.module.scss";

interface HowWeDoProps {}

const HowWeDo: React.FC<HowWeDoProps> = () => {
  return (
    <div className={styles.howWeDo}>
      <div className={styles.howWeDo_container}>
        <h2 className={styles.howWeDo_title}>How we do</h2>
      </div>
      <Swiper
        className={styles2.howWeDoSwiper}
        spaceBetween={30}
        slidesPerView={2.2}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
            spaceBetween: 12,
          },
          480: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide className={styles2.howWeDoSwiperSlide}>
          <a className={styles2.howWeDoSwiper_link} href={`${import.meta.env.BASE_URL}avacha`}>
            <img className={styles2.howWeDoSwiper_img} src={imgUrl} alt="avacha" />
            <img className={styles2.howWeDoSwiper_imgLogo} src={logoUrl} alt="logo" />
          </a>
          <div className={styles2.howWeDoSwiper_textContainer}>
            <p className={styles2.howWeDoSwiper_brand}>Avacha</p>
            <span className={styles2.howWeDoSwiper_text}>website development</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles2.howWeDoSwiperSlide}>
          <a className={styles2.howWeDoSwiper_link} href="">
            <img className={styles2.howWeDoSwiper_img} src={imgUrl} alt="avacha" />
            <img className={styles2.howWeDoSwiper_imgLogo} src={logoUrl} alt="logo" />
          </a>
          <div className={styles2.howWeDoSwiper_textContainer}>
            <p className={styles2.howWeDoSwiper_brand}>Sultagro</p>
            <span className={styles2.howWeDoSwiper_text}>branding</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles2.howWeDoSwiperSlide}>
          <a className={styles2.howWeDoSwiper_link} href="">
            <img className={styles2.howWeDoSwiper_img} src={imgUrl} alt="avacha" />
            <img className={styles2.howWeDoSwiper_imgLogo} src={logoUrl} alt="logo" />
          </a>
          <div className={styles2.howWeDoSwiper_textContainer}>
            <p className={styles2.howWeDoSwiper_brand}>Something</p>
            <span className={styles2.howWeDoSwiper_text}>about</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export { HowWeDo };

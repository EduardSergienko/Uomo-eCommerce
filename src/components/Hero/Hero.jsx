import { useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCreative,
} from 'swiper';
import 'swiper/css';
import 'swiper/scss/pagination';

import { Link } from 'react-router-dom';
import styles from './Hero.module.scss';
import SliderImg from '../../img/slide_img.jpg';
import SliderImgMob from '../../img/slide_img_mob.jpg';
import SocialLinks from 'components/SocialLinks/SocialLinks';
export default function Hero() {
  const desktopWidth = useMediaQuery('(min-width:1410px)');

  return (
    <section className={styles.hero}>
      {desktopWidth && <SocialLinks />}
      <div className={styles.mainHeroContent}>
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectCreative,
          ]}
          spaceBetween={10}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          autoplay={{ pauseOnMouseEnter: true, disableOnInteraction: false }}
          loop={true}
          speed={500}
        >
          <SwiperSlide className={styles.slide}>
            <div className={styles.slideTexContent}>
              <p>NEW TREND</p>
              <h2>
                SUMMER SALE STYLISH <span>WOMENS</span>
              </h2>
              <Link>DISCOVER MORE</Link>
            </div>
            <div className={styles.slideImg}>
              <picture>
                <source
                  type="image/jpeg"
                  media="(min-width: 1410px)"
                  srcSet={SliderImg}
                />
                <source
                  type="image/jpeg"
                  media="(max-width: 1409px)"
                  srcSet={SliderImgMob}
                />
                <img src={SliderImg} alt="" />
              </picture>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.slideTexContent}>
              <p>NEW TREND</p>
              <h2>
                SUMMER SALE STYLISH <span>MENS</span>
              </h2>
              <Link>DISCOVER MORE</Link>
            </div>
            <div className={styles.slideImg}>
              <picture>
                <source
                  type="image/jpeg"
                  media="(min-width: 1410px)"
                  srcSet={SliderImg}
                />
                <source
                  type="image/jpeg"
                  media="(max-width: 1409px)"
                  srcSet={SliderImgMob}
                />
                <img src={SliderImg} alt="" />
              </picture>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.slideTexContent}>
              <p>NEW TREND</p>
              <h2>
                SUMMER SALE STYLISH <span>KIDS</span>
              </h2>
              <Link>DISCOVER MORE</Link>
            </div>
            <div className={styles.slideImg}>
              <picture>
                <source
                  type="image/jpeg"
                  media="(min-width: 1410px)"
                  srcSet={SliderImg}
                />
                <source
                  type="image/jpeg"
                  media="(max-width: 1409px)"
                  srcSet={SliderImgMob}
                />
                <img src={SliderImg} alt="" />
              </picture>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.slideTexContent}>
              <p>NEW TREND</p>
              <h2>
                SUMMER SALE STYLISH <span>VODISLOVE</span>
              </h2>
              <Link>DISCOVER MORE</Link>
            </div>
            <div className={styles.slideImg}>
              <picture>
                <source
                  type="image/jpeg"
                  media="(min-width: 1410px)"
                  srcSet={SliderImg}
                />
                <source
                  type="image/jpeg"
                  media="(max-width: 1409px)"
                  srcSet={SliderImgMob}
                />
                <img src={SliderImg} alt="" />
              </picture>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.sideText}>
        <p>SCROLL</p>
      </div>
    </section>
  );
}

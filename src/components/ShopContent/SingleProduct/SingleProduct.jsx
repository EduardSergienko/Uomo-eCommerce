import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, FreeMode, Navigation } from 'swiper';
import styles from './SingleProduct.module.scss';
import { shopData } from 'data/shopData';
import Container from 'components/Container/Container';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '../../../scssUtils/productCardSlider.scss';
export default function SingleProduct({ productId }) {
  const product = shopData.filter(item => item.id === productId);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // const itemImgs = product.map(item => item.additionalImg);

  // const slideCreator = arr => {
  //   arr.map(
  //     item => console.log(item)

  //     // <SwiperSlide>
  //     //   <img src={item} alt="" />
  //     // </SwiperSlide>
  //   );
  // };

  return (
    <section className={styles.cardSection}>
      <Container>
        <Swiper
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {product.map(item =>
            item.additionalImg.map(item => (
              <SwiperSlide>
                <img src={item} alt="" />
              </SwiperSlide>
            ))
          )}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={5}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={styles.mySwiper2}
          direction="vertical"
        >
          {product.map(item =>
            item.additionalImg.map(item => (
              <SwiperSlide className={styles.swiperSlide}>
                <img width={90} height={90} src={item} alt="" />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </Container>
    </section>
  );
}

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';

import './partner.css';
import part1 from '../../assets/logo partner/BINANCE.png';
import part2 from '../../assets/logo partner/coinbase.png';
import part3 from '../../assets/logo partner/ZERION.png';
import part4 from '../../assets/logo partner/ZAPPER.png';
import part5 from '../../assets/logo partner/INSTAAPP.png';
import part6 from '../../assets/logo partner/NEAR.png';

const logos = [
  { src: part1, alt: 'Binance' },
  { src: part2, alt: 'Coinbase' },
  { src: part3, alt: 'Zerion' },
  { src: part4, alt: 'Zapper' },
  { src: part5, alt: 'InstaApp' },
  { src: part6, alt: 'NEAR' },
];

export function Partner() {
  return (
    <>
      <h6 className='title-h6'><span className='span-partner'>BINABOX</span> PARTNER</h6>
      <div className="custom-swiper-container partner">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={6}
          spaceBetween={3}
          loop={true}
          freeMode={true}
          autoplay={{ delay: 4000, disableOnInteraction: false, reverseDirection: false }}
          speed={400} 
          grabCursor={true}
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <SwiperSlide key={index} className="partner-logo-slide">
              <div className={`partner-logo-wrapper ${index % 2 === 0 ? 'grey-background' : ''}`}>
                <img src={logo.src} alt={logo.alt} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';

import './partner.css';
import part1 from '../../assets/logo partner/VENLY.png';
import part2 from '../../assets/logo partner/PILLAR.png';
import part3 from '../../assets/logo partner/DAPPRRADAR.png';
import part4 from '../../assets/logo partner/NEAR.png';
import part5 from '../../assets/logo partner/TRUSTWALLET.png';
import part6 from '../../assets/logo partner/GIVINGBLOCK.png';

const logos = [
    { src: part1, alt: 'VENLY' },
    { src: part2, alt: 'PILLAR' },
  { src: part3, alt: 'DAPPRRADAR' },
  { src: part4, alt: 'NEAR' },
  { src: part5, alt: 'TRUSTWALLET' },
  { src: part6, alt: 'GIVINGBLOCK' },
];

export function Partner2() {
  return (
    <>
      <div className="custom-swiper-container partner">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={6}
          spaceBetween={3}
          loop={true}
          freeMode={true}
          autoplay={{ delay: 2000, disableOnInteraction: false, reverseDirection: true }}
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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';

import './partner.css';
import part1 from '../../assets/logo partner/HUOBIWALLET.png';
import part2 from '../../assets/logo partner/SYNTHETIX.png';
import part3 from '../../assets/logo partner/UNSTOPPABLE.png';
import part4 from '../../assets/logo partner/LIVECOINWATCH.png';
import part5 from '../../assets/logo partner/BITPAY.png';
import part6 from '../../assets/logo partner/UNSTAPPABLEDOMAIN.png';

const logos = [
  { src: part1, alt: 'HUOBIWALLET' },
  { src: part2, alt: 'SYNTHETIX' },
  { src: part3, alt: 'UNSTOPPABLE' },
  { src: part4, alt: 'LIVECOINWATCH' },
  { src: part5, alt: 'BITPAY' },
  { src: part6, alt: 'UNSTAPPABLEDOMAIN' },
];

export function Partner3() {
  return (
    <>
      <div className="custom-swiper-container partner">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={6}
          spaceBetween={3}
          loop={true}
          freeMode={true}
          autoplay={{ delay: 3000, disableOnInteraction: false, reverseDirection: false }}
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
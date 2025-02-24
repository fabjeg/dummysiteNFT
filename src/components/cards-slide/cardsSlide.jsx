import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "./cardsSlide.css";
import nft1 from "../../assets/pictures/nft1-1.jpg";
import nft2 from "../../assets/pictures/nft2-2.jpg";
import nft3 from "../../assets/pictures/nft3-3.jpg";
import nft4 from "../../assets/pictures/nft4-4.jpg";
import nft5 from "../../assets/pictures/nft5-5.jpg";
import nft6 from "../../assets/pictures/nft6-6.jpg";
import nft7 from "../../assets/pictures/nft7.jpg";
import nft8 from "../../assets/pictures/nft8.jpg";
import nft9 from "../../assets/pictures/nft9.jpg";
import nft10 from "../../assets/pictures/nft10.jpg";
import nft11 from "../../assets/pictures/nft11.jpg";

const cardsData = [
  { img: nft1, title: "SKISIRS #01" },
  { img: nft2, title: "SKISIRS #02" },
  { img: nft3, title: "SKISIRS #03" },
  { img: nft4, title: "SKISIRS #04" },
  { img: nft5, title: "SKISIRS #05" },
  { img: nft6, title: "SKISIRS #06" },
  { img: nft7, title: "SKISIRS #07" },
  { img: nft8, title: "SKISIRS #08" },
  { img: nft9, title: "SKISIRS #09" },
  { img: nft10, title: "SKISIRS #10" },
  { img: nft11, title: "SKISIRS #11" },
];

export function SlideAutoCards() {
  return (
    <div className="custom-swiper-container">
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView={6}
        spaceBetween={3}
        loop={true}
        freeMode={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={10000} 
        grabCursor={true}
        breakpoints={{
          0: { slidesPerView: 3, spaceBetween: 3 }, 
          901: { slidesPerView: 6, spaceBetween: 3 }, 
        }}
      >
        {[...cardsData, ...cardsData].map((card, index) => (
          <SwiperSlide key={index} className="cards-about-slide">
            <img src={card.img} alt={card.title} className="pictures-slide" />
            <strong className="strong-cards-slide">{card.title}</strong>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView={6}
        spaceBetween={3}
        loop={true}
        freeMode={true}
        autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
        speed={10000} 
        grabCursor={true}
        breakpoints={{
          0: { slidesPerView: 3, spaceBetween: 3 }, 
          901: { slidesPerView: 6, spaceBetween: 3 }, 
        }}
      >
        {[...cardsData, ...cardsData].map((card, index) => (
          <SwiperSlide key={index} className="cards-about-slide">
            <img src={card.img} alt={card.title} className="pictures-slide" />
            <strong className="strong-cards-slide">{card.title}</strong>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

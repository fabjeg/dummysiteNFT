import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slideRoadMap.css";
import { Pagination, Navigation } from "swiper/modules";

export function SlideRoadMap() {
  const valueCards = [
    {
      title: "PHASE 1",
      txt: "Befriending & Chat Functions. Challenging Feature. Corsair Wheel. Mobile Version Launch",
    },
    {
      title: "PHASE 2",
      txt: "Befriending & Chat Functions. Challenging Feature. Corsair Wheel. Mobile Version Launch",
    },
    {
      title: "PHASE 3",
      txt: "Befriending & Chat Functions. Challenging Feature. Corsair Wheel. Mobile Version Launch",
    },
    {
      title: "PHASE 4",
      txt: "Befriending & Chat Functions. Challenging Feature. Corsair Wheel. Mobile Version Launch",
    },
    {
      title: "PHASE 5",
      txt: "Befriending & Chat Functions. Challenging Feature. Corsair Wheel. Mobile Version Launch",
    },
    {
      title: "PHASE 6",
      txt: "Befriending & Chat Functions. Challenging Feature. Corsair Wheel. Mobile Version Launch",
    },
  ];

  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          el: ".swiper-pagination",
          type: "progressbar",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        grabCursor={true}
      >
        {valueCards.map((value, idx) => (
          <SwiperSlide key={idx}>
            <div className="cards-about-slide">
              <h5 className="title-h5">{value.title}</h5>
              <ul className="li_txt">
                {value.txt
                  .split(".")
                  .filter(Boolean)
                  .map((sentence, index) => (
                    <li key={index}>{sentence.trim()}.</li>
                  ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
}
